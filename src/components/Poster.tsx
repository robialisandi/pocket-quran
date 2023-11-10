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

const Poster = forwardRef(
  ({ item }: Props, ref: React.ForwardedRef<HTMLDivElement | null>) => {
    const randomIntFromInterval = (min: number, max: number) => {
      return Math.floor(Math.random() * (max - min + 1) + min)
    }

    useEffect(() => {
      const randomImageNumber = randomIntFromInterval(1, 50)
      if (typeof ref !== 'function' && ref && ref.current) {
        ref.current.style.backgroundImage = `url(/poster/poster${randomImageNumber}.jpg)`
      }
    }, [ref])

    return (
      <div
        className="hidden relative bg-cover w-[1080px] h-[1920px] overflow-hidden"
        ref={ref}
      >
        <div className="p-6 flex justify-between h-[1920px] flex-col relative">
          <h1
            className={cn(
              rowdies.className,
              'font-bold text-base text-white text-center flex justify-center w-full left-0 top-7 mt-36 absolute z-10 text-[30px]',
            )}
          >
            Ńgäâåjį<span className="text-yellow-500">.</span>
          </h1>
          <div className="px-20 flex flex-col absolute justify-center w-full left-0 bottom-6 z-10">
            <div className="mb-24">
              <div className="flex flex-col items-end px-4 py-5 border-gray-300 w-full">
                <p className="font-arabic text-md text-center text-white text-[30px]">
                  {item.arabic}
                  <span className="text-3xl pt-[4px] mr-2">
                    ۝
                    {item.noAyat.toLocaleString('ar-u-nu-arab', {
                      useGrouping: false,
                    })}
                  </span>
                </p>
              </div>
              <p className="text-white text-center rounded-3xl text-[30px]">
                {item.translate}
              </p>
              <p className="text-center mt-2 text-white text-[25px]">{`(QS. ${item.nameSurah}: ${item.noAyat})`}</p>
            </div>

            <div className="flex justify-center mb-32 items-center">
              <span className="text-5xl mr-5 rotate-[292deg]">🍉</span>
              <div>
                <p className="text-[20px] text-white">
                  We Stand With Palestine 🤍🖤💚❤️
                </p>
                <p className="text-[18px] text-[#c1ccc3]">{`https://ngaaaji.vercel.app/surah/${item.noSurah}/${item.noAyat}`}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-black opacity-[0.35] absolute top-0 left-0 h-full w-full"></div>
      </div>
    )
  },
)

Poster.displayName = 'Poster'

export default Poster
