'use client'

import * as React from 'react'
import { NextUIProvider } from '@nextui-org/system'
import { useRouter } from 'next/navigation'
import { ThemeProvider as NextThemesProvider } from 'next-themes'
import { ThemeProviderProps } from 'next-themes/dist/types'
import { SWRConfig } from 'swr'

import { fetcher } from '@/lib/fetcher'

export interface ProvidersProps {
  children: React.ReactNode
  themeProps?: ThemeProviderProps
}

export function Providers({ children, themeProps }: ProvidersProps) {
  const router = useRouter()

  return (
    <NextUIProvider navigate={router.push}>
      <SWRConfig
        value={{
          fetcher: fetcher
        }}
      >
        <NextThemesProvider {...themeProps}>{children}</NextThemesProvider>
      </SWRConfig>
    </NextUIProvider>
  )
}
