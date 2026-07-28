"use client";

import { use } from "react";

// 제휴 5개 업체 데이터
const shops = [
  {
    id: 1,
    name: "인천한국미인홈케어",
    desc: "24시 정성 가득한 타이 & 아로마 전문 방문 케어",
    phone: "0507-1280-3324",
    badge: "추천업체",
    courses: [
      { name: "아로마 케어 (60분)", price: "90,000원" },
      { name: "스웨디시 코스 (60분)", price: "140,000원" },
    ]
  },
  {
    id: 2,
    name: "인천기쁨홈타이",
    desc: "지친 일상에 편안한 휴식을 선사하는 프리미엄 힐링 릴렉싱",
    phone: "0507-1280-3325",
    badge: "인기폭발",
    courses: [
      { name: "건식 타이 (60분)", price: "60,000원" },
      { name: "프리미엄 스웨디시 (60분)", price: "140,000원" },
    ]
  },
  {
    id: 3,
    name: "인천어린마인드홈타이",
    desc: "빠른 방문과 철저한 위생 관리를 약속드리는 전문 홈케어",
    phone: "0507-1280-3326",
    badge: "24시상시",
    courses: [
      { name: "타이/아로마 (60분)", price: "60,000원" },
      { name: "한국인 스웨디시 (60분)", price: "140,000원" },
    ]
  },
  {
    id: 4,
    name: "인천미인클럽홈타이",
    desc: "베테랑 관리사의 맞춤형 피로 회복 맞춤 케어 프로그램",
    phone: "0507-1280-3327",
    badge: "신규제휴",
    courses: [
      { name: "타이 코스 (60분)", price: "60,000원" },
      { name: "한국 스웨디시 (90분)", price: "140,000원" },
    ]
  },
  {
    id: 5,
    name: "인천퀸즈 홈테라피",
    desc: "100% 후불제 안심 이용, 인천 전지역 25분 내 빠른 도착",
    phone: "0507-1280-3328",
    badge: "만족도1위",
    courses: [
      { name: "타이 코스 (60분)", price: "60,000원" },
      { name: "스웨디시 코스 (60분)", price: "140,000원" },
    ]
  }
];

