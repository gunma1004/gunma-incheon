export default function sitemap() {
  const baseUrl = 'https://gunma-incheon.netlify.app'; // ⭐️ 인천 전용 도메인 주소로 변경

  const incheonGus = [
    'bupyeong', 'yeonsu', 'namdong', 'seogu',
    'michuhol', 'gyeyang', 'junggu', 'donggu'
  ];

  const mainPage = {
    url: baseUrl,
    lastModified: new Date().toISOString(),
    priority: 1.0,
  };

  const guPages = incheonGus.map((g) => ({
    url: `${baseUrl}/${g}`,
    lastModified: new Date().toISOString(),
    priority: 0.8,
  }));

  return [mainPage, ...guPages];
}