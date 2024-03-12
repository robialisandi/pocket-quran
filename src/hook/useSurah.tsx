'use client'

import { useEffect, useState } from 'react'
import surathInfo, { SurahInfoItem, type SurahInfo } from '@/data/surah-info'
import MakkiyahMadaniyah from '@/data/makkiyah-madaniyah'

export function useSurahListSearch(): [SurahInfoItem[], string, (query: string) => void, boolean, boolean] {
  const [searchText, setSearchText] = useState<string>('')
  const [filterSurahInfo, setFilterSurahInfo] = useState<SurahInfo>({})

  useEffect(() => {
    const normalizeString = (str: string) => str.replace(/[^a-zA-Z0-9 ]/g, '').toLowerCase()

    const filterSurah = () => {
      let result: SurahInfo = {}
      for (const [_, surah] of Object.entries(surathInfo)) {
        const revelation = MakkiyahMadaniyah[surah.index]
        const latinName = normalizeString(surah.latin)
        const translation = normalizeString(surah.translation)

        const queryNormalize = normalizeString(searchText)
        if (latinName.includes(queryNormalize) || translation.includes(queryNormalize)) {
          result[surah.index] = {
            ...surah,
            revelation: revelation ? revelation : 0,
          }
        }
      }
      return result
    }

    setFilterSurahInfo(filterSurah())
  }, [searchText])

  const handleSearch = (query: string) => {
    setSearchText(query)
  }

  const isLoading = Object.keys(filterSurahInfo).length === 0 && searchText.length === 0
  const isEmpty = Object.keys(filterSurahInfo).length === 0 && searchText.length !== 0

  return [Object.values(filterSurahInfo), searchText, handleSearch, isLoading, isEmpty]
}
