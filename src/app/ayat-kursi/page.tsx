import IconBar from '@/components/IconBar'
import ayatKursi from '@/data/ayat-kursi'

export default function AyatKursiPage() {
  return (
    <div className="flex flex-col gap-3">
      <h1 className="flex py-2 font-bold px-4 text-[#2F6742] bg-[#c8e0d5]">
        <IconBar icon="6.ayat-kursi.svg" />
        Ayat Kursi
      </h1>
      <div className="flex flex-col p-4 bg-[#e8efe9] gap-5">
        <span className="text-right font-arabic text-2xl text-[#2F6742]">{ayatKursi.arabic}</span>
        <small className="text-sm text-foreground-secondary italic">{ayatKursi.latin}</small>
      </div>
    </div>
  )
}
