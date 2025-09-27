import { NextApiRequest, NextApiResponse } from 'next';
import { supabase } from '@/lib/supabase';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { email } = req.body;

    if (!email || typeof email !== 'string') {
      return res.status(400).json({ error: 'Email is required' });
    }

    if (!supabase) {
      return res.status(500).json({ error: 'Authentication service not available' });
    }

    try {
      const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/api/auth/callback?type=recovery`,
      });

      if (error) {
        console.error('Password reset error:', error);
        return res.status(400).json({ error: error.message });
      }

      return res.status(200).json({ message: 'Password reset email sent. Please check your inbox.' });
    } catch (err) {
      console.error('Unexpected error in password reset:', err);
      return res.status(500).json({ error: 'An unexpected error occurred' });
    }
  } else if (req.method === 'PUT') {
    const { password, access_token, refresh_token } = req.body;

    if (!password || typeof password !== 'string') {
      return res.status(400).json({ error: 'New password is required' });
    }

    if (!access_token || typeof access_token !== 'string') {
      return res.status(400).json({ error: 'Access token is required' });
    }

    if (!supabase) {
      return res.status(500).json({ error: 'Authentication service not available' });
    }

    try {
      const { error: sessionError } = await supabase.auth.setSession({
        access_token,
        refresh_token,
      });

      if (sessionError) {
        console.error('Session error:', sessionError);
        return res.status(401).json({ error: 'Invalid or expired token' });
      }

      const { error: updateError } = await supabase.auth.updateUser({ password });

      if (updateError) {
        console.error('Password update error:', updateError);
        return res.status(400).json({ error: updateError.message });
      }

      return res.status(200).json({ message: 'Password updated successfully' });
    } catch (err) {
      console.error('Unexpected error in password update:', err);
      return res.status(500).json({ error: 'An unexpected error occurred' });
    }
  } else {
    return res.status(405).json({ error: 'Method not allowed' });
  }
}
