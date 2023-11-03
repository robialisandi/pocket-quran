'use client'

import FrameAyat from '@/components/FrameAyat'
import { useState } from 'react'

interface Props {
  arabic: string
  noAyat: number
  translate: string
}

const Ayat = ({ arabic, noAyat, translate }: Props) => {
  const [show, setShow] = useState<boolean>(false)
  return (
    <div
      onClick={() => setShow(!show)}
      className="flex flex-col items-end px-4 border-b py-5 border-gray-300 cursor-pointer"
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
      {show ? <p className="pt-4">{translate}</p> : null}
    </div>
  )
}

export default Ayat
