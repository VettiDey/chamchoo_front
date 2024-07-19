export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: '챔추',
  description: 'ai기반으로 챔피언을 추천해드려요',
  route: {
    champion: (nickname: string) => `/champion/${nickname}`
  }
}
