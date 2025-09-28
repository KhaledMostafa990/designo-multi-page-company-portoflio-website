import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function POST(req: Request) {
  const body = await req.json();
  const { email } = body as { email?: string };

  if (!email || typeof email !== 'string') {
    return NextResponse.json({ error: 'Email is required' }, { status: 400 });
  }

  if (!supabase) {
    return NextResponse.json({ error: 'Authentication service not available' }, { status: 500 });
  }

  try {
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${siteUrl}/api/auth/callback?type=recovery`,
    });

    if (error) {
      console.error('Password reset error:', error);
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    return NextResponse.json({
      message: 'Password reset email sent. Please check your inbox.',
    });
  } catch (err) {
    console.error('Unexpected error in password reset:', err);
    return NextResponse.json({ error: 'An unexpected error occurred' }, { status: 500 });
  }
}

export async function PUT(req: Request) {
  const body = await req.json();
  const {
    password,
    access_token: accessToken,
    refresh_token: refreshToken,
  } = body as {
    password?: string;
    access_token?: string;
    refresh_token?: string;
  };

  if (!password || typeof password !== 'string') {
    return NextResponse.json({ error: 'New password is required' }, { status: 400 });
  }
  if (!accessToken || typeof accessToken !== 'string') {
    return NextResponse.json({ error: 'Access token is required' }, { status: 400 });
  }

  if (!supabase) {
    return NextResponse.json({ error: 'Authentication service not available' }, { status: 500 });
  }

  try {
    const { error: sessionError } = await supabase.auth.setSession({
      access_token: accessToken,
      refresh_token: refreshToken as string,
    });

    if (sessionError) {
      console.error('Session error:', sessionError);
      return NextResponse.json({ error: 'Invalid or expired token' }, { status: 401 });
    }

    const { error: updateError } = await supabase.auth.updateUser({ password });

    if (updateError) {
      console.error('Password update error:', updateError);
      return NextResponse.json({ error: updateError.message }, { status: 400 });
    }

    return NextResponse.json({ message: 'Password updated successfully' });
  } catch (err) {
    console.error('Unexpected error in password update:', err);
    return NextResponse.json({ error: 'An unexpected error occurred' }, { status: 500 });
  }
}
