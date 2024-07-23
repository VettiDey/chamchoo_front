'use client'
import { button } from '@nextui-org/theme'
import { Input } from '@nextui-org/input'
import { Link } from '@nextui-org/link'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

import { siteConfig } from '@/config/site'

const handleId = (id: string) => {
  if (id.includes('#')) {
    return id.replace('#', '-')
  }

  return `${id}-KR1`
}

export const InputNickname = () => {
  const [nickname, setNickname] = useState('')
  const router = useRouter()

  return (
    <>
      <div>
        <Input
          label="닉네임"
          value={nickname}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              router.push(siteConfig.route.champion(handleId(nickname)))
            }
          }}
          onValueChange={setNickname}
        />
      </div>

      <div className="flex gap-3">
        <Link
          className={button({
            color: 'primary',
            radius: 'full',
            variant: 'shadow'
          })}
          href={siteConfig.route.champion(handleId(nickname))}
        >
          분석하기
        </Link>
      </div>
    </>
  )
}
