export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: '소해분',
  description: '소환사 해체 분석기',
  route: {
    champion: (nickname: string) => `/champion/${nickname}`
  }
}
