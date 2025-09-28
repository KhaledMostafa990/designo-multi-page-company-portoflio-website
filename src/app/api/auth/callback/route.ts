import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

export async function GET(req: Request) {
  const url = new URL(req.url);
  const code = url.searchParams.get('code');
  const type = url.searchParams.get('type');
  const next = url.searchParams.get('next');

  if (req.method !== 'GET') {
    return NextResponse.json({ error: 'Method not allowed' }, { status: 405 });
  }

  if (!code) {
    return NextResponse.json({ error: 'Missing or invalid confirmation code' }, { status: 400 });
  }

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

  const supabase = createClient(supabaseUrl, serviceRoleKey);

  try {
    const { data, error } = await supabase.auth.exchangeCodeForSession(code);

    if (error) {
      console.error('Auth callback error:', error);
      return NextResponse.redirect(
        new URL(`/auth/error?message=${encodeURIComponent(error.message)}`, url.origin),
      );
    }

    if (!data.user) {
      return NextResponse.redirect(new URL('/auth/error?message=No user found', url.origin));
    }

    if (type === 'recovery') {
      return NextResponse.redirect(
        new URL(
          `/auth/reset-password?access_token=${data.session?.access_token}&refresh_token=${data.session?.refresh_token}`,
          url.origin,
        ),
      );
    }

    if (type === 'signup' || type === 'email_confirmation') {
      const redirectUrl = next || '/?confirmed=true';
      return NextResponse.redirect(new URL(redirectUrl, url.origin));
    }

    const redirectUrl = next || '/';
    return NextResponse.redirect(new URL(redirectUrl, url.origin));
  } catch (err) {
    console.error('Unexpected error in auth callback:', err);
    return NextResponse.redirect(
      new URL('/auth/error?message=An unexpected error occurred', url.origin),
    );
  }
}
