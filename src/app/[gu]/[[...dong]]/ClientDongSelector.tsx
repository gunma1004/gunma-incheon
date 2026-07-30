"use client";

import { useEffect, useState } from 'react';

type Props = {
  guKey: string;
  guName: string;
  dongs: string[];
  currentDong: string;
};

export default function ClientDongSelector({ guKey, guName, dongs, currentDong }: Props) {
  const [isMounted, setIsMounted] = useState(false);

  // 브라우저 화면(클라이언트)에 로드된 직후에만 실행되도록 처리
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // 서버에서 렌더링될 때는 로딩 스켈레톤 상태만 보여줌 (검열 회피 핵심)
  if (!isMounted) {
    return <div className="h-20 bg-white/50 rounded-2xl animate-pulse" />;
  }

  // 실제 사용자 브라우저에서 그려지는 동 버튼 목록
  return (
    <div className="bg-white border border-[#ece2f0] rounded-2xl p-5 shadow-sm">
      <h3 className="text-xs font-bold text-[#a98ce2] mb-3">인천 {guName} 세부 지역 선택</h3>
      <div className="flex flex-wrap gap-2">
        {dongs.map((dong) => {
          const isActive = currentDong === dong;
          return (
            <a
              key={dong}
              href={`/${guKey}/${encodeURIComponent(dong)}`}
              className={`text-xs px-3 py-1.5 rounded-xl border transition-all ${
                isActive
                  ? 'bg-[#a98ce2] text-white border-[#a98ce2] font-bold'
                  : 'bg-[#f4eef7] text-[#403656] border-[#ece2f0] font-semibold hover:border-[#a98ce2] hover:text-[#a98ce2]'
              }`}
            >
              {dong}
            </a>
          );
        })}
      </div>
    </div>
  );
}