import type { Metadata } from "next";
import IncheonMassageClient from "./IncheonMassageClient";

// ⭐️ 네이버 및 구글 SEO 최적화 메타 태그 설정 (키워드 & 디스크립션)
export const metadata: Metadata = {
  title: "인천출장마사지 · 홈타이 24시 방문 예약 | 건마사랑인천",
  description: "인천 전지역(부평, 송도, 청라, 남동구 등) 25분 내 초고속 방문! 타이, 아로마, 스웨디시 100% 후불제 안심 출장마사지 제휴 업체 추천.",
  keywords: [
    "인천출장마사지",
    "인천홈타이",
    "부평출장마사지",
    "송도출장마사지",
    "청라출장마사지",
    "남동구출장마사지",
    "인천스웨디시",
    "건마사랑인천"
  ],
  openGraph: {
    title: "인천출장마사지 · 홈타이 24시 방문 예약 | 건마사랑인천",
    description: "인천 전지역 25분 내 초고속 방문! 100% 후불제 안심 출장마사지 제휴 업체 통합 안내.",
    url: "https://여러분의도메인.com/incheon-massage",
    siteName: "건마사랑인천",
    locale: "ko_KR",
    type: "website",
  },
};

export default function Page() {
  return <IncheonMassageClient />;
}