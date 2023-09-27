import tahlil from '@/data/tahlil'

export default function TahlilPage() {
  return (
    <div className="flex flex-col px-4">
      <h1 className="font-bold text-center text-2xl">Tahlil</h1>
      {tahlil.data.map((item, index) => (
        <div key={index} className="flex flex-col justify-center gap-4 py-10">
          <span className="font-bold font-arabic text-2xl">{item.title}</span>
          <small className="text-2xl text-foreground-secondary font-bold font-arabic text-right">
            {item.arabic}
          </small>
          <span>{item.translation}</span>
        </div>
      ))}
    </div>
  )
}
