import type { Metadata } from "next";
import LandingClient from "./LandingClient";

// ⭐️ 랜딩페이지 전용 SEO 타이틀 및 메타 디스크립션 설정
export const metadata: Metadata = {
  title: "인천출장마사지 · 홈타이 24시 프리미엄 방문 예약",
  description: "인천 전지역(부평, 송도, 청라, 남동구 등) 25분 내 초고속 방문! 100% 후불제 안심 출장마사지 제휴 업체 추천 및 실시간 예약 안내.",
  keywords: [
    "인천출장마사지",
    "인천홈타이",
    "부평출장마사지",
    "송도출장마사지",
    "청라출장마사지",
    "남동구출장마사지"
  ],
  openGraph: {
    title: "인천출장마사지 · 홈타이 24시 프리미엄 방문 예약",
    description: "인천 전지역 25분 내 초고속 방문! 100% 후불제 안심 출장마사지 제휴 업체 통합 안내.",
    url: "https://gunmalove-incheon.shop/landing",
    siteName: "인천출장마사지",
    locale: "ko_KR",
    type: "website",
  },
};

export default function Page() {
  return <LandingClient />;
}