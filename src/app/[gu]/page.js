// ⭐️ 인천 8개 구 및 세부 동 데이터
const incheonGus = {
  bupyeong: { name: '부평구', dongs: ['부평동', '산곡동', '청천동', '갈산동', '삼산동', '부개동', '십정동'] },
  yeonsu: { name: '연수구', dongs: ['옥련동', '선학동', '연수동', '청학동', '동춘동', '송도동'] },
  namdong: { name: '남동구', dongs: ['구월동', '간석동', '만수동', '장수동', '서창동', '논현동'] },
  seogu: { name: '서구', dongs: ['검암동', '연희동', '청라동', '루원시티', '검단동', '당하동'] },
  michuhol: { name: '미추홀구', dongs: ['숭의동', '용현동', '학익동', '도화동', '주안동', '관교동'] },
  gyeyang: { name: '계양구', dongs: ['효성동', '계산동', '작전동', '서운동', '계양동'] },
  junggu: { name: '중구', dongs: ['신포동', '연안동', '영종동', '운서동', '용유동'] },
  donggu: { name: '동구', dongs: ['만석동', '화수동', '송현동', '송림동', '금창동'] }
};

// ⭐️ 네이버 SEO 메타데이터 자동 생성 (구별 맞춤 검색 제목/설명)
export async function generateMetadata({ params }) {
  const { gu } = await params;
  const guData = incheonGus[gu] || { name: gu.toUpperCase() };

  return {
    title: `인천 ${guData.name} 24시 출장마사지 · 홈타이 | 건마사랑인천`,
    description: `인천 ${guData.name} 전지역 25분 내 빠른 방문! 부평, 연수, 송도, 청라, 구월 등 스웨디시, 타이, 아로마 24시 후불제 출장케어.`,
    alternates: {
      canonical: `https://gunmalove-gyeonggi.shop/${gu}`,
    },
  };
}

export default async function IncheonGuPage({ params }) {
  const { gu } = await params;
  const guData = incheonGus[gu] || { name: gu, dongs: [] };

  return (
    <div className="bg-[#faf6fb] text-[#403656] min-h-screen flex flex-col font-sans">
      {/* 상단 헤더 */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-[#ece2f0]">
        <div className="max-w-[1080px] mx-auto px-5 h-16 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2 font-extrabold text-xl tracking-tight">
            <span className="bg-gradient-to-r from-[#a98ce2] to-[#5fc7ad] bg-clip-text text-transparent">
              건마사랑인천
            </span>
          </a>
          <a href="/" className="text-xs text-[#8b7f9e] hover:text-[#a98ce2] font-semibold">
            &larr; 인천 전체보기
          </a>
        </div>
      </header>

      {/* 메인 콘텐츠 */}
      <main className="max-w-[1080px] mx-auto px-5 py-10 w-full flex-1 text-center">
        <span className="inline-block border border-[#ece2f0] bg-[#f4eef7] text-[#5fc7ad] font-bold text-xs px-3 py-1 rounded-full mb-3">
          ◆ 인천 {guData.name} 전지역 25분 내 방문
        </span>
        <h1 className="text-3xl md:text-4xl font-extrabold text-[#403656] leading-tight mb-4">
          인천 <span className="text-[#a98ce2]">{guData.name}</span> 24시 출장마사지 · 홈타이
        </h1>
        <p className="text-[#8b7f9e] text-sm md:text-base max-w-xl mx-auto mb-8">
          {guData.name} 전지역 100% 후불제로 안심하고 이용하실 수 있습니다. 원하시는 코스와 시간을 문의해 주세요.
        </p>

        {/* 해당 구의 동 목록 카드 */}
        {guData.dongs && guData.dongs.length > 0 && (
          <div className="bg-white border border-[#ece2f0] rounded-2xl p-6 text-left max-w-2xl mx-auto mb-8">
            <h2 className="text-sm font-bold text-[#a98ce2] mb-3">인천 {guData.name} 방문 가능 동 안내</h2>
            <div className="flex flex-wrap gap-2">
              {guData.dongs.map((dong) => (
                <span key={dong} className="text-xs px-3 py-1.5 bg-[#f4eef7] text-[#403656] rounded-xl border border-[#ece2f0] font-medium">
                  {guData.name} {dong}출장마사지
                </span>
              ))}
            </div>
          </div>
        )}

        {/* 전화/문자 예약 버튼 */}
        <div className="flex justify-center gap-4 max-w-md mx-auto">
          <a
            href="tel:050712803324"
            className="flex-1 bg-gradient-to-r from-[#a98ce2] to-[#5fc7ad] text-[#3a3152] font-bold py-3.5 rounded-xl text-sm shadow-md hover:opacity-90 transition-all"
          >
            📞 24시 전화 문의
          </a>
          <a
            href={`sms:050712803324?body=${encodeURIComponent(`[건마사랑인천] ${guData.name} 문의드립니다.`)}`}
            className="flex-1 bg-white text-[#403656] font-bold py-3.5 rounded-xl text-sm border border-[#ece2f0] hover:bg-[#f4eef7] transition-all"
          >
            💬 문자 예약
          </a>
        </div>
      </main>

      {/* 푸터 */}
      <footer className="bg-[#f4edf7] border-t border-[#ece2f0] py-6 text-center text-xs text-[#8b7f9e] mt-auto">
        © 2026 건마사랑인천. All rights reserved.
      </footer>
    </div>
  );
}