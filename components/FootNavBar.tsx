"use client";

import HomeLogo from "@/components/logo/HomeLogo";
import { usePathname } from "next/navigation";
import MapLogo from "@/components/logo/MapLogo";
import MyPageLogo from "@/components/logo/MyPageLogo";
import HomeGrayLogo from "@/components/logo/HomeGrayLogo";
import MapGrayLogo from "@/components/logo/MapGrayLogo";
import MyPageGrayLogo from "@/components/logo/MyPageGrayLogo";
import Link from "next/link";

export default function FootNavBar() {
  const pathname = usePathname();

  const isHome =
    pathname === "/home" ||
    pathname === "/upload" ||
    pathname === "/searching" ||
    pathname === "/result" ||
    pathname === "/result-detail";

  return (
    <div className="absolute border-t-4 h-20 inset-x-0 bottom-0 w-full items-center place-content-center bg-white z-20 flex gap-24">
      <Link className="cursor-pointer" href="/home">
        {isHome ? <HomeLogo /> : <HomeGrayLogo />}
      </Link>
      <Link className="cursor-pointer" href="/map">
        {pathname === "/map" ? <MapLogo /> : <MapGrayLogo />}
      </Link>
      <Link className="cursor-pointer" href="/my-page">
        {pathname === "/my-page" ? <MyPageLogo /> : <MyPageGrayLogo />}
      </Link>
    </div>
  );
}
