"use client";

import React, { useState } from "react";

// ⭐️ 새로운 레이아웃에 맞춘 프리미엄 제휴 업체 데이터
const newShops = [
  {
    id: 1,
    name: "인천한국미인홈케어",
    location: "인천 전지역 (24시 방문)",
    desc: "정성 가득한 타이 & 아로마 전문 1:1 맞춤 방문 케어",
    phone: "0507-1280-3324",
    badge: "⭐ 실시간 추천 1위",
    accent: "from-pink-500 to-rose-600",
    courses: [
      { name: "아로마 케어 (60분)", price: "90,000원" },
      { name: "스웨디시 코스 (60분)", price: "140,000원" },
    ]
  },
  {
    id: 2,
    name: "인천기쁨홈타이",
    location: "인천 전지역 (25분 내 도착)",
    desc: "지친 일상에 편안한 휴식을 선사하는 프리미엄 힐링",
    phone: "0507-1280-3325",
    badge: "🔥 인기폭발",
    accent: "from-purple-500 to-indigo-600",
    courses: [
      { name: "건식 타이 (60분)", price: "60,000원" },
      { name: "프리미엄 스웨디시 (60분)", price: "140,000원" },
    ]
  },
  {
    id: 3,
    name: "인천어린마인드홈타이",
    location: "인천 전지역 상시 대기",
    desc: "빠른 방문과 철저한 위생 관리를 약속드리는 전문 홈케어",
    phone: "0507-1280-3326",
    badge: "⚡ 24시 상시",
    accent: "from-cyan-500 to-blue-600",
    courses: [
      { name: "타이/아로마 (60분)", price: "60,000원" },
      { name: "한국인 스웨디시 (60분)", price: "140,000원" },
    ]
  },
  {
    id: 4,
    name: "인천미인클럽홈타이",
    location: "인천 전지역 다이렉트",
    desc: "베테랑 관리사의 맞춤형 피로 회복 케어 프로그램",
    phone: "0507-1280-3327",
    badge: "💎 신규 제휴특가",
    accent: "from-amber-500 to-orange-600",
    courses: [
      { name: "타이 코스 (60분)", price: "60,000원" },
      { name: "한국 스웨디시 (90분)", price: "140,000원" },
    ]
  },
  {
    id: 5,
    name: "인천퀸즈 홈테라피",
    location: "인천 전지역 스피드 방문",
    desc: "100% 후불제 안심 이용, 신속 정확한 힐링 테라피",
    phone: "0507-1280-3328",
    badge: "🏆 만족도 최우수",
    accent: "from-emerald-500 to-teal-600",
    courses: [
      { name: "타이 코스 (60분)", price: "60,000원" },
      { name: "스웨디시 코스 (60분)", price: "140,000원" },
    ]
  }
];

