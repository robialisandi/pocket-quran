'use client'

import FrameAyat from '@/components/FrameAyat'
import { useEffect, useState } from 'react'
import MenuSheetAyat from './MenuSheetAyat'
import { Button } from './ui/button'
import { BookmarkIcon, PlayIcon, VolumeX } from 'lucide-react'
import { useAppContext } from '@/context/state'

interface Props {
  arabic: string
  noAyat: number
  noSurah: string
  nameSurah: string
  translate: string
  reverse: boolean
  playingRef: React.RefObject<HTMLDivElement>
}

const Ayat = ({ arabic, noSurah, noAyat, nameSurah, translate, reverse, playingRef }: Props) => {
  const { audio, setAudio } = useAppContext().audioContext

  const [show, setShow] = useState<boolean>(false)
  const content = `${arabic}\n\n${translate} (QS. ${nameSurah}: ${noAyat})`
  const playing = noSurah === audio.surah && noAyat.toString() === audio.ayat

  const playAudio = (surahId: string, verseId: number) => {
    setAudio({
      surah: playing ? '' : surahId,
      ayat: playing ? '' : verseId.toString(),
      open: playing ? false : true,
    })
  }
  useEffect(() => {
    if (playing && playingRef.current) {
      playingRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }
  }, [playing, playingRef])
  const arab = arabic.split(' ')

  return (
    <div
      ref={playing ? playingRef : null}
      className={`flex flex-col justify-between border-b ${show || playing ? 'bg-[#e8efe9]' : ''}`}
    >
      <div className="flex justify-end">
        <div className="flex flex-col justify-end gap-4 p-2">
          <MenuSheetAyat item={{ content, arabic, noSurah, noAyat, nameSurah, translate }} />
          <div className="flex">
            <div className="ml-1">
              <Button variant="outline" size="icon" className="h-8 w-8" onClick={() => playAudio(noSurah, noAyat)}>
                {playing ? (
                  <VolumeX className="w-4 h-4 text-green-700" />
                ) : (
                  <PlayIcon className="w-4 h-4 text-green-700" />
                )}
              </Button>
            </div>
            <div className="ml-1">
              <Button variant="outline" size="icon" className="h-8 w-8" onClick={() => playAudio(noSurah, noAyat)}>
                {playing ? (
                  <VolumeX className="w-4 h-4 text-green-700" />
                ) : (
                  <BookmarkIcon className="w-4 h-4 text-gray-400" />
                )}
              </Button>
            </div>
          </div>
        </div>
        <div
          onClick={() => setShow(!show)}
          className={`flex flex-col pr-4 py-5 border-gray-300 cursor-pointer relative w-full ${
            reverse ? 'items-start pl-4' : ''
          }`}
        >
          {!reverse ? (
            <div dir="rtl">
              <div className="flex flex-wrap">
                {arab.map((item, i) => (
                  <div key={i} className="me-[7px]">
                    <span className="font-arabic text-2xl text-[#2F6742]"> {item}</span>
                  </div>
                ))}
                <FrameAyat number={noAyat} isPlaying={playing} />
              </div>
            </div>
          ) : (
            <p className="text-[#2F6742]">
              {translate} <b>({noAyat})</b>
            </p>
          )}
        </div>
      </div>
      {show && (
        <>
          {reverse ? (
            <div dir="rtl">
              <div className="flex flex-wrap rtl:mr-5 pb-4">
                {arab.map((item, i) => (
                  <div key={i} className="me-[7px]">
                    <span className="font-arabic text-2xl text-[#4f4f4f]"> {item}</span>
                  </div>
                ))}
                <FrameAyat number={noAyat} />
              </div>
            </div>
          ) : (
            <p className="px-4 pb-4">{translate}</p>
          )}
        </>
      )}
    </div>
  )
}

export default Ayat
