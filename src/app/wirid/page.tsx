import wirid from '@/data/wirid'

export default function WiridPage() {
  return (
    <div className="flex flex-col px-4">
      <h1 className="flex p-4 font-bold text-2xl">Wirid</h1>
      {wirid.data.map((item, index) => (
        <div className="flex justify-end items-end gap-5 py-10" key={index}>
          <span className="font-bold text-2xl">{item.id}x</span>
          <span className="font-arabic text-2xl font-bold text-right text-[#2F6742]">
            {item.arabic}
          </span>
        </div>
      ))}
    </div>
  )
}
