import { ImageDown, Loader2, MoreVertical } from 'lucide-react'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from './ui/sheet'
import {
  TelegramIcon,
  TelegramShareButton,
  TwitterIcon,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from 'next-share'
import { ChevronDoubleRightIcon } from '@heroicons/react/20/solid'
import { useRef, useState } from 'react'
import { Button } from './ui/button'
import html2canvas from 'html2canvas'
import Poster from './Poster'
import Link from 'next/link'

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

const options = {
  allowTaint: true,
  useCORS: false,
  backgroundColor: '#000',
  removeContainer: false,
  width: 1080,
  height: 1920,
}

const MenuSheetAyat = ({ item }: Props) => {
  const [isLoading, setLoading] = useState(false)

  const URL = `https://ngaaaji.vercel.app/surah/${item.noSurah}/${item.noAyat}`

  const cardRef = useRef<HTMLDivElement | null>(null)

  const prepareURL = async (isSquare = false) => {
    setLoading(true)
    const cardElement = cardRef.current

    if (!cardElement) return

    try {
      const result = await html2canvas(cardElement, {
        ...options,
        height: isSquare ? 1080 : 1920,
        onclone(_, element) {
          const heading = element.querySelector('h1')
          const footers = element.getElementsByClassName('footer')

          if (heading) heading.style.marginTop = isSquare ? '40px' : '160px'
          if (footers)
            footers[0].classList.add(isSquare ? 'mb-[50px]' : 'mb-[150px]')

          element.style.display = 'block'
          element.style.height = isSquare ? '1080px' : '1920px'
        },
      })
      // document.body.appendChild(result)
      const asURL = result.toDataURL('image/jpeg')
      const anchor = document.createElement('a')

      anchor.href = asURL
      anchor.download = `${item.noSurah} QS ${item.nameSurah}, ayat ${item.noAyat}.jpeg`

      anchor.click()
      anchor.remove()
      setLoading(false)

      /* trigger instagram storie */
      // const openLink = document.createElement('a')
      // openLink.href = 'instagram://story-camera'
      // openLink.click()
      // openLink.remove()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <Sheet modal={false}>
        <SheetTrigger>
          <MoreVertical className="h-4 2-4" />
        </SheetTrigger>
        <SheetContent side="bottom" className="md:w-[540px] mx-auto">
          <SheetHeader>
            <SheetTitle>
              QS. {item.nameSurah}: {item.noAyat}
            </SheetTitle>
            <SheetDescription className="line-clamp-4">
              {item.translate}
            </SheetDescription>
          </SheetHeader>
          <div className="flex justify-between mt-10">
            <Link
              href={`/surah/${item.noSurah}/${item.noAyat}`}
              className="w-full px-2 py-1.5 flex items-center"
            >
              <ChevronDoubleRightIcon className="w-5 h-5 mr-1" />
              Tafsir
            </Link>
            <div className="flex gap-2 items-center">
              <span className="mr-2">Share:</span>
              <WhatsappShareButton url={URL} title={item.content}>
                <div className="flex justify-center items-center">
                  <WhatsappIcon size={38} round />
                </div>
              </WhatsappShareButton>
              <TwitterShareButton
                url={URL}
                title={item.content}
                hashtags={['ngajiyuk', 'ngaaaji']}
              >
                <div className="flex justify-center items-center">
                  <TwitterIcon size={38} round />
                </div>
              </TwitterShareButton>
              <TelegramShareButton url={URL} title={item.content}>
                <div className="flex justify-center items-center">
                  <TelegramIcon size={38} round />
                </div>
              </TelegramShareButton>
            </div>
          </div>
          <div className="flex gap-3">
            <Button
              onClick={() => prepareURL()}
              className="w-full mt-10"
              disabled={isLoading}
            >
              {isLoading ? (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              ) : (
                <ImageDown className="mr-2 h-4 w-4" />
              )}
              Portrait Poster
            </Button>
            <Button
              onClick={() => prepareURL(true)}
              className="w-full mt-10"
              disabled={isLoading}
            >
              {isLoading ? (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              ) : (
                <ImageDown className="mr-2 h-4 w-4" />
              )}
              Square Poster
            </Button>
          </div>
          <Poster item={item} ref={cardRef} />
        </SheetContent>
      </Sheet>
    </>
  )
}

export default MenuSheetAyat
