import { Metadata, ResolvingMetadata } from 'next'

interface Props {
  params: { surah: string; ayah: string }
}

export async function generateMetadata({ params }: Props, parent: ResolvingMetadata): Promise<Metadata> {
  const { surah, ayah } = params
  const resData = await import(`../../../../data/surah-data/${surah}.ts`)
  const surahData = await resData.default[surah]

  const previousImage = (await parent).openGraph?.images || []

  return {
    title: `Surat ${surahData.name_latin}`,
    description: `Ngaaaji - surah ${surahData.name_latin}, ayat ${ayah}`,
    openGraph: {
      images: ['/ngaaaji.png', ...previousImage],
    },
  }
}

export default async function Page({ params }: Props) {
  const { surah, ayah } = params
  const resData = await import(`../../../../data/surah-data/${surah}.ts`)
  const surahData = await resData.default[surah]

  return (
    <>
      <div className="flex justify-between items-center py-2 px-4 bg-[#c8e0d5]">
        <h1 className="font-bold text-[#2F6742]">
          {surahData.number}. {surahData.name_latin}, ayat {ayah}
        </h1>
        <h1 className="font-bold text-[10px] text-[#7b9a8e]">
          {surahData.number_of_ayah} Ayat, {surahData.translations.id.name}
        </h1>
      </div>

      <div className="flex flex-col items-end px-4 py-5 border-gray-300">
        <p className="text-right font-arabic text-2xl text-[#2F6742]">
          {surahData.text[ayah]}
          <span className=" font-bold text-3xl pt-[4px] mr-2">
            ۝
            {parseInt(ayah).toLocaleString('ar-u-nu-arab', {
              useGrouping: false,
            })}
          </span>
        </p>
        <p className="pt-4">{surahData.translations.id.text[ayah]}</p>
      </div>

      <div className="bg-[#c8e0d5] p-5 rounded-none sm:rounded-3xl">
        <div className="flex justify-between mb-2">
          <p className="font-bold">Tafsir:</p>
          <p className="text-xs text-[#2F6742]">{surahData.tafsir.id.kemenag.name}</p>
        </div>
        {surahData.tafsir.id.kemenag.text[ayah]}
        <p className="mt-5 text-xs text-[#2F6742]">Source: {surahData.tafsir.id.kemenag.source}</p>
      </div>
      <div className="flex-1"></div>
    </>
  )
}
