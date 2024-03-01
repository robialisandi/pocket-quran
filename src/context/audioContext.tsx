import { createContext } from 'react'

interface AudioContextType {
  surah: string
  setSurah: React.Dispatch<React.SetStateAction<string>>
  ayat: string
  setAyat: React.Dispatch<React.SetStateAction<string>>
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}
export const AudioContext = createContext<AudioContextType>({
  surah: '',
  setSurah: () => {},
  ayat: '',
  setAyat: () => {},
  open: false,
  setOpen: () => {},
})
