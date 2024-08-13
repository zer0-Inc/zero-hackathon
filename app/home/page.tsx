import { createClient } from '@/utils/supabase/server';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import ContentBigLogo from '@/components/logo/ContentBigLogo';
import React from 'react';
import Link from 'next/link';
import ReviewButton from '@/components/button/ReviewButton';
import ReviewSection from '@/components/ReviewSection';

export default async function HomePage() {
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
        <div className="flex flex-col w-4xl place-items-center">
          <ContentBigLogo />

          <div>
            <Link
              href="/upload"
              className="py-5 px-3 w-[343px] flex place-content-center rounded-md no-underline text-white text-xl font-bold bg-primary hover:bg-white hover:text-primary hover:border-primary border-4"
            >
              새 계약서 검토하기
            </Link>
          </div>
        </div>

        <div className="cursor-pointer flex flex-col gap-4">
          <ReviewButton />
          <ReviewSection />
        </div>
      </div>
    </div>
  );
}
