'use client'
import { BookmarkIcon } from 'lucide-react'
import { Button } from './ui/button'
import { BookmarkObject } from '@/@types/Bookmark'
import { useAppContext } from '@/context/state'
import { SurahInfoPage } from '@/data/surah-info'
import { BOOKMARK_AYAT_KEY } from '@/lib/constants'
import LocalStorage from '@/lib/browser'
import { useToast } from './ui/use-toast'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './ui/tooltip'
import { useEffect } from 'react'

interface Props {
  noAyat: number
  noSurah: string
  bookmarkRef: React.RefObject<HTMLDivElement>
}
const BookmarkButton = ({ noSurah, noAyat, bookmarkRef }: Props) => {
  const { bookmark, setBookmark } = useAppContext().bookmarkContext
  const { toast } = useToast()

  const bookmarkAyat = () => {
    const surahInfo: SurahInfoPage = require(`../data/surah-info/${noSurah}.ts`).default

    const item: BookmarkObject = {
      surat: noSurah,
      ayat: noAyat.toString(),
      name: surahInfo.current.latin,
      arabic: surahInfo.current.arabic,
    }
    const existingIndex = bookmark.findIndex((value) => value.surat === item.surat)

    if (existingIndex !== -1) {
      const itSameAyat = bookmark[existingIndex].ayat === item.ayat

      itSameAyat ? bookmark.splice(existingIndex, 1) : (bookmark[existingIndex] = item)
      itSameAyat
        ? toast({
            variant: 'destructive',
            description: `Berhasil menghapus surat ${item.name} Ayat ${item.ayat} dari bookmark.`,
          })
        : toast({ description: `Berhasil menandai surat ${item.name} Ayat ${item.ayat}.` })
    } else {
      if (bookmark.length === 6) {
        toast({ variant: 'destructive', description: 'Gagal, bookmark sudah melebihi batas, maximal 6 ayat.' })
        return
      }
      bookmark.push(item)
      toast({ description: `Berhasil menandai surat ${item.name} Ayat ${item.ayat}.` })
    }

    setBookmark([...bookmark])
    LocalStorage.setItem(BOOKMARK_AYAT_KEY, JSON.stringify(bookmark))
  }
  const isBookmarked = bookmark.some((item) => item.surat === noSurah && item.ayat === noAyat.toString())

  useEffect(() => {
    if (isBookmarked && bookmarkRef.current) {
      bookmarkRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }
  }, [isBookmarked, bookmarkRef])

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant="outline"
            size="icon"
            className={`h-8 w-8 ${isBookmarked ? 'bg-[#3fbc87] hover:bg-[#2c855f]' : 'bg-white'}`}
            onClick={bookmarkAyat}
          >
            {isBookmarked ? (
              <BookmarkIcon className="w-4 h-4 text-white" />
            ) : (
              <BookmarkIcon className="w-4 h-4 text-green-700" />
            )}
          </Button>
        </TooltipTrigger>
        <TooltipContent>{isBookmarked ? <p>Remove Bookmark Ayat</p> : <p>Bookmark ayat</p>}</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}

export default BookmarkButton
