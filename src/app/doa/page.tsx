import IconBar from '@/components/IconBar'
import dailyDoa from '@/data/doa-harian'

export default function DoaPage() {
  return (
    <div className="flex flex-col">
      <h1 className="flex py-2 font-bold px-4 text-[#2F6742] bg-[#c8e0d5] mb-2">
        <IconBar icon="3.doa-doa.svg" />
        Doa-doa
      </h1>
      {dailyDoa.map((item, index) => (
        <div
          className="flex flex-col gap-4 py-5 px-4 rounded-2xl bg-white border mb-2 mx-2 md:mx-0"
          key={index}
        >
          <span className="font-bold text-lg">{item.title}</span>
          <span className="text-2xl font-arabic text-right text-[#2F6742]">
            {item.arabic}
          </span>
          <span className="text-sm italic">{item.latin}</span>
        </div>
      ))}
    </div>
  )
}

// e8efe9
