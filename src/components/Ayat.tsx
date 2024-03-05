'use client'

import { useState } from 'react'
import { useAppContext } from '@/context/state'
import FrameAyat from './FrameAyat'
import MenuSheetAyat from './MenuSheetAyat'
import PlayButton from './PlayButton'
import BookmarkButton from './BookmarkButton'
import ReadButton from './ReadButton'

interface Props {
  arabic: string
  noAyat: number
  noSurah: string
  nameSurah: string
  translate: string
  reverse: boolean
  refCard: React.RefObject<HTMLDivElement>
}

const Ayat = ({ arabic, noSurah, noAyat, nameSurah, translate, reverse, refCard }: Props) => {
  const { audio } = useAppContext().audioContext
  const { bookmark } = useAppContext().bookmarkContext
  const { read } = useAppContext().readContext
  const [show, setShow] = useState<boolean>(false)
  const content = `${arabic}\n\n${translate} (QS. ${nameSurah}: ${noAyat})`
  const playing = noSurah === audio.surah && noAyat.toString() === audio.ayat
  const wasRead = read.some((item) => item.surat === noSurah && item.ayat === noAyat.toString())
  const isBookmarked = bookmark.some((item) => item.surat === noSurah && item.ayat === noAyat.toString())
  const arab = arabic.split(' ')

  return (
    <div
      ref={playing || isBookmarked ? refCard : null}
      className={`flex flex-col justify-between border-b ${show || playing || wasRead ? 'bg-[#e8efe9]' : ''}`}
    >
      <div className="flex justify-end">
        <div className="flex flex-col justify-end gap-4 p-2">
          <MenuSheetAyat item={{ content, arabic, noSurah, noAyat, nameSurah, translate }} />
          <div className="flex">
            <div className="ml-1">
              <PlayButton noSurah={noSurah} noAyat={noAyat} playingRef={refCard} />
            </div>
            <div className="ml-1">
              <BookmarkButton noSurah={noSurah} noAyat={noAyat} bookmarkRef={refCard} />
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
