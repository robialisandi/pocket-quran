'use client'

import { AudioObject } from '@/@types/Audio'
import { createContext, Dispatch, useContext, useState } from 'react'

interface GlobalState {
  audioContext: {
    audio: AudioObject
    setAudio: Dispatch<React.SetStateAction<AudioObject>>
  }
}

const AppContext = createContext<GlobalState>({} as GlobalState)

interface AppWrapperProps {
  children: React.ReactNode
}

export function AppWrapper({ children }: AppWrapperProps) {
  const [audio, setAudio] = useState<AudioObject>({
    surah: '',
    ayat: '',
    open: false,
  })

  const globalState = {
    audioContext: {
      audio,
      setAudio,
    },
  }
  return <AppContext.Provider value={globalState}>{children}</AppContext.Provider>
}

export function useAppContext() {
  return useContext(AppContext)
}
