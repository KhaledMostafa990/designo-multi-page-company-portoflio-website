import { NextApiRequest, NextApiResponse } from 'next';
import { supabase } from '@/lib/supabase';
import prisma from '@/lib/prisma';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (!supabase) {
    return res.status(500).json({ error: 'Authentication service not available' });
  }

  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(401).json({ error: 'Authorization header required' });
  }

  const token = authHeader.replace('Bearer ', '');
  const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser(token);

  if (authError || !user) {
    return res.status(401).json({ error: 'Invalid or expired token' });
  }

  if (req.method === 'GET') {
    try {
      const { data, error } = await supabase.auth.getUser(token);
      if (error || !data.user) {
        return res.status(401).json({ error: 'User not found' });
      }
      return res.status(200).json({
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
      return res.status(500).json({ error: 'Failed to fetch profile' });
    }
  } else if (req.method === 'PUT') {
    const { email, password } = req.body;
    try {
      const updateData: any = {};
      if (email && email !== user.email) updateData.email = email;
      if (password) updateData.password = password;

      const { data, error } = await supabase.auth.updateUser(updateData);
      if (error) {
        console.error('Profile update error:', error);
        return res.status(400).json({ error: error.message });
      }
      return res.status(200).json({
        message: 'Profile updated successfully',
        user: {
          id: data.user?.id,
          email: data.user?.email,
          email_confirmed_at: (data.user as any)?.email_confirmed_at,
        },
      });
    } catch (err) {
      console.error('Unexpected error in profile update:', err);
      return res.status(500).json({ error: 'An unexpected error occurred' });
    }
  } else if (req.method === 'DELETE') {
    const { confirmPassword } = req.body;
    if (!confirmPassword) {
      return res.status(400).json({ error: 'Password confirmation required' });
    }
    try {
      const { error: verifyError } = await supabase.auth.signInWithPassword({
        email: user.email!,
        password: confirmPassword,
      });
      if (verifyError) {
        return res.status(400).json({ error: 'Invalid password confirmation' });
      }

      try {
        await prisma.user.delete({ where: { supabaseId: user.id } });
      } catch (dbErr) {
        console.warn('User deletion in DB skipped or failed:', dbErr);
      }

      await supabase.auth.signOut();
      return res.status(200).json({
        message: 'Account deletion requested. Your data has been removed from our system where applicable.',
      });
    } catch (err) {
      console.error('Error deleting account:', err);
      return res.status(500).json({ error: 'Failed to delete account' });
    }
  } else {
    return res.status(405).json({ error: 'Method not allowed' });
  }
}
