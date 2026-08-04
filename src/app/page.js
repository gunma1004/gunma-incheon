"use client";

import React, { useState } from "react";

// ⭐️ 기존 메인 페이지와 동일한 실제 인천 제휴 5개 업체 데이터 (이미지 썸네일 추가)
const realShops = [
  {
    id: 1,
    name: "인천한국미인홈케어",
    location: "인천 전지역",
    desc: "24시 정성 가득한 타이 & 아로마 전문 방문 케어",
    phone: "0507-1280-3324",
    badge: "추천업체",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80",
    courses: [
      { name: "아로마 케er (60분)", price: "90,000원", tag: "인기" },
      { name: "스웨디시 코스 (60분)", price: "140,000원", tag: "추천" },
    ]
  },
  {
    id: 2,
    name: "인천기쁨홈타이",
    location: "인천 전지역",
    desc: "지친 일상에 편안한 휴식을 선사하는 프리미엄 힐링 릴렉싱",
    phone: "0507-1280-3325",
    badge: "인기폭발",
    image: "https://images.unsplash.com/photo-1519824148171-264c178d6bce?auto=format&fit=crop&w=800&q=80",
    courses: [
      { name: "건식 타이 (60분)", price: "60,000원", tag: "베스트" },
      { name: "프리미엄 스웨디시 (60분)", price: "140,000원", tag: "할인" },
    ]
  },
  {
    id: 3,
    name: "인천어린마인드홈타이",
    location: "인천 전지역",
    desc: "빠른 방문과 철저한 위생 관리를 약속드리는 전문 홈케어",
    phone: "0507-1280-3326",
    badge: "24시상시",
    image: "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&fit=crop&w=800&q=80",
    courses: [
      { name: "타이/아로마 (60분)", price: "60,000원", tag: "기본" },
      { name: "한국인 스웨디시 (60분)", price: "140,000원", tag: "추천" },
    ]
  },
  {
    id: 4,
    name: "인천미인클럽홈타이",
    location: "인천 전지역",
    desc: "베테랑 관리사의 맞춤형 피로 회복 맞춤 케어 프로그램",
    phone: "0507-1280-3327",
    badge: "신규제휴",
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=800&q=80",
    courses: [
      { name: "타이 코스 (60분)", price: "60,000원", tag: "특가" },
      { name: "한국 스웨디시 (90분)", price: "140,000원", tag: "VIP" },
    ]
  },
  {
    id: 5,
    name: "인천퀸즈 홈테라피",
    location: "인천 전지역",
    desc: "100% 후불제 안심 이용, 인천 전지역 25분 내 빠른 도착",
    phone: "0507-1280-3328",
    badge: "만족도1위",
    image: "https://images.unsplash.com/photo-1512290900722-9a707b82b9db?auto=format&fit=crop&w=800&q=80",
    courses: [
      { name: "타이 코스 (60분)", price: "60,000원", tag: "인기" },
      { name: "스웨디시 코스 (60분)", price: "140,000원", tag: "추천" },
    ]
  }
];

const quickRegions = [
  "부평구", "연수구(송도)", "남동구(구월)", "서구(청라)", 
  "미추홀구(주안)", "계양구", "중구(영종도)", "동구"
];

