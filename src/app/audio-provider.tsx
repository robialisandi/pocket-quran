'use client'

import { AudioContext } from '@/context/audioContext'
import { useState } from 'react'

interface Wrapper {
  children: React.ReactNode
}
export default function AudioProvider({ children }: Wrapper) {
  const [surah, setSurah] = useState<string>('1')
  const [ayat, setAyat] = useState<string>('')
  const [open, setOpen] = useState<boolean>(false)
  return (
    <AudioContext.Provider value={{ surah, setSurah, ayat, setAyat, open, setOpen }}>{children}</AudioContext.Provider>
  )
}
