import ayatKursi from '@/data/ayat-kursi'

export default function AyatKursiPage() {
  return (
    <div className="flex flex-col items-center px-4">
      <h1 className="flex p-4 font-bold text-2xl">Ayat Kursi</h1>
      <span className="text-right font-arabic text-2xl text-[#2F6742]">
        {ayatKursi.arabic}
      </span>
      <small className="text-sm text-foreground-secondary italic">
        {ayatKursi.latin}
      </small>
    </div>
  )
}
