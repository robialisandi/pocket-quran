import { SurahInfoItem } from '@/data/surah-info'

export default function CardSurah({
  surahInfoItem,
}: {
  surahInfoItem: SurahInfoItem
}) {
  return (
    <div className="flex flex-col justify-center gap-4 py-5">
      <div className="flex justify-between">
        <div className="flex items-start gap-4">
          <div className="bg-black text-white rounded-full h-5 w-5 flex justify-center items-center mt-[13px]">
            <span className="font-bold text-xs pt-[4px]">
              {surahInfoItem.index.toLocaleString('ar-u-nu-arab', {
                useGrouping: false,
              })}
            </span>
          </div>
          <div className="flex flex-col">
            <span className="font-bold font-arabic">{surahInfoItem.latin}</span>
            <span>{surahInfoItem.translation}</span>
          </div>
        </div>
        <small className="text-2xl text-foreground-secondary font-bold font-arabic text-right">
          {surahInfoItem.arabic}
        </small>
      </div>
    </div>
  )
}
