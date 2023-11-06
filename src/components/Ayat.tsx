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

  const randomIntFromInterval = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  const imgUrl = `/poster/poster${randomIntFromInterval(1, 25)}.jpg`

  const styling = {
    backgroundImage: `url('${imgUrl}')`,
    width: '100%',
    backgroundSize: 'cover',
  }

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
      <div className="hidden" ref={cardRef} style={styling}>
        <div className="p-6 flex justify-between h-[890px] flex-col shadow-[inset_0px_0px_150px_300px_rgb(0,0,0,0.38)]">
          <h1
            className={cn(
              rowdies.className,
              'font-bold text-base text-white text-center flex-1 mt-12',
            )}
          >
            Ńgäâåjį<span className="text-yellow-500">.</span>
          </h1>
          <div className="px-8">
            <div className="mb-24">
              <div className="flex flex-col items-end px-4 py-5 border-gray-300 w-full">
                <p className="font-arabic text-md text-center text-white">
                  {arabic}
                  <span className="text-3xl pt-[4px] mr-2">
                    ۝
                    {noAyat.toLocaleString('ar-u-nu-arab', {
                      useGrouping: false,
                    })}
                  </span>
                </p>
              </div>
              <p className="text-white text-center rounded-3xl">{translate}</p>
              <p className="text-center text-[10px] mt-2 text-white">{`(QS. ${nameSurah}: ${noAyat})`}</p>
            </div>

            <div className="flex justify-center mb-8 items-center">
              <span className="text-2xl mr-3 rotate-[292deg]">🍉</span>
              <div>
                <p className="text-[10px] text-white">
                  We Stand With Palestine 🤍🖤💚❤️
                </p>
                <p className="text-[8px] text-[#c1ccc3]">{`https://ngaaaji.vercel.app/surah/${noSurah}/${noAyat}`}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Ayat
