'use client'

import Pagination from '@/components/Pagination'
import SwitchReverse from '@/components/SwitchReverse'
import { SurahInfoPage } from '@/data/surah-info'
import { useState } from 'react'
import Ayat from './components/Ayat'

interface Props {
  params: { surah: string }
  onlySurah: boolean
}

export default function SurahDetailPage({ params, onlySurah = false }: Props) {
  const [reverse, setReverse] = useState(false)

  const { surah } = params
  const surahData = require(`../../../data/surah-data/${surah}.ts`).default[
    surah
  ]
  const surahInfo: SurahInfoPage = require(
    `../../../data/surah-info/${surah}.ts`,
  ).default

  const handleReverseChange = (newReverse: boolean) => setReverse(newReverse)

  return (
    <>
      {!onlySurah && (
        <>
          <div className="flex justify-between items-center py-2 px-4 bg-[#c8e0d5]">
            <h1 className="font-bold text-[#2F6742]">
              {surahInfo.current.index}. {surahInfo.current.latin}
            </h1>
            <h1 className="font-bold text-[10px] text-[#7b9a8e]">
              {surahInfo.current.ayah_count} Ayat,{' '}
              {surahInfo.current.translation}
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
          />
        ))}
      {!onlySurah && <Pagination surahInfo={surahInfo} />}
    </>
  )
}
