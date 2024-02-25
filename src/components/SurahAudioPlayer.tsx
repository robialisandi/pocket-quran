'use client'

import { useContext, useEffect, useState } from 'react'
import { AudioContext } from '@/context/audioContext'
import {
  FastForwardIcon,
  FileAudio,
  PauseIcon,
  PlayCircleIcon,
  RefreshCcw,
  RefreshCwOff,
  RewindIcon,
  Volume2,
  VolumeX,
} from 'lucide-react'
import { SurahInfoPage } from '@/data/surah-info'
import AudioPlayer from 'react-h5-audio-player'
import MaxWidthWrapper from './MaxWidthWrapper'
import 'react-h5-audio-player/lib/styles.css'

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
  const { surah, setSurah, ayat, setAyat, open, setOpen } = useContext(AudioContext)
  const [src, setSrc] = useState<string>('')

  const surahInfo: SurahInfoPage = require(`../data/surah-info/${surah}.ts`).default

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

  const nextPlay = () => {
    const nextAyat = parseInt(ayat) + 1
    setAyat(nextAyat.toString())
  }

  const onError = () => {
    setSurah('')
    setAyat('')
    setOpen(false)
  }

  return (
    <>
      {open ? (
        <MaxWidthWrapper className="flex flex-col min-h-[100px] justify-between">
          <div className="bg-white fixed bottom-0 w-full md:w-[480px] flex self-center z-[100]">
            <AudioPlayer
              autoPlay
              src={src}
              onEnded={() => nextPlay()}
              onError={() => onError()}
              customIcons={{
                play: <PlayCircleIcon className="h-6 w-6 m-auto" />,
                pause: <PauseIcon className="h-5 w-5 m-auto" />,
                rewind: (
                  <div className="h-[35px] w-[35px] flex items-center justify-end">
                    <RewindIcon className="h-5 w-5" />
                  </div>
                ),
                forward: <FastForwardIcon className="h-5 w-5" />,
                loop: <RefreshCcw className="h-5 w-5" />,
                loopOff: <RefreshCwOff className="h-5 w-5" />,
                volume: <Volume2 className="h-5 w-5" />,
                volumeMute: <VolumeX className="h-5 w-5" />,
              }}
              header={
                <div className="flex justify-between pt-2">
                  <div className="flex items-center">
                    <FileAudio className="h-4 w-4 mr-2 text-green-700" />
                    <small className="text-green-800 text-[13px]">
                      QS. {surahInfo.current.latin} {surah} : {ayat}
                    </small>
                  </div>
                  <small className="text-gray-500 text-[13px]">{surahInfo.current.translation}</small>
                </div>
              }
            />
          </div>
        </MaxWidthWrapper>
      ) : null}
    </>
  )
}

export default SurahAudioPlayer
