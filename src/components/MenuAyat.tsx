import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from './ui/dropdown-menu'
import {
  TwitterShareButton,
  WhatsappIcon,
  TwitterIcon,
  WhatsappShareButton,
  TelegramShareButton,
  TelegramIcon,
} from 'next-share'
import { Button } from './ui/button'
import Link from 'next/link'
import { MoreVertical } from 'lucide-react'
import { RefObject } from 'react'
import html2canvas from 'html2canvas'

interface Props {
  content: string
  hashtags: string
  noSurah: string
  noAyat: string
  nameSurah: string
  cardRef: RefObject<HTMLElement>
}

const options = {
  allowTaint: true,
  useCORS: true,
  backgroundColor: '#eef5ef',
  removeContainer: true,
}

const MenuAyat = ({
  content,
  hashtags,
  noSurah,
  noAyat,
  nameSurah,
  cardRef,
}: Props) => {
  const URL = `https://ngaaaji.vercel.app/surah/${noSurah}/${noAyat}`

  const prepareURL = async () => {
    const cardElement = cardRef.current

    if (!cardElement) return

    try {
      const result = await html2canvas(cardElement, {
        ...options,
        onclone(_, element) {
          element.style.display = 'block'
        },
      })
      const asURL = result.toDataURL('image/png')
      const anchor = document.createElement('a')

      anchor.href = asURL
      anchor.download = `${noSurah} QS ${nameSurah}, ayat ${noAyat}.png`

      anchor.click()
      anchor.remove()

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
    <div className="py-5">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="py-0 px-2 h-4">
            <MoreVertical className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuGroup>
            <DropdownMenuItem className="p-0">
              <Link
                href={`/surah/${noSurah}/${noAyat}`}
                className="w-full px-2 py-1.5"
              >
                Lihat Tafsir
              </Link>
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem>
              <Link href="" onClick={prepareURL}>
                Generate Poster
              </Link>
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem>
              <WhatsappShareButton url={URL} title={content}>
                <div className="flex justify-center items-center">
                  <WhatsappIcon className="h-4 w-4 mr-2" />
                  Share Whatsapp
                </div>
              </WhatsappShareButton>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <TwitterShareButton
                url={URL}
                title={content}
                hashtags={[hashtags]}
              >
                <div className="flex justify-center items-center">
                  <TwitterIcon className="h-4 w-4 mr-2" />
                  Share Twitter
                </div>
              </TwitterShareButton>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <TelegramShareButton url={URL} title={content}>
                <div className="flex justify-center items-center">
                  <TelegramIcon className="h-4 w-4 mr-2" />
                  Share Telegram
                </div>
              </TelegramShareButton>
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}

export default MenuAyat
