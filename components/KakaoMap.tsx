"use client";

import { useEffect, useState } from "react";
import { KakaoMapModal } from "@/components/KakaoMapModal";

declare global {
  interface Window {
    kakao: any;
  }
}

export interface Place {
  id: number;
  name: string;
  address: string;
  lat: number;
  lng: number;
}

export const placeList: Place[] = [
  {
    id: 1,
    name: "새터마을우미이노스빌201동",
    address: "경기도 용인시 수지구 죽전동 1212(현암로 100-12)",
    lat: 37.331031,
    lng: 127.119265,
  },
  {
    id: 2,
    name: "죽전역솔하임",
    address: "경기도 용인시 수지구 죽전동 1088-2 (정든로 5)",
    lat: 37.327522,
    lng: 127.11352,
  },
  {
    id: 3,
    name: "꽃메마을힐스테이트(4차3단지)",
    address: "경기도 용인시 수지구 죽전동 1304 (죽전로 87)",
    lat: 37.322584,
    lng: 127.117479,
  },
  {
    id: 4,
    name: "꽃메마을한라프로방스",
    address: "경기도 용니시 수지구 죽전동 1306 (죽전로 111)",
    lat: 37.321757,
    lng: 127.114313,
  },
  {
    id: 5,
    name: "죽전누리에뜰",
    address: "경기도 용인시 기흥구 보정동 1263 (죽전로 20)",
    lat: 37.319853,
    lng: 127.110481,
  },
  {
    id: 6,
    name: "죽전아이뷰",
    address: "경기도 용인시 수지구 죽전동 883-1 외 12필지(현암로 3)",
    lat: 37.332545,
    lng: 127.109901,
  },
  {
    id: 7,
    name: "삼성1",
    address: "경기도 용인시 수지구 풍덕천동 693 (수풍로 13)",
    lat: 37.32632,
    lng: 127.088236,
  },
  {
    id: 8,
    name: "동문",
    address: "경기도 용인시 수지구 풍덕천동 690 (수풍로 47)",
    lat: 37.328798,
    lng: 127.090818,
  },
  {
    id: 9,
    name: "래미안 이스트팰리스 1단지",
    address: "경기도 용인시 수지구 동천동 935 (동천로153번길 7)",
    lat: 37.336262,
    lng: 127.088058,
  },
  {
    id: 10,
    name: "동천파크뷰",
    address: "경기도 용인시 수지구 동천동 969 (신수로783번길 36)",
    lat: 37.341539,
    lng: 127.099188,
  },
  {
    id: 11,
    name: "수지2풍림",
    address: "경기도 용인시 수지구 동천동 176-1 (동천로 18)",
    lat: 37.341704,
    lng: 127.099856,
  },
  {
    id: 12,
    name: "수지풍덕천한샘더랜드마크",
    address: "경기도 용인시 수지구 풍덕천동 82-9 (포은대로 477)",
    lat: 37.324013,
    lng: 127.101748,
  },
];

export default function KakaoMap() {
  const [isMarkerClicked, setIsMarkerClicked] = useState<boolean>(false);
  const [selectedMarker, setSelectedMarker] = useState<Place>({
    id: 1,
    name: "새터마을우미이노스빌201동",
    address: "경기도 용인시 수지구 죽전동 1212(현암로 100-12)",
    lat: 37.331031,
    lng: 127.119265,
  });

  useEffect(() => {
    const kakaoMapScript = document.createElement("script");
    kakaoMapScript.async = false;
    kakaoMapScript.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_API_KEY}&autoload=false`;
    document.head.appendChild(kakaoMapScript);

    const onLoadKakaoAPI = () => {
      window.kakao.maps.load(async () => {
        var container = document.getElementById("map");
        var options = {
          center: new window.kakao.maps.LatLng(37.332403, 127.104),
          level: 6,
        };

        var map = new window.kakao.maps.Map(container, options);

        for (let place of placeList) {
          var markerPosition = new window.kakao.maps.LatLng(
            place.lat,
            place.lng,
          );

          var marker = new window.kakao.maps.Marker({
            position: markerPosition,
            clickable: true,
          });

          marker.setMap(map);

          window.kakao.maps.event.addListener(marker, "click", function () {
            setSelectedMarker(place);
            setIsMarkerClicked(true);
          });
        }
      });
    };

    kakaoMapScript.addEventListener("load", onLoadKakaoAPI);
  }, []);

  return (
    <main className="w-full items-center justify-center pt-4">
      <div className="w-full h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh]">
        <div id="map" style={{ width: "100%", height: "100%" }}></div>
      </div>
      <KakaoMapModal
        isMarkerClicked={isMarkerClicked}
        marker={selectedMarker}
        onCancel={() => setIsMarkerClicked(false)}
      />
    </main>
  );
}
