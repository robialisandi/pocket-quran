import IconBar from '@/components/IconBar'
import asmaulHusna from '@/data/asmaul-husna'

export default function AsmaulHusnaPage() {
  return (
    <div className="flex flex-col">
      <h1 className="flex py-2 font-bold px-4 text-[#2F6742] bg-[#c8e0d5]">
        <IconBar icon="7.asma-allah.svg" />
        Asmaul Husna
      </h1>
      {asmaulHusna.map((item) => (
        <div className="flex justify-between py-5 px-4" key={item.index}>
          <div className="flex items-center gap-5">
            <span>{item.index}</span>
            <div className="flex flex-col">
              <span className="font-bold">{item.latin}</span>
              <span>{item.translation_id}</span>
            </div>
          </div>
          <span className="font-arabic text-2xl text-[#2F6742]">
            {item.arabic}
          </span>
        </div>
      ))}
    </div>
  )
}
