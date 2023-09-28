import { SurahInfoItem } from '@/data/surah-info'
import Link from 'next/link'

export default function CardSurah({
  surahInfoItem,
}: {
  surahInfoItem: SurahInfoItem
}) {
  return (
    <Link href={`/surah/${surahInfoItem.index}`}>
      <div className="flex flex-col justify-center gap-4 p-5 border md:rounded-xl bg-white my-0.5">
        <div className="flex justify-between items-center">
          <div className="flex items-start gap-4">
            <div className="frame-ayah flex justify-center items-center mt-[5px]">
              <span className="font-bold text-sm pt-[4px] text-white">
                {surahInfoItem.index.toLocaleString('ar-u-nu-arab', {
                  useGrouping: false,
                })}
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-md">{surahInfoItem.latin}</span>
              <span className="text-xs text-gray-500">
                {surahInfoItem.translation}
              </span>
            </div>
          </div>
          <small className="text-2xl text-[#2F6742] font-bold font-arabic text-right">
            {surahInfoItem.arabic}
          </small>
        </div>
      </div>
    </Link>
  )
}
