import { useResetAtom } from 'jotai/utils'
import { useEffect } from 'react'

import { analysisChampionAtom, analysisPaginationAtom } from '@/atom/analysis'

export const useResetData = () => {
  const resetPage = useResetAtom(analysisPaginationAtom)
  const resetChampion = useResetAtom(analysisChampionAtom)

  useEffect(() => {
    resetPage()
    resetChampion()
  }, [])

  return
}
