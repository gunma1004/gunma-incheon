export default function sitemap() {
  // ⭐️ 새로 구매하신 가비아 도메인으로 변경
  const baseUrl = 'https://gunmalove-incheon.shop';

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