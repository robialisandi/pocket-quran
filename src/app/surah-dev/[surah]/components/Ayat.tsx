'use client'

import { useState } from 'react'
import MenuSheetAyat from './MenuSheetAyat'

interface Props {
  arabic: string
  noAyat: number
  noSurah: string
  nameSurah: string
  translate: string
  reverse: boolean
}

const Ayat = ({
  arabic,
  noSurah,
  noAyat,
  nameSurah,
  translate,
  reverse,
}: Props) => {
  const [show, setShow] = useState<boolean>(false)
  const content = `${arabic}\n\n${translate} (QS. ${nameSurah}: ${noAyat})`

  return (
    <div
      className={`flex flex-col justify-between border-b ${
        show && 'bg-[#e8efe9]'
      }`}
    >
      <div className="flex items-center">
        <MenuSheetAyat
          item={{ content, arabic, noSurah, noAyat, nameSurah, translate }}
        />
        <div
          onClick={() => setShow(!show)}
          className={`flex flex-col pr-4 py-5 border-gray-300 cursor-pointer relative w-full ${
            reverse ? 'items-start pl-4' : 'items-end'
          }`}
        >
          {!reverse ? (
            <p className="text-right font-arabic text-2xl text-[#2F6742]">
              {arabic}
              <span className="font-bold text-3xl pt-[4px] mr-2">
                ۝
                {noAyat.toLocaleString('ar-u-nu-arab', {
                  useGrouping: false,
                })}
              </span>
            </p>
          ) : (
            <p className="text-[#2F6742]">
              {translate} <b>({noAyat})</b>
            </p>
          )}
        </div>
      </div>
      {show && (
        <>
          {reverse ? (
            <p className="text-right font-arabic text-2xl mx-5 pb-4">
              {arabic}
              <span className="font-bold text-3xl pt-[4px] mr-2">
                ۝
                {noAyat.toLocaleString('ar-u-nu-arab', {
                  useGrouping: false,
                })}
              </span>
            </p>
          ) : (
            <p className="px-4 pb-4">{translate}</p>
          )}
        </>
      )}
    </div>
  )
}

export default Ayat
