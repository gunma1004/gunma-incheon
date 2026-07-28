import "./globals.css";

export const metadata = {
  // ⭐️ 새로 구매하신 가비아 도메인으로 변경
  metadataBase: new URL("https://gunmalove-incheon.shop"),
  title: "건마사랑인천 | 24시 인천출장마사지 · 인천홈타이 No.1",
  description: "인천 전지역 25분 내 방문! 부평, 연수구, 송도, 청라, 남동구 등 24시 출장마사지, 홈타이, 스웨디시 전문 추천.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "건마사랑인천 | 24시 인천출장마사지",
    description: "인천 전지역 25분 방문! 100% 후불제 안심이용 프리미엄 출장케어.",
    url: "https://gunmalove-incheon.shop",
    siteName: "건마사랑인천",
    locale: "ko_KR",
    type: "website",
  },
  verification: {
    other: {
      'naver-site-verification': '네이버_발급_코드값',
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body className="bg-[#faf6fb] text-[#403656] antialiased">
        {children}
      </body>
    </html>
  );
}