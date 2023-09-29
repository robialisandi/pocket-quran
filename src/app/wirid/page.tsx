import wirid from '@/data/wirid'

export default function WiridPage() {
  return (
    <div className="flex flex-col">
      <h1 className="flex py-2 font-bold px-4 text-[#2F6742] bg-[#c8e0d5]">
        Wirid
      </h1>
      {wirid.data.map((item, index) => (
        <div
          className="flex justify-end items-end gap-5 py-10 px-4"
          key={index}
        >
          <span className="font-bold text-2xl">{item.id}x</span>
          <span className="font-arabic text-2xl text-right text-[#2F6742]">
            {item.arabic}
          </span>
        </div>
      ))}
    </div>
  )
}
