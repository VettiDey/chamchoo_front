import { InputNickname } from './InputNickname'

import { title, subtitle } from '@/components/primitives'

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="justify-center inline-block max-w-lg text-center">
        <h1 className={title({ color: 'violet' })}>플레이스타일&nbsp;</h1>
        <h1 className={title()}>분석&nbsp;</h1>
        <br />
        <h1 className={title()}>가장 잘 맞는 챔피언을 추천해드립니다.</h1>
        <h2 className={subtitle({ class: 'mt-4' })}>
          플레이 스타일 기반 챔피언 추천
        </h2>
      </div>

      <InputNickname />
    </section>
  )
}
