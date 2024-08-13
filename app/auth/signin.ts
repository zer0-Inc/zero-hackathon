'use server';

import { FieldType } from '@/app/login/page';
import { createClient } from '@/utils/supabase/server';
import { redirect } from 'next/navigation';

export async function signIn(formData: FieldType) {
  const email = formData.email;
  const password = formData.password;
  const supabase = createClient();

  await supabase.auth.signInWithPassword({
    email,
    password,
  });

  return redirect('/protected');
}
