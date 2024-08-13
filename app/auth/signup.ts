'use server';

import { headers } from 'next/headers';
import { createClient } from '@/utils/supabase/server';
import { FieldType } from '@/app/login/page';
import { setCookie } from 'cookies-next';
import { redirect } from 'next/navigation';

export async function signUp(formData: FieldType) {
  const origin = headers().get('origin');

  const email = formData.email;
  const password = formData.password;
  const name = formData.name;

  const supabase = createClient();

  const user = await supabase
    .from('user')
    .insert({ email, password, name })
    .select();

  if (user.data) {
    setCookie('token', { id: user.data[0].id }, { maxAge: 60 * 6 * 24 });
  } else {
    redirect('/login');
  }
}
