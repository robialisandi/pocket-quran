import Ayat from '@/components/Ayat'

interface Props {
  params: { id: string }
}

export default async function SurahDetailPage({ params }: Props) {
  const { id } = params
  const res = await import(`../../../data/surah-data/${id}.ts`)
  const surah = await res.default[id]

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
          <Ayat arabic={ayat} noAyat={index + 1} key={index} />
        ))}
    </>
  )
}
