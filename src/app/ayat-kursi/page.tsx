import ayatKursi from '@/data/ayat-kursi'

export default function AyatKursiPage() {
  return (
    <div className="flex flex-col">
      <h1 className="flex py-2 font-bold px-4 text-[#2F6742] bg-[#c8e0d5]">
        Ayat Kursi
      </h1>
      <div className="flex flex-col p-4">
        <span className="text-right font-arabic text-2xl text-[#2F6742]">
          {ayatKursi.arabic}
        </span>
        <small className="text-sm text-foreground-secondary italic">
          {ayatKursi.latin}
        </small>
      </div>
    </div>
  )
}
