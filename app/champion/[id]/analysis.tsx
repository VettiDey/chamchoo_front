'use client'

import { useHydrateAtoms } from 'jotai/utils'

import Protrait from './portrait'
import Chart from './chart'

import { analysisChampionAtom } from '@/atom/analysis'
import { AnalysisResult } from '@/types/api'

interface AnalysisProps {
  data: AnalysisResult
}

export default function Analysis({ data }: AnalysisProps) {
  console.log(data)
  useHydrateAtoms([[analysisChampionAtom, data]], {
    dangerouslyForceHydrate: true
  })

  return (
    <>
      <div className="flex flex-col items-center justify-center mx-4 my-8">
        <Protrait />
      </div>
      <Chart />
    </>
  )
}
