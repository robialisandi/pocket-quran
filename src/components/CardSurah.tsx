import { SurahInfoItem } from '@/data/surah-info'
import Link from 'next/link'
import FrameAyat from './FrameAyat'

export default function CardSurah({
  surahInfoItem,
  isDev = false,
}: {
  surahInfoItem: SurahInfoItem
  isDev?: boolean
}) {
  let link = `/surah`
  if (isDev) link = `/surah-dev`

  return (
    <Link
      href={`${link}/${surahInfoItem.index}`}
      className="flex flex-col justify-center gap-4 p-5 border md:rounded-xl bg-white"
    >
      <div className="flex justify-between items-center">
        <div className="flex items-start gap-4">
          <FrameAyat number={surahInfoItem.index} />
          <div className="flex flex-col">
            <span className="font-bold text-md">{surahInfoItem.latin}</span>
            <span className="text-xs text-gray-500">
              {surahInfoItem.translation}
            </span>
          </div>
        </div>
        <small className="text-2xl text-[#2F6742] font-arabic text-right">
          {surahInfoItem.arabic}
        </small>
      </div>
    </Link>
  )
}
