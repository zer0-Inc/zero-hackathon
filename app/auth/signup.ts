'use server';

import { headers } from 'next/headers';
import { createClient } from '@/utils/supabase/server';
import { FieldType } from '@/app/login/page';
import { redirect } from 'next/navigation';

export async function signUp(formData: FieldType) {
  const origin = headers().get('origin');

  const email = formData.email;
  const password = formData.password;
  const name = formData.name;

  const supabase = createClient();

  await supabase.from('user').insert({ email, password, name }).select();

  redirect('/login');
}
