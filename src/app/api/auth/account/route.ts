import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';
import { prisma } from '@/lib/prisma';

export async function GET(req: Request) {
  if (!supabase) {
    return NextResponse.json({ error: 'Authentication service not available' }, { status: 500 });
  }

  const authHeader = req.headers.get('authorization');
  if (!authHeader) {
    return NextResponse.json({ error: 'Authorization header required' }, { status: 401 });
  }

  const token = authHeader.replace('Bearer ', '');
  const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser(token);

  if (authError || !user) {
    return NextResponse.json({ error: 'Invalid or expired token' }, { status: 401 });
  }

  try {
    const { data, error } = await supabase.auth.getUser(token);
    if (error || !data.user) {
      return NextResponse.json({ error: 'User not found' }, { status: 401 });
    }
    return NextResponse.json({
      user: {
        id: data.user.id,
        email: data.user.email,
        email_confirmed_at: (data.user as any).email_confirmed_at,
        created_at: (data.user as any).created_at,
        updated_at: (data.user as any).updated_at,
      },
    });
  } catch (err) {
    console.error('Error fetching user profile:', err);
    return NextResponse.json({ error: 'Failed to fetch profile' }, { status: 500 });
  }
}

export async function PUT(req: Request) {
  if (!supabase) {
    return NextResponse.json({ error: 'Authentication service not available' }, { status: 500 });
  }

  const authHeader = req.headers.get('authorization');
  if (!authHeader) {
    return NextResponse.json({ error: 'Authorization header required' }, { status: 401 });
  }
  const token = authHeader.replace('Bearer ', '');
  const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser(token);

  if (authError || !user) {
    return NextResponse.json({ error: 'Invalid or expired token' }, { status: 401 });
  }

  const body = await req.json();
  const { email, password } = body as { email?: string; password?: string };

  try {
    const updateData: any = {};
    if (email && email !== user.email) updateData.email = email;
    if (password) updateData.password = password;

    const { data, error } = await supabase.auth.updateUser(updateData);
    if (error) {
      console.error('Profile update error:', error);
      return NextResponse.json({ error: error.message }, { status: 400 });
    }
    return NextResponse.json({
      message: 'Profile updated successfully',
      user: {
        id: data.user?.id,
        email: data.user?.email,
        email_confirmed_at: (data.user as any)?.email_confirmed_at,
      },
    });
  } catch (err) {
    console.error('Unexpected error in profile update:', err);
    return NextResponse.json({ error: 'An unexpected error occurred' }, { status: 500 });
  }
}

export async function DELETE(req: Request) {
  if (!supabase) {
    return NextResponse.json({ error: 'Authentication service not available' }, { status: 500 });
  }

  const authHeader = req.headers.get('authorization');
  if (!authHeader) {
    return NextResponse.json({ error: 'Authorization header required' }, { status: 401 });
  }
  const token = authHeader.replace('Bearer ', '');
  const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser(token);

  if (authError || !user) {
    return NextResponse.json({ error: 'Invalid or expired token' }, { status: 401 });
  }

  const body = await req.json();
  const { confirmPassword } = body as { confirmPassword?: string };
  if (!confirmPassword) {
    return NextResponse.json({ error: 'Password confirmation required' }, { status: 400 });
  }

  try {
    const { error: verifyError } = await supabase.auth.signInWithPassword({
      email: user.email!,
      password: confirmPassword,
    });
    if (verifyError) {
      return NextResponse.json({ error: 'Invalid password confirmation' }, { status: 400 });
    }

    try {
      await prisma.user.delete({ where: { supabaseId: user.id } });
    } catch (dbErr) {
      console.warn('User deletion in DB skipped or failed:', dbErr);
    }

    await supabase.auth.signOut();
    return NextResponse.json({
      message:
        'Account deletion requested. Your data has been removed from our system where applicable.',
    });
  } catch (err) {
    console.error('Error deleting account:', err);
    return NextResponse.json({ error: 'Failed to delete account' }, { status: 500 });
  }
}
