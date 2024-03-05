'use client'

import { SurahInfoItem } from '@/data/surah-info'
import Link from 'next/link'
import FrameAyat from './FrameAyat'
import Lottie from 'lottie-react'
import audiowave from '@/components/gray-wave.json'
import { useAppContext } from '@/context/state'
import { FaBookmark } from 'react-icons/fa6'

export default function CardSurah({ surahInfoItem, isDev = false }: { surahInfoItem: SurahInfoItem; isDev?: boolean }) {
  let link = `/surah`
  if (isDev) link = `/surah-dev`
  const { surah } = useAppContext().audioContext.audio
  const { bookmark } = useAppContext().bookmarkContext
  const playing = surahInfoItem.index.toString() === surah
  const bookmarked = bookmark.some((item) => item.surat === surahInfoItem.index.toString())

  return (
    <Link
      href={`${link}/${surahInfoItem.index}`}
      className="flex flex-col justify-center gap-4 p-5 border md:rounded-xl bg-[#ffffffa3] backdrop-blur-sm shadow-[0_-5px_15px_2px_rgba(0,0,0,0.07) relative overflow-hidden"
    >
      {bookmarked && <FaBookmark className="absolute text-green-600 top-[-1px] right-5" />}
      <div className="flex justify-between items-center">
        <div className="flex items-start gap-4">
          <FrameAyat number={surahInfoItem.index} />
          <div className="flex flex-col">
            <span className="font-bold text-md">{surahInfoItem.latin}</span>
            <span className="text-xs text-gray-400">{surahInfoItem.translation}</span>
          </div>
        </div>
        {playing ? (
          <div className="max-w-[120px] absolute top-4 right-5">
            <Lottie animationData={audiowave} loop={true} />
          </div>
        ) : (
          <div className="flex flex-col items-end">
            <small className="text-xl text-[#2F6742] font-bold text-right">{surahInfoItem.arabic}</small>
            <small className="text-xs text-gray-400">{surahInfoItem.ayah_count} Ayat</small>
          </div>
        )}
      </div>
    </Link>
  )
}
