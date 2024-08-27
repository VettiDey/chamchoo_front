import { InputNickname } from './InputNickname'

import { title, subtitle } from '@/components/primitives'

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="justify-center inline-block max-w-lg text-center">
        <h1 className={title({ color: 'violet' })}>소환사 </h1>
        <h1 className={title()}>해체 분석&nbsp;</h1>
        <br />
        <h1 className={title()}>당신의&nbsp;</h1>

        <h1 className={title({ color: 'yellow' })}>플레이</h1>
        <h1 className={title()}>
          를
          <br /> 분석합니다.
        </h1>
        <h2 className={subtitle({ class: 'mt-4' })}>
          플레이 스타일 기반 챔피언 분석
        </h2>
      </div>

      <InputNickname />
    </section>
  )
}
