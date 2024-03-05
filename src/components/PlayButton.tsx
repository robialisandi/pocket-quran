import { PlayIcon, VolumeX } from 'lucide-react'
import { Button } from './ui/button'
import { useAppContext } from '@/context/state'
import { useEffect } from 'react'

interface Props {
  noAyat: number
  noSurah: string
  playingRef: React.RefObject<HTMLDivElement>
}

const PlayButton = ({ noSurah, noAyat, playingRef }: Props) => {
  const { audio, setAudio } = useAppContext().audioContext
  const playing = noSurah === audio.surah && noAyat.toString() === audio.ayat

  const playAudio = () => {
    setAudio({
      surah: playing ? '' : noSurah,
      ayat: playing ? '' : noAyat.toString(),
      open: playing ? false : true,
    })
  }

  useEffect(() => {
    if (playing && playingRef.current) {
      playingRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }
  }, [playing, playingRef])

  return (
    <Button variant="outline" size="icon" className="h-8 w-8" onClick={playAudio}>
      {playing ? <VolumeX className="w-4 h-4 text-green-700" /> : <PlayIcon className="w-4 h-4 text-green-700" />}
    </Button>
  )
}
export default PlayButton
