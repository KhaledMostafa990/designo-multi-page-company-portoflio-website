import { NextApiRequest, NextApiResponse } from 'next';
import { createClient } from '@supabase/supabase-js';

// Server-side client for exchanging code for session (requires service role)
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { code, type, next } = req.query;

  if (!code || typeof code !== 'string') {
    return res.status(400).json({ error: 'Missing or invalid confirmation code' });
  }

  try {
    const { data, error } = await supabase.auth.exchangeCodeForSession(code);

    if (error) {
      console.error('Auth callback error:', error);
      return res.redirect(`/auth/error?message=${encodeURIComponent(error.message)}`);
    }

    if (!data.user) {
      return res.redirect('/auth/error?message=No user found');
    }

    if (type === 'recovery') {
      return res.redirect(`/auth/reset-password?access_token=${data.session?.access_token}&refresh_token=${data.session?.refresh_token}`);
    } else if (type === 'signup' || type === 'email_confirmation') {
      const redirectUrl = (next as string) || '/?confirmed=true';
      return res.redirect(redirectUrl);
    } else {
      const redirectUrl = (next as string) || '/';
      return res.redirect(redirectUrl);
    }
  } catch (err) {
    console.error('Unexpected error in auth callback:', err);
    return res.redirect('/auth/error?message=An unexpected error occurred');
  }
}
