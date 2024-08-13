'use client'; // 클라이언트 컴포넌트로 설정

import React from 'react';
import FootNavBar from '@/components/FootNavBar'; // 하단 네비게이션 바
import AvatarLogo from '@/components/logo/AvatarLogo';
import RightArrow from '@/components/logo/RightArrow';
import { useRouter } from 'next/navigation';

export default function MyPage() {
  const router = useRouter();

  const goToRankingPage = () => {
    router.push('/my-page/ranking');
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      {/* 상단 프로필 섹션 */}
      <div className="bg-white p-6 flex flex-col items-center border-b">
        <h1 className="mb-4 font-bold text-xl">마이 페이지</h1>
        <AvatarLogo />
        <h2 className="mt-4 font-bold text-lg">김전세</h2>
        <p className="text-gray-500">@junsaeKim</p>
      </div>

      {/* 메뉴 리스트 */}
      <div className="bg-white mt-4">
        <ul className="divide-y divide-gray-200">
          <li className="py-4 flex justify-between items-center">
            <span>내 신뢰 포인트 : 1997</span>
          </li>
          <li
            className="py-4 flex justify-between items-center"
            onClick={goToRankingPage}
          >
            <span>랭킹 확인하기</span>
            <RightArrow />
          </li>
          <li className="py-4 flex justify-between items-center">
            <span>공지사항</span>
            <RightArrow />
          </li>
          <li className="py-4 flex justify-between items-center">
            <span>개인정보처리방침</span>
            <RightArrow />
          </li>
          <li className="py-4 flex justify-between items-center">
            <span>서비스 이용약관</span>
            <RightArrow />
          </li>
          <li className="py-4 flex justify-between items-center">
            <span>환경 설정</span>
            <RightArrow />
          </li>
          <li className="py-4 flex justify-between items-center">
            <span>언어</span>
            <RightArrow />
          </li>
          <li className="py-4 flex justify-between items-center">
            <span>로그아웃</span>
            <RightArrow />
          </li>
        </ul>
      </div>
    </div>
  );
}
