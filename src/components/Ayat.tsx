'use client'

import FrameAyat from '@/components/FrameAyat'
import { useRef, useState } from 'react'
import MenuAyat from './MenuAyat'
import { Rowdies } from 'next/font/google'
import { cn } from '@/lib/utils'

interface Props {
  arabic: string
  noAyat: number
  noSurah: string
  nameSurah: string
  translate: string
}

const rowdies = Rowdies({
  subsets: ['latin'],
  weight: '700',
})

const Ayat = ({ arabic, noSurah, noAyat, nameSurah, translate }: Props) => {
  const [show, setShow] = useState<boolean>(false)
  const content = `${arabic}\n\n${translate} (QS. ${noSurah}:${noAyat})`
  const cardRef = useRef<HTMLDivElement>(null)

  return (
    <div className="flex flex-col justify-between border-b">
      <div className="flex items-center">
        <MenuAyat
          content={content}
          hashtags="ngaaajiyuk"
          noSurah={noSurah}
          noAyat={noAyat.toString()}
          nameSurah={nameSurah}
          cardRef={cardRef}
        />
        <div
          onClick={() => setShow(!show)}
          className="flex flex-col items-end pr-4 py-5 border-gray-300 cursor-pointer relative w-full"
        >
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
      </div>
      {show ? <p className="px-4 pb-4">{translate}</p> : null}

      <div className="hidden rounded-xl bg-[#eef5ef] p-3" ref={cardRef}>
        <h1
          className={cn(
            rowdies.className,
            'font-bold text-2xl text-[#2F6742] text-center',
          )}
        >
          Ńgäâåjį.
        </h1>
        <p className="text-center text-[10px] mt-2 text-[#2F6742]">{`QS. ${nameSurah}, ayat ${noAyat}`}</p>
        <div className="flex flex-col items-end px-4 py-5 border-gray-300 w-full">
          <p className="text-right font-arabic text-2xl text-[#2F6742]">
            {arabic}
            <span className="text-3xl pt-[4px] mr-2">
              ۝
              {noAyat.toLocaleString('ar-u-nu-arab', {
                useGrouping: false,
              })}
            </span>
          </p>
        </div>
        <p className="bg-[#c8e0d5] p-5 rounded-3xl">{translate}</p>
        <p className="text-[10px] text-right text-[#c1ccc3]">{`https://ngaaaji.vercel.app/surah/${noSurah}/${noAyat}`}</p>
      </div>
    </div>
  )
}

export default Ayat
