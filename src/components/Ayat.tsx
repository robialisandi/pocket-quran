'use client'

// import FrameAyat from '@/components/FrameAyat'
import { useContext, useEffect, useRef, useState } from 'react'
import MenuSheetAyat from './MenuSheetAyat'
import { Button } from './ui/button'
import { PlayIcon, VolumeX } from 'lucide-react'
import { AudioContext } from '@/context/audioContext'

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
  const [show, setShow] = useState<boolean>(false)
  const { surah, setSurah, ayat, setAyat, setOpen } = useContext(AudioContext)
  const content = `${arabic}\n\n${translate} (QS. ${nameSurah}: ${noAyat})`
  const playing = noSurah === surah && noAyat.toString() === ayat

  const playAudio = (surahId: string, verseId: number) => {
    const isSame = noSurah === surah && noAyat.toString() === ayat
    let surahIdTemp = surahId
    let verseIdTemp = verseId.toString()
    if (isSame) {
      surahIdTemp = ''
      verseIdTemp = ''
    }
    setSurah(surahIdTemp)
    setAyat(verseIdTemp)
    setOpen(isSame ? false : true)
  }
  useEffect(() => {
    if (playing && playingRef.current) {
      playingRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }
  }, [playing])

  return (
    <div
      ref={playing ? playingRef : null}
      className={`flex flex-col justify-between border-b ${show || playing ? 'bg-[#e8efe9]' : ''}`}
    >
      <div className="flex items-center">
        <MenuSheetAyat item={{ content, arabic, noSurah, noAyat, nameSurah, translate }} />
        <div className="ml-1">
          <Button variant="outline" size="icon" onClick={() => playAudio(noSurah, noAyat)}>
            {playing ? <VolumeX className="w-4 h-4 text-green-700" /> : <PlayIcon className="w-4 h-4 text-green-700" />}
          </Button>
        </div>
        <div
          onClick={() => setShow(!show)}
          className={`flex flex-col pr-4 py-5 border-gray-300 cursor-pointer relative w-full ${
            reverse ? 'items-start pl-4' : 'items-end'
          }`}
        >
          {!reverse ? (
            <p className="text-right font-arabic text-2xl text-[#2F6742]">
              {arabic}
              <span className="font-bold text-3xl pt-[4px] mr-2">
                ۝
                {noAyat.toLocaleString('ar-u-nu-arab', {
                  useGrouping: false,
                })}
              </span>
            </p>
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
            <p className="text-right font-arabic text-2xl mx-5 pb-4">
              {arabic}
              <span className="font-bold text-3xl pt-[4px] mr-2">
                ۝
                {noAyat.toLocaleString('ar-u-nu-arab', {
                  useGrouping: false,
                })}
              </span>
            </p>
          ) : (
            <p className="px-4 pb-4">{translate}</p>
          )}
        </>
      )}
    </div>
  )
}

export default Ayat