export default function PremiumIncheonMassagePage() {
  const [selectedRegion, setSelectedRegion] = useState("전체");

  return (
    <div className="bg-[#0f0c1b] text-white min-h-screen flex flex-col font-sans antialiased selection:bg-[#ec4899] selection:text-white">
      
      {/* ⭐️ 최상단 긴급 공지 띠 배너 */}
      <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-amber-500 text-white text-xs font-bold py-2.5 px-4 text-center tracking-wide shadow-lg animate-pulse">
        🚨 [긴급] 현재 인천 전지역 관리사 원활 배치 중! 25분 내 초고속 방문 시스템 가동 🔥
      </div>

      {/* 헤더 영역 */}
      <header className="sticky top-0 z-50 bg-[#0f0c1b]/80 backdrop-blur-xl border-b border-purple-900/40">
        <div className="max-w-[1080px] mx-auto px-5 h-16 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2 font-extrabold text-xl tracking-tight">
            <span className="bg-gradient-to-r from-pink-400 via-purple-300 to-teal-300 bg-clip-text text-transparent">
              ✨ 인천출장마사지
            </span>
          </a>
          <div className="flex items-center gap-3">
            <a href="/" className="text-xs text-gray-400 hover:text-white transition-colors">홈</a>
            <a
              href="tel:050712803324"
              className="bg-gradient-to-r from-pink-500 to-purple-600 text-white font-extrabold px-4 py-2 rounded-full text-xs shadow-[0_0_20px_rgba(236,72,153,0.5)] hover:scale-105 transition-all"
            >
              📞 대표번호 연결
            </a>
          </div>
        </div>
      </header>

      {/* 히어로 섹션 */}
      <section className="relative overflow-hidden border-b border-purple-900/40 py-20 px-5">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1920&q=80" 
            alt="인천출장마사지 배경" 
            className="w-full h-full object-cover opacity-25 filter blur-[2px]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0f0c1b]/80 via-[#0f0c1b]/95 to-[#0f0c1b]"></div>
        </div>

        <div className="max-w-[1080px] mx-auto text-center relative z-10">
          <span className="inline-block bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/40 text-pink-300 font-bold text-xs px-4 py-1.5 rounded-full mb-4 shadow-sm">
            ⭐ 인천 지역 제휴 공식 홈타이 · 100% 후불제 안심 시스템
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight mb-6">
            지친 일상의 완벽한 휴식,<br />
            <span className="bg-gradient-to-r from-pink-400 via-purple-300 to-teal-300 bg-clip-text text-transparent drop-shadow-sm">
              인천 전지역 25분 초고속 홈타이
            </span>
          </h1>
          <p className="text-gray-300 text-sm md:text-base max-w-2xl mx-auto mb-8 leading-relaxed">
            자택, 오피스텔, 호텔 숙소 어디든 OK! 이동 불편 없이 계신 그 자리에서 
            검증된 제휴 업체의 프리미엄 힐링 테라피를 만끽하세요.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-md mx-auto mb-12">
            <a
              href="tel:050712803324"
              className="flex-1 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-extrabold py-4 px-6 rounded-2xl text-base shadow-[0_0_30px_rgba(236,72,153,0.4)] hover:scale-105 transition-all text-center flex items-center justify-center gap-2"
            >
              📞 24시 실시간 전화예약
            </a>
            <a
              href="sms:050712803324?body=인천출장마사지%20예약%20문의드립니다."
              className="flex-1 bg-[#1a1429]/80 backdrop-blur-md border border-purple-500/50 text-white font-extrabold py-4 px-6 rounded-2xl text-base hover:bg-purple-900/30 transition-all text-center flex items-center justify-center gap-2"
            >
              💬 간편 문자 예약
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-[#161124]/90 backdrop-blur-md border border-purple-900/50 rounded-2xl p-4 text-center shadow-lg">
              <b className="block text-2xl text-pink-400 font-extrabold">25분 내외</b>
              <span className="text-xs text-gray-400">평균 방문 도착</span>
            </div>
            <div className="bg-[#161124]/90 backdrop-blur-md border border-purple-900/50 rounded-2xl p-4 text-center shadow-lg">
              <b className="block text-2xl text-teal-400 font-extrabold">100% 후불제</b>
              <span className="text-xs text-gray-400">안심 결제 시스템</span>
            </div>
            <div className="bg-[#161124]/90 backdrop-blur-md border border-purple-900/50 rounded-2xl p-4 text-center shadow-lg">
              <b className="block text-2xl text-purple-400 font-extrabold">365일 연중무휴</b>
              <span className="text-xs text-gray-400">24시간 상시 대기</span>
            </div>
            <div className="bg-[#161124]/90 backdrop-blur-md border border-purple-900/50 rounded-2xl p-4 text-center shadow-lg">
              <b className="block text-2xl text-amber-400 font-extrabold">5개 제휴점</b>
              <span className="text-xs text-gray-400">인천 전지역 완벽 커버</span>
            </div>
          </div>
        </div>
      </section>

      {/* 메인 컨텐츠 영역 */}
      <main className="max-w-[1080px] mx-auto px-5 py-12 w-full flex-1">
        
        {/* 구별 빠른 필터 바 */}
        <div className="mb-10">
          <h3 className="text-sm font-bold text-gray-400 mb-3 flex items-center gap-1.5">
            📍 인천 방문 희망 지역을 선택하세요
          </h3>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedRegion("전체")}
              className={`text-xs px-4 py-2 rounded-xl font-bold transition-all ${
                selectedRegion === "전체"
                  ? "bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-md"
                  : "bg-[#161124] border border-purple-900/50 text-gray-400 hover:text-white"
              }`}
            >
              전체보기
            </button>
            {quickRegions.map((region, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedRegion(region)}
                className={`text-xs px-4 py-2 rounded-xl font-bold transition-all ${
                  selectedRegion === region
                    ? "bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-md"
                    : "bg-[#161124] border border-purple-900/50 text-gray-400 hover:text-white"
                }`}
              >
                {region}
              </button>
            ))}
          </div>
        </div>

        {/* 제휴 업체 5개 리스트 (실제 데이터 반영) */}
        <div className="space-y-8">
          <div className="flex justify-between items-end mb-2">
            <h2 className="text-2xl font-bold tracking-tight">
              ✨ 인천 정식 <span className="text-pink-400">제휴 업체 5선</span>
            </h2>
            <span className="text-xs text-gray-400">안심번호 적용 완료</span>
          </div>

          {realShops.map((shop) => (
            <article 
              key={shop.id} 
              className="bg-[#161124] border border-purple-900/60 rounded-3xl overflow-hidden shadow-2xl hover:border-pink-500/60 transition-all group flex flex-col md:flex-row"
            >
              {/* 업체 썸네일 이미지 */}
              <div className="md:w-[320px] h-56 md:h-auto relative overflow-hidden flex-shrink-0">
                <img 
                  src={shop.image} 
                  alt={shop.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#161124] via-transparent md:bg-gradient-to-r md:from-transparent md:to-[#161124]"></div>
                <div className="absolute top-3 left-3">
                  <span className="text-[11px] font-extrabold bg-gradient-to-r from-pink-500 to-purple-600 text-white px-3 py-1 rounded-full shadow-md">
                    {shop.badge}
                  </span>
                </div>
              </div>

              {/* 업체 정보 및 코스 */}
              <div className="p-6 md:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-2 mb-2">
                    <h3 className="text-2xl font-extrabold text-white group-hover:text-pink-300 transition-colors">
                      {shop.name}
                    </h3>
                    <span className="text-xs text-teal-400 font-semibold bg-teal-950/50 border border-teal-800/40 px-2.5 py-1 rounded-lg">
                      📍 {shop.location}
                    </span>
                  </div>

                  <p className="text-xs text-gray-300 mb-4">{shop.desc}</p>

                  {/* 코스 목록 */}
                  <div className="bg-[#100c1c] rounded-2xl p-4 mb-6 space-y-2.5 border border-purple-950">
                    {shop.courses.map((course, idx) => (
                      <div key={idx} className="flex justify-between items-center text-xs md:text-sm">
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] bg-purple-900/60 text-purple-300 px-2 py-0.5 rounded font-bold">
                            {course.tag}
                          </span>
                          <span className="text-gray-200 font-medium">{course.name}</span>
                        </div>
                        <span className="font-extrabold text-pink-400 text-base">{course.price}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 개별 업체 전화/문자 버튼 (실제 고유 번호 반영) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <a
                    href={`tel:${shop.phone}`}
                    className="flex items-center justify-center gap-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-extrabold py-3.5 rounded-2xl text-xs md:text-sm shadow-[0_0_20px_rgba(236,72,153,0.4)] hover:scale-[1.02] transition-all"
                  >
                    📞 전화 문의하기
                  </a>
                  <a
                    href={`sms:${shop.phone}?body=${encodeURIComponent(`[건마사랑인천] ${shop.name} 문의드립니다.`)}`}
                    className="flex items-center justify-center gap-2 bg-[#221a36] text-white font-extrabold py-3.5 rounded-2xl text-xs md:text-sm border border-purple-800/60 hover:bg-purple-900/50 transition-all"
                  >
                    💬 문자 예약하기
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* 안심 보장 안내 섹션 */}
        <section className="mt-16 bg-[#161124] border border-purple-900/60 rounded-3xl p-8 shadow-xl">
          <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
            🛡️ 건마사랑인천 출장마사지 <span className="text-pink-400">안심 이용 가이드</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-gray-300">
            <div className="bg-[#100c1c] p-5 rounded-2xl border border-purple-950">
              <b className="block text-pink-400 text-sm mb-1">01. 선입금 없는 100% 후불제</b>
              <p className="leading-relaxed">사전 입금을 요구하는 사기 업체에 주의하세요! 모든 제휴점은 서비스 완료 후 현장에서 결제하는 안심 후불제로만 운영됩니다.</p>
            </div>
            <div className="bg-[#100c1c] p-5 rounded-2xl border border-purple-950">
              <b className="block text-teal-400 text-sm mb-1">02. 어디서나 부르는 곳으로 즉시</b>
              <p className="leading-relaxed">자택, 오피스텔, 원룸은 물론 출장 및 여행으로 머무시는 호텔, 모텔 등 숙소 어디든 신속하게 방문합니다.</p>
            </div>
            <div className="bg-[#100c1c] p-5 rounded-2xl border border-purple-950">
              <b className="block text-purple-400 text-sm mb-1">03. 철저한 프라이버시 보호</b>
              <p className="leading-relaxed">안심번호 시스템을 적용하여 고객님의 개인정보를 철저히 보호하며, 퇴폐 및 불법 행위는 엄격히 금지합니다.</p>
            </div>
          </div>
        </section>

      </main>

      {/* 푸터 영역 */}
      <footer className="bg-[#0b0814] border-t border-purple-950 py-10 px-5 text-xs text-gray-500 mt-auto">
        <div className="max-w-[1080px] mx-auto text-center space-y-2">
          <p className="font-bold text-gray-300">건마사랑인천</p>
          <p>인천 전지역 방문 출장마사지·홈타이 추천 안내 사이트입니다.</p>
          <p className="pt-2 text-[11px] text-gray-600">
            © 2026 건마사랑인천. All rights reserved. 건전한 방문 케어 서비스를 준수하며 불법 요청에는 응하지 않습니다.
          </p>
        </div>
      </footer>

      {/* 우측 하단 고정 플로팅 버튼 */}
      <a
        href="tel:050712803324"
        className="fixed right-5 bottom-5 z-50 bg-gradient-to-r from-pink-500 via-purple-600 to-teal-400 text-white font-extrabold px-6 py-4 rounded-full shadow-[0_0_25px_rgba(236,72,153,0.6)] text-sm flex items-center gap-2 hover:scale-110 transition-all animate-bounce"
      >
        📞 24시 전화예약
      </a>
    </div>
  );
}