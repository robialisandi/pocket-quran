'use client'

import { useContext, useEffect, useState } from 'react'
import AudioPlayer from 'react-h5-audio-player'
import 'react-h5-audio-player/lib/styles.css'
import { AudioContext } from '@/context/audioContext'
import MaxWidthWrapper from './MaxWidthWrapper'

const formatNumber = (numberText: string): string => {
  const numParam = parseInt(numberText, 10)
  if (numParam < 10) {
    return `00${numberText}`
  } else if (numParam < 100) {
    return `0${numberText}`
  } else {
    return `${numberText}`
  }
}

const SurahAudioPlayer = () => {
  const { surah, ayat, open } = useContext(AudioContext)
  const [src, setSrc] = useState<string>('')

  useEffect(() => {
    const generateSrc = () => {
      const surahThreeDigit = formatNumber(surah)
      const verseThreeDigit = formatNumber(ayat)
      const BASE_URL = 'https://everyayah.com/data'
      const reciter = 'Alafasy_128kbps'

      const src = `${BASE_URL}/${reciter}/${surahThreeDigit}${verseThreeDigit}.mp3`
      setSrc(src)
    }
    generateSrc()
  }, [surah, ayat])

  return (
    <>
      {open ? (
        <MaxWidthWrapper className="flex flex-col min-h-[100px] justify-between">
          <div className="fixed bottom-0 w-full md:w-[480px] flex self-center z-[100]">
            <AudioPlayer autoPlay src={src} />
          </div>
        </MaxWidthWrapper>
      ) : null}
    </>
  )
}

export default SurahAudioPlayer