export default function IncheonDongPage({ params }) {
  const resolvedParams = use(params);
  const gu = decodeURIComponent(resolvedParams.gu || '');
  const dong = decodeURIComponent(resolvedParams.dong || '');

  return (
    <div className="bg-[#faf6fb] text-[#403656] min-h-screen flex flex-col font-sans antialiased">
      {/* 상단 띠 배너 */}
      <div className="bg-gradient-to-r from-[#f4edf7] to-[#f7eef3] border-b border-[#ece2f0] text-xs text-[#8b7f9e] py-2 px-4">
        <div className="max-w-[1080px] mx-auto flex justify-between items-center flex-wrap gap-2">
          <span>◆ 인천 {dong} 24시 출장마사지 · 위생/안전 기준 준수</span>
          <span><b className="text-[#5fc7ad]">24시간 상담</b> · 연중무휴</span>
        </div>
      </div>

      {/* 헤더 영역 */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-[#ece2f0]">
        <div className="max-w-[1080px] mx-auto px-5 h-16 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2 font-extrabold text-xl tracking-tight">
            <span className="bg-gradient-to-r from-[#a98ce2] to-[#5fc7ad] bg-clip-text text-transparent">
              건마사랑인천
            </span>
            <span className="text-xs text-[#8b7f9e] font-semibold">{dong}</span>
          </a>
          <a href={`/${gu}`} className="text-xs text-[#8b7f9e] hover:text-[#a98ce2] font-semibold">
            &larr; 상위 구 목록으로
          </a>
        </div>
      </header>

      {/* 히어로 섹션 */}
      <section className="bg-radial from-[#a98ce2]/20 via-transparent to-[#faf6fb] border-b border-[#ece2f0] py-10 px-5">
        <div className="max-w-[1080px] mx-auto text-left">
          <span className="inline-block border border-[#ece2f0] bg-[#f4eef7] text-[#5fc7ad] font-bold text-xs px-3 py-1 rounded-full mb-3">
            ◆ 인천 {dong} 전지역 25분 내 빠른 방문
          </span>
          <h1 className="text-3xl md:text-4xl font-extrabold text-[#403656] leading-tight mb-3">
            인천 <span className="text-[#a98ce2]">{dong}</span> 출장마사지 · 홈타이<br />24시 추천 제휴업체 안내
          </h1>
          <p className="text-[#8b7f9e] text-sm md:text-base max-w-2xl">
            인천 {dong} 지역 인근에 25분 내 빠른 방문이 가능한 출장마사지 전문 제휴업체 정보입니다.
          </p>
        </div>
      </section>

      {/* 업체 5개 목록 */}
      <main className="max-w-[1080px] mx-auto px-5 py-10 w-full flex-1">
        <h2 className="text-2xl font-bold mb-2">인천 {dong} 추천 <span className="text-[#5fc7ad]">제휴업체 목록</span></h2>
        <p className="text-xs text-[#8b7f9e] mb-6">100% 후불제로 안심하고 이용할 수 있는 추천 업체입니다.</p>

        <div className="space-y-6">
          {shops.map((shop) => (
            <article key={shop.id} className="bg-white border border-[#ece2f0] rounded-2xl p-5 md:p-6 shadow-sm hover:border-[#a98ce2] transition-all">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <span className="inline-block text-[11px] font-bold bg-[#f4eef7] text-[#a98ce2] px-2.5 py-0.5 rounded-full border border-[#ece2f0] mr-2">
                    {shop.badge}
                  </span>
                  <h3 className="text-xl font-bold text-[#403656] inline-block">{shop.name}</h3>
                  <p className="text-xs text-[#5fc7ad] font-semibold mt-1">인천 {dong} 전지역 (25분 도착)</p>
                </div>
              </div>

              <p className="text-xs text-[#8b7f9e] mb-4">{shop.desc}</p>

              <div className="bg-[#f4eef7] rounded-xl p-3 mb-4 space-y-1.5 border border-[#ece2f0]">
                {shop.courses.map((course, idx) => (
                  <div key={idx} className="flex justify-between text-xs">
                    <span className="text-[#403656] font-medium">{course.name}</span>
                    <span className="font-bold text-[#a98ce2]">{course.price}</span>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-2 gap-3">
                <a
                  href={`tel:${shop.phone}`}
                  className="flex items-center justify-center gap-1 bg-gradient-to-r from-[#a98ce2] to-[#5fc7ad] text-[#3a3152] font-bold py-3 rounded-xl text-xs shadow-sm hover:opacity-90 transition-all"
                >
                  📞 전화 문의하기
                </a>
                <a
                  href={`sms:${shop.phone}?body=${encodeURIComponent(`[건마사랑인천 - ${dong}] ${shop.name} 문의드립니다.`)}`}
                  className="flex items-center justify-center gap-1 bg-white text-[#403656] font-bold py-3 rounded-xl text-xs border border-[#ece2f0] hover:bg-[#f4eef7] transition-all"
                >
                  💬 문자 예약하기
                </a>
              </div>
            </article>
          ))}
        </div>
      </main>

      {/* 푸터 */}
      <footer className="bg-[#f4edf7] border-t border-[#ece2f0] py-8 px-5 text-xs text-[#8b7f9e] mt-auto text-center">
        <p className="font-bold text-[#403656]">건마사랑인천 · {dong}</p>
        <p className="pt-2 text-[11px] text-[#9a8fae]">
          © 2026 건마사랑인천. All rights reserved.
        </p>
      </footer>

      {/* 화면 하단 우측 고정 전화 버튼 */}
      <a
        href="tel:050712803324"
        className="fixed right-4 bottom-4 z-50 bg-gradient-to-r from-[#a98ce2] to-[#5fc7ad] text-[#3a3152] font-extrabold px-5 py-3.5 rounded-full shadow-lg text-sm flex items-center gap-1.5 hover:scale-105 transition-all"
      >
        📞 24시 전화예약
      </a>
    </div>
  );
}