'use client'

import FrameAyat from '@/components/FrameAyat'
import { useState } from 'react'
import MenuAyat from './MenuAyat'

interface Props {
  arabic: string
  noAyat: number
  noSurah: string
  translate: string
}

const Ayat = ({ arabic, noSurah, noAyat, translate }: Props) => {
  const [show, setShow] = useState<boolean>(false)
  const content = `${arabic}\n\n${translate} (QS. ${noSurah}:${noAyat})`

  return (
    <div className="flex flex-col justify-between border-b">
      <div className="flex items-center">
        <MenuAyat
          content={content}
          hashtags="ngaaajiyuk"
          noSurah={noSurah}
          noAyat={noAyat.toString()}
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
    </div>
  )
}

export default Ayat
