import FrameAyat from '@/components/FrameAyat'

interface Props {
  arabic: string
  noAyat: number
}

const Ayat = async ({ arabic, noAyat }: Props) => {
  return (
    <div className="flex flex-col items-end px-4 border-b mb-7 pb-5 border-gray-300">
      <p className="text-right font-arabic text-2xl text-[#2F6742]">
        {arabic}
        {/* <FrameAyat number={noAyat} /> */}
        <span className=" font-bold text-3xl pt-[4px] mr-2">
          ۝
          {noAyat.toLocaleString('ar-u-nu-arab', {
            useGrouping: false,
          })}
        </span>
      </p>
    </div>
  )
}

export default Ayat
