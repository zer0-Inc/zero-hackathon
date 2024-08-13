'use client'; // 클라이언트 컴포넌트로 설정
import React from 'react';
import Avatar1Logo from '@/components/logo/ranking/Avatar1';
import Avatar2Logo from '@/components/logo/ranking/Avatar2';
import Avatar3Logo from '@/components/logo/ranking/Avatar3';
import Avatar4Logo from '@/components/logo/ranking/Avatar4';
import Avatar5Logo from '@/components/logo/ranking/Avatar5';
import CrownGoldLogo from '@/components/logo/ranking/Medal_Gold';
import CrownSilverLogo from '@/components/logo/ranking/Medal_Silver';
import CrownBronzeLogo from '@/components/logo/ranking/Medal_Bronze';
import { useRouter } from 'next/navigation';
import LeftArrow from '@/components/logo/LeftArrow';

export default function Ranking() {
  const router = useRouter();

  const goToMyPage = () => {
    router.push('/my-page');
  };

  const rankings = [
    {
      id: 1,
      name: '신뢰가',
      points: '2,569',
      AvatarComponent: Avatar1Logo,
      CrownComponent: CrownGoldLogo,
    },
    {
      id: 2,
      name: '나월세',
      points: '1,469',
      AvatarComponent: Avatar2Logo,
      CrownComponent: CrownSilverLogo,
    },
    {
      id: 3,
      name: '김잔금',
      points: '1,053',
      AvatarComponent: Avatar3Logo,
      CrownComponent: CrownBronzeLogo,
    },
    { id: 4, name: '임대차', points: '590', AvatarComponent: Avatar4Logo },
    { id: 5, name: '임차인', points: '448', AvatarComponent: Avatar5Logo },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <div className="bg-white p-6  flex items-center relative">
        <div className="absolute left-0 p-4" onClick={goToMyPage}>
          <LeftArrow />
        </div>
        <h1 className="text-xl font-bold mx-auto">신뢰 포인트 랭킹</h1>
      </div>
      <p className="py-4 text-black border-b text-center font-bold">
        부동산 사기 예방을 도와주는 공인중개사들이에요
        <br />
        점수가 높을수록 신뢰도가 높은 공인중개사에요
      </p>

      {/* 랭킹 리스트 */}
      <div
        className="flex-1 p-4 mt-4 rounded-t-3xl"
        style={{ backgroundColor: '#A2F2D9' }}
      >
        {rankings.map((rank) => (
          <div
            key={rank.id}
            className="bg-white p-4 rounded-lg mb-4 flex items-center justify-between"
          >
            <div className="flex items-center">
              <span className="font-bold text-xl w-8 text-center">
                {rank.id}
              </span>
              <rank.AvatarComponent className="w-10 h-10 ml-4" />
              <div className="ml-4">
                <h3 className="font-bold">{rank.name}</h3>
                <p className="text-gray-500">{rank.points} points</p>
              </div>
            </div>
            {rank.CrownComponent && <rank.CrownComponent className="w-8 h-8" />}
          </div>
        ))}
        <button className="text-green-700 text-center w-full mt-4">
          더보기
        </button>
      </div>
    </div>
  );
}
