import { Spinner } from '@nextui-org/spinner'

export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center">
      <Spinner size="lg" />
      <br />
      <h3 className="ml-2">분석중...</h3>
    </div>
  )
}
