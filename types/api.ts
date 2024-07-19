export interface Champion {
  champion: string
  src: string
  average_features: {
    attack: number
    roaming: number
    defence: number
    stability: number
    wild: number
    carry: number
  }
  user_features: {
    attack: number
    roaming: number
    defence: number
    stability: number
    wild: number
    carry: number
  }
}

export type AnalysisResult = Champion[]
