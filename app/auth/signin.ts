'use server';

import { FieldType } from '@/app/login/page';
import { createClient } from '@/utils/supabase/server';
import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';

export async function signIn(formData: FieldType) {
  const email = formData.email;
  const password = formData.password;

  const cookieStore = cookies();

  const supabase = createClient();

  const { data: authUser } = await supabase
    .from('user')
    .select('*')
    .match({ email: email, password: password })
    .single();

  if (!authUser || authUser.password !== password) {
    return redirect('/login');
  } else {
    cookieStore.set({
      name: 'token',
      path: '/',
      value: authUser.id,
    });

    return redirect('/protected');
  }
}
