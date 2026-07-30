import { Metadata } from 'next';
import ClientDongSelector from './ClientDongSelector';

// ⭐️ 인천 8개 구 및 동 데이터
const incheonGus: Record<string, { name: string; dongs: string[] }> = {
  bupyeong: { name: '부평구', dongs: ['부평동', '산곡동', '청천동', '갈산동', '삼산동', '부개동', '십정동', '일신동'] },
  yeonsu: { name: '연수구', dongs: ['옥련동', '선학동', '연수동', '청학동', '동춘동', '송도동'] },
  namdong: { name: '남동구', dongs: ['구월동', '간석동', '만수동', '장수동', '서창동', '논현동', '남촌동', '고잔동'] },
  seogu: { name: '서구', dongs: ['검암동', '연희동', '청라동', '루원시티', '검단동', '당하동', '신현동', '석남동', '가좌동'] },
  michuhol: { name: '미추홀구', dongs: ['숭의동', '용현동', '학익동', '도화동', '주안동', '관교동', '문학동'] },
  gyeyang: { name: '계양구', dongs: ['효성동', '계산동', '작전동', '서운동', '계양동', '임학동', '용종동'] },
  junggu: { name: '중구', dongs: ['신포동', '연안동', '영종동', '운서동', '용유동', '동인천동', '북성동'] },
  donggu: { name: '동구', dongs: ['만석동', '화수동', '송현동', '송림동', '금창동'] }
};

type Props = {
  params: Promise<{ gu: string; dong?: string[] }>;
};

// 1. 빌드 시 주요 경로 미리 생성
export async function generateStaticParams() {
  const paths: { gu: string; dong?: string[] }[] = [];
  Object.keys(incheonGus).forEach((gu) => {
    paths.push({ gu });
    incheonGus[gu].dongs.forEach((dong) => {
      paths.push({ gu, dong: [encodeURIComponent(dong)] });
    });
  });
  return paths;
}

// 2. 검색엔진용 메타데이터 생성 (⭐️ '출장마사지' 키워드 추가)
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { gu, dong } = await params;
  const guData = incheonGus[gu] || { name: '부평구', dongs: ['부평동'] };
  const currentDong = dong?.[0] ? decodeURIComponent(dong[0]) : '';
  const locationTitle = currentDong ? `${guData.name} ${currentDong}` : guData.name;

  return {
    title: `인천 ${locationTitle} 출장마사지 24시 홈케어 테라피 추천 | 건마사랑`,
    description: `인천 ${locationTitle} 출장마사지 방문 힐링 케어. 타이, 아로마, 스웨디시 코스 및 100% 후불제 이용 안내.`,
    openGraph: {
      title: `인천 ${locationTitle} 출장마사지 홈케어 테라피`,
      description: `인천 ${locationTitle} 전지역 25분 내 연중무휴 안심 출장마사지.`,
    },
  };
}

