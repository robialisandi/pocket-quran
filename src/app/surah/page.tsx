import CardSurah from '@/components/CardSurah'
import MakkiyahMadaniyah from '@/data/makkiyah-madaniyah'
import surathInfo, { type SurahInfo } from '@/data/surah-info'

export default function SurahPage() {
  const makiyahMadaniyah = () => {
    let result: SurahInfo = {}
    for (const [_, surah] of Object.entries(surathInfo)) {
      const revelation = MakkiyahMadaniyah[surah.index]
      result[surah.index] = {
        ...surah,
        revelation: revelation ? revelation : 0,
      }
    }
    return result
  }
  let originSurahInfo = makiyahMadaniyah()

  return (
    <div className="flex flex-col">
      <h1 className="flex py-2 font-bold px-4 text-[#2F6742] bg-[#c8e0d5]">
        Surat
      </h1>
      {Object.values(originSurahInfo).map((item, index) => (
        <CardSurah key={index} surahInfoItem={item} />
      ))}
    </div>
  )
}
