"use client";

// ⭐️ 인천 지역 제휴 5개 업체 데이터 (안심번호 적용)
const shops = [
  {
    id: 1,
    name: "인천한국미인홈케어",
    location: "인천 전지역",
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
    location: "인천 전지역",
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
    location: "인천 전지역",
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
    location: "인천 전지역",
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
    location: "인천 전지역",
    desc: "100% 후불제 안심 이용, 인천 전지역 25분 내 빠른 도착",
    phone: "0507-1280-3328",
    badge: "만족도1위",
    courses: [
      { name: "타이 코스 (60분)", price: "60,000원" },
      { name: "스웨디시 코스 (60분)", price: "140,000원" },
    ]
  }
];

// ⭐️ 인천광역시 8개 주요 구 및 동 데이터
const incheonGus = {
  bupyeong: { name: '부평구', dongs: ['부평동', '산곡동', '청천동', '갈산동', '삼산동', '부개동', '십정동', '일신동'] },
  yeonsu: { name: '연수구', dongs: ['옥련동', '선학동', '연수동', '청학동', '동춘동', '송도동'] },
  namdong: { name: '남동구', dongs: ['구월동', '간석동', '만수동', '장수동', '서창동', '논현동', '남촌동', '고잔동'] },
  seogu: { name: '서구', dongs: ['검암동', '연희동', '청라동', '루원시티', '검단동', '당하동', '신현동', '석남동', '가좌동'] },
  michuhol: { name: '미추홀구', dongs: ['숭의동', '용현동', '학익동', '도화동', '주안동', '관교동', '문학동'] },
  gyeyang: { name: '계양구', dongs: ['효성동', '계산동', '작전동', '서운동', '계양동', '임학동', '용종동'] },
  junggu: { name: '중구', dongs: ['신포동', '연안동', '영종동', '운서동', '용유동', '동인천동', '북성동'] },
  donggu: { name: '동구', dongs: ['만석동', '화수동', '송현동', '송림동', '금창동'] }
};