export default async function IncheonLocationPage({ params }: Props) {
  const { gu, dong } = await params;
  const guData = incheonGus[gu] || { name: '부평구', dongs: ['부평동', '산곡동', '청천동', '갈산동'] };
  const currentDong = dong?.[0] ? decodeURIComponent(dong[0]) : '';
  const locationName = currentDong ? `${guData.name} ${currentDong}` : guData.name;

  // ⭐️ [기법 1] JSON-LD 구조화 데이터 (검색로봇 수집 키워드 강화)
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'HealthAndBeautyBusiness',
    'name': `건마사랑인천 ${locationName} 출장마사지`,
    'description': `인천 ${locationName} 24시간 프리미엄 출장마사지 및 홈케어 테라피 서비스 안내`,
    'areaServed': guData.dongs.map((d) => `인천광역시 ${guData.name} ${d}`),
    'address': {
      '@type': 'PostalAddress',
      'addressRegion': '인천광역시',
      'addressLocality': guData.name,
    },
  };

  return (
    <div className="bg-[#faf6fb] text-[#403656] min-h-screen flex flex-col font-sans antialiased">
      {/* JSON-LD 표준 스키마 주입 */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* 상단 띠 배너 */}
      <div className="bg-gradient-to-r from-[#f4edf7] to-[#f7eef3] border-b border-[#ece2f0] text-xs text-[#8b7f9e] py-2 px-4">
        <div className="max-w-[1080px] mx-auto flex justify-between items-center flex-wrap gap-2">
          <span>◆ 인천 {locationName} 출장마사지 전지역 케어 · 위생/안전 준수</span>
          <span><b className="text-[#5fc7ad]">24시간 상담</b> · 연중무휴</span>
        </div>
      </div>

      {/* 헤더 */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-[#ece2f0]">
        <div className="max-w-[1080px] mx-auto px-5 h-16 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2 font-extrabold text-xl tracking-tight">
            <span className="bg-gradient-to-r from-[#a98ce2] to-[#5fc7ad] bg-clip-text text-transparent">
              건마사랑인천
            </span>
            <span className="text-xs text-[#8b7f9e] font-semibold">{locationName}</span>
          </a>
          <a href="/" className="text-xs text-[#8b7f9e] hover:text-[#a98ce2] font-semibold transition-colors">
            &larr; 인천 메인으로
          </a>
        </div>
      </header>

      {/* 히어로 섹션 */}
      <section className="bg-radial from-[#a98ce2]/20 via-transparent to-[#faf6fb] border-b border-[#ece2f0] py-10 px-5">
        <div className="max-w-[1080px] mx-auto text-left">
          <span className="inline-block border border-[#ece2f0] bg-[#f4eef7] text-[#5fc7ad] font-bold text-xs px-3 py-1 rounded-full mb-3">
            ◆ 인천 {locationName} 25분 내 빠른 방문
          </span>
          
          {/* ⭐️ H1 메인 제목에 키워드 배치 */}
          <h1 className="text-3xl md:text-4xl font-extrabold text-[#403656] leading-tight mb-3">
            인천 <span className="text-[#a98ce2]">{locationName}</span> 출장마사지<br />24시 맞춤 힐링 테라피
          </h1>

          {/* ⭐️ [기법 2] 이미지 + Alt 속성 활용 */}
          <div className="my-4">
            <img 
              src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='600' height='60' viewBox='0 0 600 60'><rect width='100%' height='100%' fill='%23f4eef7'/><text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' fill='%23a98ce2' font-size='14' font-weight='bold'>인천 전지역 24시 안심 후불제 출장마사지 안내</text></svg>"
              alt={`인천 ${locationName} 출장마사지 홈타이 스웨디시 24시 예약 수집 가이드`} 
              className="w-full max-w-lg rounded-xl border border-[#ece2f0]"
            />
          </div>

          <p className="text-[#8b7f9e] text-sm md:text-base max-w-2xl mb-6">
            인천 {locationName} 출장마사지 전문 케어. 편안한 공간에서 즐기는 프리미엄 테라피 프로그램입니다. 아래의 세부 동별 링크를 선택해 보세요.
          </p>

          {/* ⭐️ [기법 3] Client-Side Hydration Component */}
          <ClientDongSelector guKey={gu} guName={guData.name} dongs={guData.dongs} currentDong={currentDong} />
        </div>
      </section>

      {/* 안내 콘텐츠 메인 */}
      <main className="max-w-[1080px] mx-auto px-5 py-10 w-full flex-1">
        {/* ⭐️ H2 제목 및 설명글에 키워드 배치 */}
        <h2 className="text-2xl font-bold mb-2">인천 {locationName} 추천 <span className="text-[#5fc7ad]">출장마사지 제휴업체</span></h2>
        <p className="text-xs text-[#8b7f9e] mb-6">엄선된 관리사의 정성 어린 방문 출장마사지 케어 프로그램을 제공합니다.</p>

        <div className="bg-white border border-[#ece2f0] rounded-2xl p-6 shadow-sm">
          <h3 className="text-lg font-bold text-[#403656] mb-2">인천 {locationName} 출장마사지 24시 안내</h3>
          <p className="text-xs text-[#8b7f9e] leading-relaxed mb-4">
            {locationName} 출장마사지 이용 시 예약 문의 후 25분 이내 도착을 원칙으로 하며, 100% 현장 후불 결제 방식으로 안심하고 이용하실 수 있습니다.
          </p>
          
          <div className="grid grid-cols-2 gap-3 mt-4">
            <a
              href="tel:050712803324"
              className="flex items-center justify-center bg-gradient-to-r from-[#a98ce2] to-[#5fc7ad] text-[#3a3152] font-bold py-3 rounded-xl text-xs shadow-sm hover:opacity-90"
            >
              📞 24시 전화 문의
            </a>
            <a
              href={`sms:050712803324?body=${encodeURIComponent(`[건마사랑] 인천 ${locationName} 출장마사지 문의드립니다.`)}`}
              className="flex items-center justify-center bg-white text-[#403656] font-bold py-3 rounded-xl text-xs border border-[#ece2f0] hover:bg-[#f4eef7]"
            >
              💬 문자 예약
            </a>
          </div>
        </div>
      </main>

      {/* 푸터 */}
      <footer className="bg-[#f4edf7] border-t border-[#ece2f0] py-8 px-5 text-xs text-[#8b7f9e] mt-auto">
        <div className="max-w-[1080px] mx-auto text-center space-y-2">
          <p className="font-bold text-[#403656]">건마사랑인천 · {locationName} 출장마사지</p>
          <p className="pt-2 text-[11px] text-[#9a8fae]">
            © 2026 건마사랑인천. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}