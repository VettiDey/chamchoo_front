'use client'

import { useAtomValue } from 'jotai'

import RadarChart from '@/components/radar-chart'
import { currentChampionAtom } from '@/atom/analysis'

export default function Chart() {
  const champion = useAtomValue(currentChampionAtom)

  return (
    <>
      <div className="flex mx-32">
        {champion && <RadarChart data={champion} />}
      </div>
    </>
  )
}
