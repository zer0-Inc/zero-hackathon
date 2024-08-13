import { createClient } from '@/utils/supabase/server';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import React from 'react';
import Title from 'antd/lib/typography/Title';
import Searching from '@/components/button/Searching';

export default async function SearchingPage() {
  const supabase = createClient();

  const cookieStore = cookies();
  const token = cookieStore.get('token');

  const { data: user } = await supabase
    .from('user')
    .select('id')
    .eq('id', token?.value)
    .single();

  if (!user) {
    return redirect('/login');
  }

  return (
    <div className="flex-1 w-full flex flex-col gap-20 items-center">
      <div className="flex-1 flex flex-col gap-24 max-w-4xl px-3 py-3">
        <main className="flex-1 flex flex-col">
          <h2 className="font-bold text-2xl mb-4 text-primary">나무 NAMU</h2>
        </main>
        <Searching />
        <div className="flex flex-col w-4xl place-items-center gap-20">
          <Title
            level={3}
            style={{
              textAlign: 'center',
            }}
          >
            AI가 자동으로 검토하고 있으니 <p />
            잠시만 기다려주세요...
          </Title>
        </div>
      </div>
    </div>
  );
}
