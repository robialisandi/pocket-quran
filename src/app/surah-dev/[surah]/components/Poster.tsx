import { cn } from '@/lib/utils'
import { Rowdies } from 'next/font/google'
import React, { forwardRef, useEffect } from 'react'

const rowdies = Rowdies({
  subsets: ['latin'],
  weight: '700',
})

interface Props {
  item: {
    content: string
    arabic: string
    noSurah: string
    noAyat: number
    nameSurah: string
    translate: string
  }
}

const Poster = forwardRef(({ item }: Props, ref: React.ForwardedRef<HTMLDivElement | null>) => {
  const randomIntFromInterval = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  return (
    <div className="hidden relative bg-cover bg-no-repeat bg-center w-[1080px] h-[1920px] overflow-hidden" ref={ref}>
      <div className="p-6 flex justify-between h-full flex-col relative">
        <h1
          className={cn(
            rowdies.className,
            'font-bold text-base text-white text-center flex justify-center w-full left-0 top-7 mt-40 absolute z-10 text-[35px]',
          )}
        >
          Ńgäâåjį<span className="text-yellow-500">.</span>
        </h1>
        <div className="px-20 flex flex-col absolute justify-center w-full left-0 bottom-6 z-10">
          <div className="mb-28">
            <div className="flex flex-col items-end px-4 py-5 border-gray-300 w-full">
              <p
                className="font-arabic text-md text-center text-white text-[40px]"
                style={{ textShadow: '1px 0 0px #FC0' }}
              >
                {item.arabic}
                <span className="text-3xl pt-[4px] mr-2">
                  ۝
                  {item.noAyat.toLocaleString('ar-u-nu-arab', {
                    useGrouping: false,
                  })}
                </span>
              </p>
            </div>
            <p className="text-white text-center rounded-3xl text-[35px]">{item.translate}</p>
            <p className="text-center mt-2 text-white text-[25px]">{`(QS. ${item.nameSurah}: ${item.noAyat})`}</p>
          </div>

          <div className="footer flex justify-center mb-[150px] items-center">
            <span className="text-[45px] mr-5 rotate-[292deg]">🍉</span>
            <div>
              <p className="text-[25px] text-white">We Stand With Palestine ❤️🖤🤍💚</p>
              <p className="text-[20px] text-[#c1ccc3]">{`https://ngaaaji.vercel.app/surah/${item.noSurah}/${item.noAyat}`}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
})

Poster.displayName = 'Poster'

export default Poster
