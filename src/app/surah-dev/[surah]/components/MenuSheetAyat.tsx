import { ImageDown, Loader2, MoreVertical } from 'lucide-react'
import { ChevronDoubleRightIcon } from '@heroicons/react/20/solid'
import { useRef, useState } from 'react'
import html2canvas from 'html2canvas'
import Link from 'next/link'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import Poster from './Poster'
import { Button } from '@/components/ui/button'

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
  backgroundColor: null,
  removeContainer: false,
  width: 1080,
  height: 1920,
}

const MenuSheetAyat = ({ item }: Props) => {
  const [isLoading, setLoading] = useState(false)

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
      const asURL = result.toDataURL('image/png')
      const anchor = document.createElement('a')

      anchor.href = asURL
      anchor.download = `${item.noSurah} QS ${item.nameSurah}, ayat ${item.noAyat}.png`

      anchor.click()
      anchor.remove()
      setLoading(false)
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
          </SheetHeader>
          <div className="flex justify-start mt-10">
            <Link
              href={`/surah/${item.noSurah}/${item.noAyat}`}
              className="w-full px-2 py-1.5 flex items-center"
            >
              <ChevronDoubleRightIcon className="w-5 h-5 mr-1" />
              Tafsir
            </Link>
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
