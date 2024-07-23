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
  useHydrateAtoms([[analysisChampionAtom, data]])

  return (
    <>
      <div className="flex flex-col items-center justify-center mx-4">
        <Protrait />
      </div>
      <Chart />
    </>
  )
}
