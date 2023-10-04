import { SurahInfoPage } from '@/data/surah-info'
import {
  ArrowLongLeftIcon,
  ArrowLongRightIcon,
} from '@heroicons/react/20/solid'
import Link from 'next/link'

export default function Pagination({
  surahInfo,
}: {
  surahInfo: SurahInfoPage
}) {
  let { prev, current, next } = surahInfo
  if (prev == null) {
    prev = {
      translation: 'Manusia',
      arabic: 'الناس',
      latin: 'An-Nas',
      ayah_count: 6,
      index: 114,
    }
  }
  if (next == null) {
    next = {
      translation: 'Pembukaan',
      arabic: 'الفاتحة',
      latin: 'Al-Fatihah',
      ayah_count: 7,
      index: 1,
    }
  }

  return (
    <div className="flex justify-between py-5 px-2 items-center mb-5">
      <Link href={`/surah/${prev?.index}`}>
        <div className="flex justify-center items-center gap-2">
          <ArrowLongLeftIcon className="w-5 h-5" />
          <span className="text-xs text-gray-500">{prev.index}</span>
          {prev?.latin}
        </div>
      </Link>
      <span className="text-xs text-gray-500">{current.index} / 114</span>
      <Link href={`/surah/${next?.index}`}>
        <div className="flex justify-center items-center gap-2">
          <span className="text-xs text-gray-500">{next.index}</span>
          {next?.latin}
          <ArrowLongRightIcon className="w-5 h-5" />
        </div>
      </Link>
    </div>
  )
}
