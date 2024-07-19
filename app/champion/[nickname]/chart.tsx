'use client'

import { useState } from 'react'
import { Button } from '@nextui-org/button'

import RadarChart from '@/components/radar-chart'
import { AnalysisResult } from '@/types/api'

const anotherChampion = {
  name: 'Ahri',
  stats: [3, 4, 8, 5]
}

const initialChampion = {
  name: 'Aatrox',
  stats: [7, 3, 1, 4]
}

interface Props {
  data: AnalysisResult
}

export default function Chart({ data }: Props) {
  const [champion, setChampion] = useState(initialChampion)

  console.log(data)

  const switchChampion = () => {
    setChampion(champion.name === 'Aatrox' ? anotherChampion : initialChampion)
  }

  return (
    <>
      <Button onClick={switchChampion}>Switch Champion</Button>

      <div className="flex mx-32">
        <RadarChart data={champion} />
      </div>
    </>
  )
}
