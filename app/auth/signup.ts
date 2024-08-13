'use server';

import { headers } from 'next/headers';
import { createClient } from '@/utils/supabase/server';
import { FieldType } from '@/app/login/page';

export async function signUp(formData: FieldType) {
  const origin = headers().get('origin');

  const email = formData.email;
  const password = formData.password;

  const supabase = createClient();

  await supabase.auth.signUp({
    email,
    password,
    options: {
      emailRedirectTo: `${origin}/auth/callback`,
    },
  });
}
