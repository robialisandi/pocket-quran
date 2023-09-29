'use client'

import FrameAyat from '@/components/FrameAyat'
import useSurah from '@/hook/useSurah'

type Props = {
  params: { id: string }
}

export default function SurahDetailPage({ params }: Props) {
  const { id } = params
  const surah = useSurah(id)

  return (
    <>
      <div className="flex justify-between items-center py-2 px-4 bg-[#c8e0d5] mb-5">
        <h1 className="font-bold text-[#2F6742]">
          {surah.number}. {surah.name_latin}
        </h1>
        <h1 className="font-bold text-[10px] text-[#7b9a8e]">
          {surah.number_of_ayah} Ayat, {surah.translations?.id.name}
        </h1>
      </div>
      {surah.text &&
        Object.values(surah.text).map((ayat: any, index: number) => (
          <div className="flex flex-col items-end pb-5 px-4" key={index}>
            <span className="text-right font-arabic text-2xl text-[#2F6742]">
              {ayat}
            </span>
            <FrameAyat number={index + 1} />
          </div>
        ))}
    </>
  )
}
