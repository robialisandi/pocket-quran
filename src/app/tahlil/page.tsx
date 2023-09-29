import tahlil from '@/data/tahlil'

export default function TahlilPage() {
  return (
    <div className="flex flex-col">
      <h1 className="flex py-2 font-bold px-4 text-[#2F6742] bg-[#c8e0d5]">
        Tahlil
      </h1>
      <div className="px-4">
        {tahlil.data.map((item, index) => (
          <div key={index} className="flex flex-col justify-center gap-4 py-10">
            <span className="font-bold font-arabic text-2xl">{item.title}</span>
            <small className="text-2xl font-arabic text-right text-[#2F6742]">
              {item.arabic}
            </small>
            <span>{item.translation}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