export default function IncheonMainPage() {
  return (
    <div className="bg-[#faf6fb] text-[#403656] min-h-screen flex flex-col font-sans antialiased">
      {/* 상단 띠 배너 */}
      <div className="bg-gradient-to-r from-[#f4edf7] to-[#f7eef3] border-b border-[#ece2f0] text-xs text-[#8b7f9e] py-2 px-4">
        <div className="max-w-[1080px] mx-auto flex justify-between items-center flex-wrap gap-2">
          <span>◆ 인천 전지역 방문 관리 · 위생/안전 기준 준수</span>
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
            <span className="text-xs text-[#8b7f9e] font-semibold">인천 24시</span>
          </a>
          <a
            href="tel:050712803324"
            className="bg-gradient-to-br from-[#a98ce2] to-[#5fc7ad] text-[#3a3152] font-extrabold px-4 py-2 rounded-full text-xs shadow-sm hover:opacity-95 transition-all"
          >
            24시 대표문의
          </a>
        </div>
      </header>

      {/* 히어로 섹션 */}
      <section className="bg-radial from-[#a98ce2]/20 via-transparent to-[#faf6fb] border-b border-[#ece2f0] py-10 px-5">
        <div className="max-w-[1080px] mx-auto text-left">
          <span className="inline-block border border-[#ece2f0] bg-[#f4eef7] text-[#5fc7ad] font-bold text-xs px-3 py-1 rounded-full mb-3">
            ◆ 인천 전지역 25분 내 빠른 방문
          </span>
          <h1 className="text-3xl md:text-4xl font-extrabold text-[#403656] leading-tight mb-3">
            건마사랑인천 · 출장마사지 홈타이<br />구별 방문 예약 통합 안내
          </h1>
          <p className="text-[#8b7f9e] text-sm md:text-base max-w-2xl mb-6">
            부평, 연수구, 송도, 청라, 남동구 등 인천 전지역 방문 가능합니다. 희망하시는 코스 및 시간대를 선택하시면 1:1 맞춤 배정해 드립니다.
          </p>

          {/* 통계 요약 카드 */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-6">
            <div className="bg-white border border-[#ece2f0] rounded-xl p-4 text-center">
              <b className="block text-2xl text-[#5fc7ad] font-extrabold">8개</b>
              <span className="text-xs text-[#8b7f9e]">인천 주요 행정구</span>
            </div>
            <div className="bg-white border border-[#ece2f0] rounded-xl p-4 text-center">
              <b className="block text-2xl text-[#5fc7ad] font-extrabold">25분</b>
              <span className="text-xs text-[#8b7f9e]">평균 방문 도착</span>
            </div>
            <div className="bg-white border border-[#ece2f0] rounded-xl p-4 text-center">
              <b className="block text-2xl text-[#5fc7ad] font-extrabold">365일</b>
              <span className="text-xs text-[#8b7f9e]">연중무휴 운영</span>
            </div>
            <div className="bg-white border border-[#ece2f0] rounded-xl p-4 text-center">
              <b className="block text-2xl text-[#5fc7ad] font-extrabold">100%</b>
              <span className="text-xs text-[#8b7f9e]">후불제 안심이용</span>
            </div>
          </div>
        </div>
      </section>

      {/* 추천 제휴 업체 5개 목록 */}
      <main className="max-w-[1080px] mx-auto px-5 py-10 w-full flex-1">
        <h2 className="text-2xl font-bold mb-2">건마사랑인천 <span className="text-[#5fc7ad]">추천 제휴업체</span></h2>
        <p className="text-xs text-[#8b7f9e] mb-6">원하시는 업체의 코스를 확인 후 전화/문자로 편리하게 예약하세요.</p>

        <div className="space-y-6">
          {shops.map((shop) => (
            <article key={shop.id} className="bg-white border border-[#ece2f0] rounded-2xl p-5 md:p-6 shadow-sm hover:border-[#a98ce2] transition-all">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <span className="inline-block text-[11px] font-bold bg-[#f4eef7] text-[#a98ce2] px-2.5 py-0.5 rounded-full border border-[#ece2f0] mr-2">
                    {shop.badge}
                  </span>
                  <h3 className="text-xl font-bold text-[#403656] inline-block">{shop.name}</h3>
                  <p className="text-xs text-[#5fc7ad] font-semibold mt-1">{shop.location}</p>
                </div>
              </div>

              <p className="text-xs text-[#8b7f9e] mb-4">{shop.desc}</p>

              {/* 요금표 카드 */}
              <div className="bg-[#f4eef7] rounded-xl p-3 mb-4 space-y-1.5 border border-[#ece2f0]">
                {shop.courses.map((course, idx) => (
                  <div key={idx} className="flex justify-between text-xs">
                    <span className="text-[#403656] font-medium">{course.name}</span>
                    <span className="font-bold text-[#a98ce2]">{course.price}</span>
                  </div>
                ))}
              </div>

              {/* 전화하기 / 문자하기 버튼 */}
              <div className="grid grid-cols-2 gap-3">
                <a
                  href={`tel:${shop.phone}`}
                  className="flex items-center justify-center gap-1 bg-gradient-to-r from-[#a98ce2] to-[#5fc7ad] text-[#3a3152] font-bold py-3 rounded-xl text-xs shadow-sm hover:opacity-90 transition-all"
                >
                  📞 전화 문의하기
                </a>
                <a
                  href={`sms:${shop.phone}?body=${encodeURIComponent(`[건마사랑인천] ${shop.name} 문의드립니다.`)}`}
                  className="flex items-center justify-center gap-1 bg-white text-[#403656] font-bold py-3 rounded-xl text-xs border border-[#ece2f0] hover:bg-[#f4eef7] transition-all"
                >
                  💬 문자 예약하기
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* ⭐️ 구별 및 동별 바로가기 링크 섹션 */}
        <section className="bg-white border border-[#ece2f0] rounded-2xl p-6 mt-12">
          <h3 className="text-sm font-bold text-[#a98ce2] mb-3">인천광역시 구별 바로가기</h3>
          <div className="flex flex-wrap gap-2 mb-6">
            {Object.entries(incheonGus).map(([key, data]) => (
              <a
                key={key}
                href={`/${key}`}
                className="text-xs px-3 py-2 bg-[#f4eef7] text-[#403656] rounded-xl border border-[#ece2f0] font-semibold hover:border-[#a98ce2] hover:text-[#a98ce2] transition-all"
              >
                인천 {data.name}출장마사지
              </a>
            ))}
          </div>

          <h3 className="text-sm font-bold text-[#8b7f9e] mb-3">인천 주요 동 바로가기</h3>
          <div className="flex flex-wrap gap-1.5">
            {Object.entries(incheonGus).flatMap(([guKey, guData]) =>
              guData.dongs.map((dong) => (
                <a
                  key={`${guKey}-${dong}`}
                  href={`/${guKey}/${encodeURIComponent(dong)}`}
                  className="text-[11px] px-2.5 py-1 bg-[#faf6fb] text-[#8b7f9e] rounded-lg border border-[#ece2f0] hover:border-[#a98ce2] hover:text-[#a98ce2] transition-all"
                >
                  {dong}출장마사지
                </a>
              ))
            )}
          </div>
        </section>

        {/* 이용가이드 */}
        <section className="mt-12 space-y-6">
          <div className="bg-white border border-[#ece2f0] rounded-2xl p-6">
            <h3 className="text-lg font-bold mb-3">건마사랑인천 <span className="text-[#5fc7ad]">이용 가이드</span></h3>
            <ul className="text-xs text-[#8b7f9e] space-y-2 list-disc pl-4">
              <li><b>이용 장소:</b> 자택, 아파트, 오피스텔, 호텔/모텔 숙소 어디서나 편안하게 이용 가능합니다.</li>
              <li><b>결제 방식:</b> 모든 서비스는 현장 도착 후 확인하시는 100% 후불제로 안전하게 진행됩니다.</li>
              <li><b>소요 시간:</b> 예약 확정 후 평균 25분 이내 전문 관리사가 빠르게 방문합니다.</li>
            </ul>
          </div>
        </section>
      </main>

      {/* 푸터 영역 */}
      <footer className="bg-[#f4edf7] border-t border-[#ece2f0] py-8 px-5 text-xs text-[#8b7f9e] mt-auto">
        <div className="max-w-[1080px] mx-auto text-center space-y-2">
          <p className="font-bold text-[#403656]">건마사랑인천</p>
          <p>인천 전지역 방문 출장마사지·홈타이 추천 안내 사이트입니다.</p>
          <p className="pt-2 text-[11px] text-[#9a8fae]">
            © 2026 건마사랑인천. All rights reserved. 건전한 방문 케어 서비스를 준수하며 불법 요청에는 응하지 않습니다.
          </p>
        </div>
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