import dailyDoa from '@/data/doa-harian'

export default function DoaPage() {
  return (
    <div className="flex flex-col px-4">
      <h1 className="flex p-4 font-bold text-2xl">Doa-doa</h1>
      {dailyDoa.map((item, index) => (
        <div className="flex flex-col gap-4 py-10" key={index}>
          <span className="font-bold text-2xl">{item.title}</span>
          <span className="text-2xl text-foreground-secondary font-bold font-arabic text-right text-[#2F6742]">
            {item.arabic}
          </span>
          <span className="text-sm text-foreground-secondary italic">
            {item.latin}
          </span>
        </div>
      ))}
    </div>
  )
}
