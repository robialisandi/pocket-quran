import asmaulHusna from '@/data/asmaul-husna'

export default function AsmaulHusnaPage() {
  return (
    <div className="flex flex-col px-4">
      <h1 className="flex p-4 font-bold text-2xl">Asmaul Husna</h1>
      {asmaulHusna.map((item, index) => (
        <div className="flex justify-between py-5" key={item.index}>
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
