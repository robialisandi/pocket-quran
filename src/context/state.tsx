'use client'

import { AudioObject } from '@/@types/Audio'
import { BookmarkObject } from '@/@types/Bookmark'
import { ReadObject } from '@/@types/Read'
import LocalStorage from '@/lib/browser'
import { BOOKMARK_AYAT_KEY, READ_AYAT_KEY } from '@/lib/constants'
import React, { createContext, Dispatch, useContext, useEffect, useState } from 'react'

interface GlobalState {
  audioContext: {
    audio: AudioObject
    setAudio: Dispatch<React.SetStateAction<AudioObject>>
  }
  bookmarkContext: {
    bookmark: BookmarkObject[]
    setBookmark: Dispatch<React.SetStateAction<BookmarkObject[]>>
  }
  readContext: {
    read: ReadObject[]
    setRead: Dispatch<React.SetStateAction<ReadObject[]>>
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
  const [bookmark, setBookmark] = useState<BookmarkObject[]>([])
  const [read, setRead] = useState<ReadObject[]>([])

  useEffect(() => {
    const latestBookmark = LocalStorage.getItem(BOOKMARK_AYAT_KEY)
    if (latestBookmark) {
      setBookmark(JSON.parse(latestBookmark) || [])
    } else {
      setBookmark([])
    }

    const wasRead = LocalStorage.getItem(READ_AYAT_KEY)
    if (wasRead) {
      setRead(JSON.parse(wasRead))
    }
  }, [])

  const globalState = {
    audioContext: {
      audio,
      setAudio,
    },
    bookmarkContext: {
      bookmark,
      setBookmark,
    },
    readContext: {
      read,
      setRead,
    },
  }
  return <AppContext.Provider value={globalState}>{children}</AppContext.Provider>
}

export function useAppContext() {
  return useContext(AppContext)
}