export default function IncheonMassageClient() {
  const [activeTab, setActiveTab] = useState("all");

  return (
    <div className="bg-[#090d16] text-slate-100 min-h-screen flex flex-col font-sans antialiased selection:bg-pink-500 selection:text-white">
      
      {/* 최상단 네온 긴급 공지 띠 */}
      <div className="bg-gradient-to-r from-pink-600 via-purple-600 to-cyan-500 text-white text-xs font-black py-3 px-4 text-center tracking-wider shadow-[0_0_20px_rgba(236,72,153,0.3)]">
        ⚡ [인천 전지역 실시간 출장 현황] 각 구별 전문 관리사 25분 내 즉시 대기 및 배정 중! 🔥
      </div>

      {/* 헤더 (대표 콜센터 버튼 제거) */}
      <header className="sticky top-0 z-50 bg-[#090d16]/90 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-pink-500 to-cyan-400 flex items-center justify-center font-black text-lg text-white shadow-lg shadow-pink-500/20">
              IN
            </div>
            <div>
              <span className="block font-black text-lg tracking-tight bg-gradient-to-r from-white via-slate-200 to-pink-400 bg-clip-text text-transparent">
                인천출장마사지
              </span>
              <span className="text-[10px] text-cyan-400 font-bold uppercase tracking-widest">Premium Home-Thai</span>
            </div>
          </a>
          <a href="/" className="text-xs text-slate-400 hover:text-white transition-colors font-medium">
            홈으로 가기
          </a>
        </div>
      </header>

      {/* 히어로 섹션 */}
      <section className="relative overflow-hidden py-20 px-6 border-b border-slate-800/80">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-pink-500/10 rounded-full blur-[140px] pointer-events-none"></div>
        <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none"></div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-slate-800/80 border border-slate-700/80 text-cyan-400 font-bold text-xs px-4 py-2 rounded-full mb-6 shadow-inner">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span>
            인천 전지역 24시 연중무휴 · 100% 후불제 안심 시스템
          </div>
          
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight leading-[1.15] mb-6">
            피로한 순간, 계신 곳으로 찾아가는<br />
            <span className="bg-gradient-to-r from-pink-500 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              프리미엄 홈타이 테라피
            </span>
          </h1>

          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto mb-10 leading-relaxed">
            자택, 오피스텔, 호텔 숙소 어디든 이동 불편 없이 편안하게. 
            검증된 베테랑 관리사의 1:1 맞춤형 케어로 일상의 활력을 되찾아 드립니다.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-left">
            <div className="bg-slate-900/80 border border-slate-800 p-5 rounded-2xl shadow-xl">
              <span className="block text-2xl font-black text-pink-400 mb-1">25분 내외</span>
              <span className="text-xs text-slate-400 font-medium">평균 방문 도착</span>
            </div>
            <div className="bg-slate-900/80 border border-slate-800 p-5 rounded-2xl shadow-xl">
              <span className="block text-2xl font-black text-cyan-400 mb-1">100% 후불</span>
              <span className="text-xs text-slate-400 font-medium">서비스 완료 후 결제</span>
            </div>
            <div className="bg-slate-900/80 border border-slate-800 p-5 rounded-2xl shadow-xl">
              <span className="block text-2xl font-black text-purple-400 mb-1">365일 24시</span>
              <span className="text-xs text-slate-400 font-medium">연중무휴 상시 대기</span>
            </div>
            <div className="bg-slate-900/80 border border-slate-800 p-5 rounded-2xl shadow-xl">
              <span className="block text-2xl font-black text-amber-400 mb-1">안심번호</span>
              <span className="text-xs text-slate-400 font-medium">프라이버시 완벽보호</span>
            </div>
          </div>
        </div>
      </section>

      {/* 메인 제휴 업체 카드 그리드 섹션 */}
      <main className="max-w-6xl mx-auto px-6 py-16 w-full flex-1">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-10 gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight mb-2">
              인천 공식 <span className="text-pink-500">제휴 업체 라인업</span>
            </h2>
            <p className="text-xs text-slate-400">원하시는 업체의 코스와 비용을 확인하시고 편리하게 예약하세요.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {newShops.map((shop) => (
            <article 
              key={shop.id} 
              className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 shadow-2xl hover:border-pink-500/50 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
            >
              <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${shop.accent}`}></div>

              <div>
                <div className="flex justify-between items-start mb-4">
                  <span className="text-[11px] font-bold bg-slate-800 text-slate-300 px-3 py-1 rounded-full border border-slate-700">
                    {shop.badge}
                  </span>
                  <span className="text-xs font-bold text-cyan-400 bg-cyan-950/40 px-2.5 py-1 rounded-lg border border-cyan-800/30">
                    {shop.location}
                  </span>
                </div>

                <h3 className="text-xl font-black text-white group-hover:text-pink-400 transition-colors mb-2">
                  {shop.name}
                </h3>
                <p className="text-xs text-slate-400 mb-6 leading-relaxed">
                  {shop.desc}
                </p>

                <div className="space-y-2 mb-6">
                  {shop.courses.map((course, idx) => (
                    <div key={idx} className="bg-slate-950/70 border border-slate-800/80 p-3 rounded-xl flex justify-between items-center text-xs">
                      <span className="text-slate-300 font-medium">✨ {course.name}</span>
                      <span className="font-black text-pink-400 text-sm">{course.price}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2.5 pt-4 border-t border-slate-800/80">
                <a
                  href={`tel:${shop.phone}`}
                  className="flex items-center justify-center gap-1.5 bg-gradient-to-r from-pink-500 to-rose-600 text-white font-extrabold py-3 rounded-xl text-xs shadow-lg shadow-pink-500/20 hover:scale-[1.02] transition-all"
                >
                  📞 전화문의
                </a>
                <a
                  href={`sms:${shop.phone}?body=${encodeURIComponent(`[인천출장마사지] ${shop.name} 예약 문의드립니다.`)}`}
                  className="flex items-center justify-center gap-1.5 bg-slate-800 text-slate-200 font-extrabold py-3 rounded-xl text-xs border border-slate-700 hover:bg-slate-700 transition-all"
                >
                  💬 문자예약
                </a>
              </div>
            </article>
          ))}
        </div>

        <section className="mt-16 bg-slate-900/60 border border-slate-800 rounded-3xl p-8">
          <h3 className="text-base font-black text-white mb-4 flex items-center gap-2">
            🛡️ 안전하고 투명한 이용 안내
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-slate-400">
            <div className="bg-slate-950/60 p-5 rounded-2xl border border-slate-800/60">
              <strong className="block text-pink-400 text-sm mb-1.5">100% 후불제 시스템</strong>
              <p className="leading-relaxed">사전 입금을 요구하는 사기 업체에 주의하세요. 모든 제휴점은 서비스 완료 후 직접 확인하고 결제하는 후불제로만 운영됩니다.</p>
            </div>
            <div className="bg-slate-950/60 p-5 rounded-2xl border border-slate-800/60">
              <strong className="block text-cyan-400 text-sm mb-1.5">어디서든 신속 방문</strong>
              <p className="leading-relaxed">자택, 오피스텔, 원룸부터 출장 및 여행 중 머무시는 호텔, 모텔 숙소까지 고객님이 계신 곳으로 빠르게 찾아갑니다.</p>
            </div>
            <div className="bg-slate-950/60 p-5 rounded-2xl border border-slate-800/60">
              <strong className="block text-purple-400 text-sm mb-1.5">철저한 보안 및 안심번호</strong>
              <p className="leading-relaxed">고객님의 개인정보 보호를 위해 안심번호 서비스를 적용하고 있으며, 건전한 방문 테어피 문화 정착을 위해 노력합니다.</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#05070d] border-t border-slate-900 py-12 px-6 text-xs text-slate-500 mt-auto">
        <div className="max-w-6xl mx-auto text-center space-y-3">
          <p className="font-bold text-slate-300">인천출장마사지 · 홈타이 통합 안내센터</p>
          <p>인천 전지역 24시 방문 힐링 케어 서비스</p>
          <p className="pt-2 text-[11px] text-slate-600">
            © 2026 인천출장마사지. All rights reserved. 불법 퇴폐업소 문의는 일절 사절합니다.
          </p>
        </div>
      </footer>

      {/* 우측 하단 고정 플로팅 예약 버튼 */}
      <a
        href="tel:050712803324"
        className="fixed right-6 bottom-6 z-50 bg-gradient-to-r from-pink-500 via-purple-600 to-cyan-400 text-white font-black px-6 py-4 rounded-full shadow-[0_0_30px_rgba(236,72,153,0.5)] text-sm flex items-center gap-2 hover:scale-110 transition-all animate-bounce"
      >
        📞 24시 실시간 전화예약
      </a>
    </div>
  );
}