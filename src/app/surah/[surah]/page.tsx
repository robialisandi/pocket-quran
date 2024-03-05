'use client'

import Ayat from '@/components/Ayat'
import Pagination from '@/components/Pagination'
import SwitchReverse from '@/components/SwitchReverse'
import { SurahInfoPage } from '@/data/surah-info'
import { NextPage } from 'next'
import { useRef, useState } from 'react'

interface Props {
  params: { surah: string }
  onlySurah?: boolean
}

const SurahDetailPage: NextPage<Props> = ({ params, onlySurah = false }: Props) => {
  const [reverse, setReverse] = useState(false)

  const refCard = useRef(null)
  const { surah } = params
  const surahData = require(`../../../data/surah-data/${surah}.ts`).default[surah]
  const surahInfo: SurahInfoPage = require(`../../../data/surah-info/${surah}.ts`).default

  const handleReverseChange = (newReverse: boolean) => setReverse(newReverse)

  return (
    <>
      <div className="wrapper">
        {!onlySurah && (
          <>
            <div className="flex justify-between items-center py-2 px-4 bg-[#c8e0d5]">
              <h1 className="font-bold text-[#2F6742]">
                {surahInfo.current.index}. {surahInfo.current.latin}
              </h1>
              <h1 className="font-bold text-[10px] text-[#7b9a8e]">
                {surahInfo.current.ayah_count} Ayat, {surahInfo.current.translation}
              </h1>
            </div>
            <SwitchReverse onReverseChange={handleReverseChange} />
            <Pagination surahInfo={surahInfo} />
          </>
        )}
        {surahData.text &&
          Object.values(surahData.text).map((ayat: any, index: number) => (
            <Ayat
              arabic={ayat}
              translate={surahData.translations.id.text[index + 1]}
              noAyat={index + 1}
              noSurah={surah}
              nameSurah={surahData.name_latin}
              reverse={reverse}
              key={index}
              refCard={refCard}
            />
          ))}
        {!onlySurah && <Pagination surahInfo={surahInfo} />}
      </div>
    </>
  )
}
export default SurahDetailPage
