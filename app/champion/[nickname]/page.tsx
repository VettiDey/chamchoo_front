import Analysis from './analysis'

import { fetcher } from '@/lib/fetcher'
import { AnalysisResult } from '@/types/api'

interface Props {
  params: {
    nickname: string
  }
}

export default async function ChampionPage({ params }: Props) {
  const { nickname } = params
  const data = await getAnalysisResult(nickname)

  return <Analysis data={data} />
}

const getAnalysisResult = async (nickname: string) => {
  return await fetcher<AnalysisResult>(`/analysis-result/${nickname}`)
}
