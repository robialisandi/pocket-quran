import FrameAyat from '@/components/FrameAyat'

interface Props {
  arabic: string
  noAyat: number
}

const Ayat = async ({ arabic, noAyat }: Props) => {
  return (
    <div className="flex flex-col items-end pb-5 px-4">
      <span className="text-right font-arabic text-2xl text-[#2F6742]">
        {arabic}
      </span>
      <FrameAyat number={noAyat} />
    </div>
  )
}

export default Ayat
