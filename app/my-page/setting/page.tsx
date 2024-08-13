import React from 'react';
import { Switch } from 'antd'; // Ant Design의 Switch 컴포넌트를 사용
import EarthLogo from '@/components/logo/setting/EarthLogo'; // 지구 아이콘
import RightArrowLogo from '@/components/logo/RightArrow';
import BellLogo from '@/components/logo/setting/BellLogo';
import SoundLogo from '@/components/logo/setting/SoundLogo';
import ScreenLogo from '@/components/logo/setting/ScreenLogo';
import PersonLogo from '@/components/logo/setting/PersonLogo';
import SettingLogo from '@/components/logo/setting/SettingLogo';

export default function Settings() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* 상단 섹션 */}
      <div className="bg-white p-6 border-b flex flex-col items-center relative">
        <h1 className="text-xl font-bold">환경 설정</h1>
      </div>

      {/* 설정 리스트 */}
      <div className="flex-1 bg-white divide-y divide-gray-200">
        <div className="flex justify-between items-center p-4">
          <div className="flex items-center">
            <EarthLogo />
            <span className="font-medium ml-4">언어</span>
          </div>
          <div className="flex items-center">
            <span className="text-gray-500 mr-4">한국어</span>
            <RightArrowLogo />
          </div>
        </div>

        <div className="flex justify-between items-center p-4">
          <div className="flex items-center">
            <BellLogo />
            <span className="font-medium ml-4">알림 설정</span>
          </div>
          <RightArrowLogo />
        </div>
        <div className="flex justify-between items-center p-4">
          <div className="flex items-center">
            <SoundLogo />
            <span className="font-medium ml-4">사운드 설정</span>
          </div>
          <RightArrowLogo />
        </div>
        <div className="flex justify-between items-center p-4">
          <div className="flex items-center">
            <ScreenLogo />
            <span className="font-medium ml-4">스크린 / 화면 밝기</span>
          </div>
          <RightArrowLogo />
        </div>
        <div className="flex justify-between items-center p-4">
          <div className="flex items-center">
            <SettingLogo />
            <span className="font-medium ml-4">상세 설정</span>
          </div>
          <RightArrowLogo />
        </div>
        <div className="flex justify-between items-center p-4">
          <div className="flex items-center">
            <PersonLogo />
            <span className="font-medium ml-4">접근성 설정</span>
          </div>
          <RightArrowLogo />
        </div>
      </div>
    </div>
  );
}
