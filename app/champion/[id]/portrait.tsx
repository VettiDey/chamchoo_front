'use client'
import { Image } from '@nextui-org/image'
import { Pagination } from '@nextui-org/pagination'
import { useAtom, useAtomValue } from 'jotai'

import {
  analysisPaginationAtom,
  currentChampionImageAtom,
  totalPageAtom
} from '@/atom/analysis'

export default function Protrait() {
  const [page, setPage] = useAtom(analysisPaginationAtom)
  const src = useAtomValue(currentChampionImageAtom)
  const total = useAtomValue(totalPageAtom)

  return (
    <>
      <Image isBlurred alt="Caitlyn" className="mx-8 my-8" src={src} />
      <Pagination
        className="mt-8"
        initialPage={1}
        page={page + 1}
        total={total}
        onChange={(page) => setPage(page - 1)}
      />
    </>
  )
}
