import { createClient } from '@/utils/supabase/server';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import React from 'react';
import ResultDetailLayer from '@/components/ResultDetailLayer';
import ResultReceivedSmall from '@/components/ResultReceivedSmall';

export default async function ResultDetailPage() {
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
      <div className="flex-1 flex flex-col gap-14 max-w-4xl px-3 py-3">
        <main className="flex-1 flex flex-col">
          <h2 className="font-bold text-2xl mb-4 text-primary">나무 NAMU</h2>
        </main>
        <div className="flex flex-col w-4xl place-items-center gap-10">
          <ResultReceivedSmall />
          <div className="cursor-pointer">
            <ResultDetailLayer />
          </div>
        </div>
      </div>
    </div>
  );
}
