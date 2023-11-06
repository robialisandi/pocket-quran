import Ayat from '@/components/Ayat'
import Pagination from '@/components/Pagination'
import { SurahInfoPage } from '@/data/surah-info'

interface Props {
  params: { surah: string }
}

export default async function SurahDetailPage({ params }: Props) {
  const { surah } = params
  const resData = await import(`../../../data/surah-data/${surah}.ts`)
  const resInfo = await import(`../../../data/surah-info/${surah}.ts`)
  const surahData = await resData.default[surah]
  const surahInfo: SurahInfoPage = await resInfo.default

  return (
    <>
      <div className="flex justify-between items-center py-2 px-4 bg-[#c8e0d5]">
        <h1 className="font-bold text-[#2F6742]">
          {surahInfo.current.index}. {surahInfo.current.latin}
        </h1>
        <h1 className="font-bold text-[10px] text-[#7b9a8e]">
          {surahInfo.current.ayah_count} Ayat, {surahInfo.current.translation}
        </h1>
      </div>
      <Pagination surahInfo={surahInfo} />
      {surahData.text &&
        Object.values(surahData.text).map((ayat: any, index: number) => (
          <Ayat
            arabic={ayat}
            translate={surahData.translations.id.text[index + 1]}
            noAyat={index + 1}
            noSurah={surah}
            nameSurah={surahData.name_latin}
            key={index}
          />
        ))}
      <Pagination surahInfo={surahInfo} />
    </>
  )
}
