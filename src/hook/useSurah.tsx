import { useCallback, useEffect, useState } from 'react'

export default function useSurah(surahId: string) {
  const [surah, setSurah] = useState<any>({})

  const getSurah = useCallback(async (surahId: string) => {
    const res = await fetch(`/api/surah/${surahId}`, {
      next: { revalidate: 10 },
    })
    const data = await res.json()
    setSurah(data)
  }, [])

  useEffect(() => {
    getSurah(surahId)
  }, [getSurah, surahId])

  return surah
}
