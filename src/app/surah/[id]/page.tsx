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
    <div className="px-4">
      <h1 className="flex p-4 font-bold text-2xl">{surah.name_latin}</h1>
      {surah.text &&
        Object.values(surah.text).map((ayat: any, index: number) => (
          <div className="flex flex-col items-end py-5" key={index}>
            <span className="text-right font-arabic text-2xl text-[#2F6742]">
              {ayat}
            </span>
            <FrameAyat number={index + 1} />
          </div>
        ))}
    </div>
  )
}
