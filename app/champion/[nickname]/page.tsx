import { Image } from '@nextui-org/image'
import { Pagination } from '@nextui-org/pagination'

import Chart from './chart'

export default function ChampionPage() {
  return (
    <>
      <div className="flex flex-col items-center justify-center mx-4">
        <Image isBlurred alt="Caitlyn" src="/Caitlyn.webp" />
        <Pagination initialPage={1} total={10} />
      </div>
      <Chart />
    </>
  )
}
