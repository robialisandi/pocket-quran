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

interface Props {
  content: string
  hashtags: string
  noSurah: string
  noAyat: string
}

const MenuAyat = ({ content, hashtags, noSurah, noAyat }: Props) => {
  const URL = `ngaaaji.vercel.app/surah/${noSurah}/${noAyat}`

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
                Tafsir
              </Link>
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem>
              <WhatsappShareButton url={'ngaaaji.vercel.app'} title={content}>
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
