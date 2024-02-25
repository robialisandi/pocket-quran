'use client'

import { useContext, useEffect, useState } from 'react'
import { AudioContext } from '@/context/audioContext'
import {
  FastForwardIcon,
  FileAudio,
  GalleryThumbnails,
  PauseIcon,
  PlayCircleIcon,
  RefreshCcw,
  RefreshCwOff,
  RewindIcon,
  Volume2,
  VolumeX,
  XCircleIcon,
  XIcon,
} from 'lucide-react'
import { SurahInfoPage } from '@/data/surah-info'
import AudioPlayer, { RHAP_UI } from 'react-h5-audio-player'
import MaxWidthWrapper from './MaxWidthWrapper'
import 'react-h5-audio-player/lib/styles.css'
import { Button } from './ui/button'

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
interface AyahText {
  [ayahNumber: string]: string
}

interface TranslationText {
  name: string
  text: AyahText
}

interface TafsirText {
  name: string
  source: string
  text: AyahText
}

interface SurahDataType {
  number: string
  name: string
  name_latin: string
  number_of_ayah: string
  text: AyahText
  translations: {
    id: TranslationText
  }
  tafsir: {
    id: {
      kemenag: TafsirText
    }
  }
}

const SurahAudioPlayer = () => {
  const { surah, setSurah, ayat, setAyat, open, setOpen } = useContext(AudioContext)
  const [src, setSrc] = useState<string>('')
  const [translate, setTranslate] = useState<boolean>(false)
  const [surahInfo, setSurahInfo] = useState<SurahInfoPage | null>(null)
  const [surahData, setSurahData] = useState<SurahDataType | null>(null)

  useEffect(() => {
    const generateSrc = () => {
      const surahThreeDigit = formatNumber(surah)
      const verseThreeDigit = formatNumber(ayat)
      const BASE_URL = 'https://everyayah.com/data'
      const reciter = 'Alafasy_128kbps'

      const src = `${BASE_URL}/${reciter}/${surahThreeDigit}${verseThreeDigit}.mp3`
      setSrc(src)
    }
    if (surah !== '') {
      const surahInfo: SurahInfoPage = require(`../data/surah-info/${surah}.ts`).default
      const surahData: SurahDataType = require(`../data/surah-data/${surah}.ts`).default[surah]
      setSurahInfo(surahInfo)
      setSurahData(surahData)
    } else {
      setSurahInfo(null)
      setSurahData(null)
    }
    generateSrc()
  }, [surah, ayat])

  const nextPlay = () => {
    const nextAyat = parseInt(ayat) + 1
    setAyat(nextAyat.toString())
  }

  const onClose = () => {
    setSurah('')
    setAyat('')
    setOpen(false)
  }

  const showTranslate = () => {
    setTranslate(!translate)
  }

  return (
    <>
      {open ? (
        <MaxWidthWrapper className="flex flex-col min-h-[100px] justify-between">
          <div className="bg-white fixed bottom-0 w-full md:w-[480px] flex self-center z-[99]">
            <div
              className={`transition-all duration-800 ${
                translate ? 'opacity-100 translate-y-0 visible' : 'invisible opacity-0 translate-y-full'
              } absolute bottom-[100px] z-10 bg-[#ffffffa3] max-w-[480px] p-3 w-full backdrop-blur-sm shadow-[0_-5px_15px_2px_rgba(0,0,0,0.07)]`}
            >
              <span className="text-sm text-center flex">{surahData?.translations.id.text[ayat]}</span>
            </div>
            <AudioPlayer
              className="z-[1000]"
              autoPlay
              src={src}
              onEnded={() => nextPlay()}
              onError={() => onClose()}
              customIcons={{
                play: <PlayCircleIcon className="h-6 w-6 m-auto" />,
                pause: <PauseIcon className="h-5 w-5 m-auto" />,
                rewind: (
                  <div className="h-[35px] w-[35px] flex items-center justify-end">
                    <RewindIcon className="h-5 w-5" />
                  </div>
                ),
                forward: <FastForwardIcon className="h-5 w-5" />,
                loop: <RefreshCcw className="h-5 w-5 text-green-600" />,
                loopOff: <RefreshCwOff className="h-5 w-5" />,
                volume: <Volume2 className="h-5 w-5" />,
                volumeMute: <VolumeX className="h-5 w-5" />,
              }}
              customAdditionalControls={[
                RHAP_UI.LOOP,
                <GalleryThumbnails
                  key="1"
                  className={`h-5 w-5 cursor-pointer ${translate ? 'text-green-600' : 'text-gray-300'}`}
                  onClick={() => showTranslate()}
                />,
              ]}
              header={
                <div className="flex justify-between pt-2">
                  <div className="flex items-center">
                    <FileAudio className="h-4 w-4 mr-2 text-green-700" />
                    <small className="text-green-800 text-[13px]">
                      QS. {surahInfo?.current.latin} {surah} : {ayat}
                    </small>
                  </div>
                  <div className="flex items-center">
                    <small className="text-gray-400 text-[13px]">• {surahInfo?.current.translation}</small>
                    <XCircleIcon
                      className="absolute z-20 bg-white rounded-lg top-[-20px] right-[10px] w-4 h-4 text-gray-400 hover:text-red-500 cursor-pointer"
                      onClick={() => onClose()}
                    />
                  </div>
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
