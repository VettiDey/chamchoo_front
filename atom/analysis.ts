import { atom } from 'jotai'
import { atomWithReset } from 'jotai/utils'

import { AnalysisResult } from '@/types/api'

export const analysisPaginationAtom = atomWithReset(0)
export const analysisChampionAtom = atomWithReset<AnalysisResult | null>(null)
export const totalPageAtom = atom(
  (get) => get(analysisChampionAtom)?.length ?? 0
)
export const currentChampionAtom = atom((get) => {
  const currentChampion = get(analysisPaginationAtom)

  return get(analysisChampionAtom)?.[currentChampion]
})
export const currentChampionImageAtom = atom((get) => {
  const currentChampion = get(currentChampionAtom)

  return currentChampion?.src
})
