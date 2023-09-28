import CardSurah from '@/components/CardSurah'
import MakkiyahMadaniyah from '@/data/makkiyah-madaniyah'
import surathInfo, { type SurahInfo } from '@/data/surah-info'

export default function JuzAmmaPage() {
  const SURAH_START = 78

  const makiyahMadaniyah = () => {
    let result: SurahInfo = {}
    for (const [_, surah] of Object.entries(surathInfo)) {
      if (surah.index >= SURAH_START) {
        const revelation = MakkiyahMadaniyah[surah.index]
        result[surah.index] = {
          ...surah,
          revelation: revelation ? revelation : 0,
        }
      }
    }
    return result
  }
  let originSurahInfo = makiyahMadaniyah()

  return (
    <div className="flex flex-col">
      <h1 className="flex p-4 font-bold text-2xl">Juz Amma</h1>
      {Object.values(originSurahInfo).map((item, index) => (
        <CardSurah key={index} surahInfoItem={item} />
      ))}
    </div>
  )
}
