import Analysis from './analysis'

import { fetcher } from '@/lib/fetcher'
import { AnalysisResult } from '@/types/api'

interface Props {
  params: {
    id: string
  }
}

export default async function ChampionPage({ params }: Props) {
  const { id } = params
  const data = await getAnalysisResult(id)

  return <Analysis data={data} />
}

const getAnalysisResult = async (id: string) => {
  const nickname = id.split('-')[0]
  const tagline = id.split('-')[1]

  return await fetcher<AnalysisResult>(
    `/analysis-result/${nickname}/?tagline=${tagline}`
  )
}
