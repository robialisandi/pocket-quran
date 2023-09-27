import ayatKursi from '@/data/ayat-kursi'

export default function AyatKursiPage() {
  return (
    <div className="flex flex-col items-center px-4">
      <h1 className="font-bold text-2xl">Ayat Kursi</h1>
      <span className="text-right font-bold font-arabic text-2xl">
        {ayatKursi.arabic}
      </span>
      <small className="text-sm text-foreground-secondary italic">
        {ayatKursi.latin}
      </small>
    </div>
  )
}
