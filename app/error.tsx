'use client'

import { useEffect } from 'react'
import { Button } from '@nextui-org/button'
import { GrPowerReset } from 'react-icons/gr'

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  useEffect(() => {
    // Log the error to an error reporting service
    /* eslint-disable no-console */
    console.error(error)
  }, [error])

  return (
    <div className="flex flex-col items-center justify-center">
      <h2 className="mb-4">몬가.. 몬가 잘못됨..</h2>
      <Button
        color="danger"
        startContent={
          <GrPowerReset className="size-5" height={20} width={20} />
        }
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        다시 시도
      </Button>
    </div>
  )
}
