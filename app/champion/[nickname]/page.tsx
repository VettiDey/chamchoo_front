import { Image } from '@nextui-org/image'
import { Pagination } from '@nextui-org/pagination'

import Chart from './chart'

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

  return (
    <>
      <div className="flex flex-col items-center justify-center mx-4">
        <Image isBlurred alt="Caitlyn" src="/Caitlyn.webp" />
        <Pagination initialPage={1} total={10} />
      </div>
      <Chart data={data} />
    </>
  )
}

const getAnalysisResult = async (nickname: string) => {
  return await fetcher<AnalysisResult>(`/analysis-result/${nickname}`)
}
