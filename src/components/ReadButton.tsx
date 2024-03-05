import { useAppContext } from '@/context/state'
import { Button } from './ui/button'
import { PlayIcon, VolumeX } from 'lucide-react'
import LocalStorage from '@/lib/browser'
import { READ_AYAT_KEY } from '@/lib/constants'

interface Props {
  noAyat: number
  noSurah: string
}

const ReadButton = ({ noSurah, noAyat }: Props) => {
  const { read, setRead } = useAppContext().readContext

  const setWasRead = () => {
    const existingIndex = read.findIndex((item) => item.surat === noSurah && item.ayat === noAyat.toString())

    if (existingIndex !== -1) {
      read.splice(existingIndex, 1)
    } else {
      read.push({ surat: noSurah, ayat: noAyat.toString() })
    }
    setRead([...read])
    LocalStorage.setItem(READ_AYAT_KEY, JSON.stringify(read))
  }

  const wasRead = read.some((item) => item.surat === noSurah && item.ayat === noAyat.toString())
  return (
    <Button variant="outline" size="icon" className="h-8 w-8" onClick={setWasRead}>
      {wasRead ? <VolumeX className="w-4 h-4 text-green-700" /> : <PlayIcon className="w-4 h-4 text-green-700" />}
    </Button>
  )
}

export default ReadButton
