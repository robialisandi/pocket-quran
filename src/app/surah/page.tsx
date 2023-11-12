'use client'

import CardSurah from '@/components/CardSurah'
import IconBar from '@/components/IconBar'
import SearchInput from '@/components/SearchInput'
import SkeletonSurah from '@/components/SkeletonSurah'
import MakkiyahMadaniyah from '@/data/makkiyah-madaniyah'
import surathInfo, { type SurahInfo } from '@/data/surah-info'
import { EqualNotIcon, ListIcon } from 'lucide-react'
import { useEffect, useState } from 'react'

export default function SurahPage() {
  const [searchText, setSearchText] = useState<string>('')
  const [filterSurahInfo, setFilterSurahInfo] = useState<SurahInfo>({})

  const noSpecialChars = (str: string) => str.replace(/[^a-zA-Z0-9 ]/g, '')

  const makiyahMadaniyah = () => {
    let result: SurahInfo = {}
    for (const [_, surah] of Object.entries(surathInfo)) {
      const revelation = MakkiyahMadaniyah[surah.index]
      if (
        noSpecialChars(surah.latin.toLowerCase()).indexOf(
          noSpecialChars(searchText.toLowerCase()),
        ) >= 0 ||
        noSpecialChars(surah.translation.toLowerCase()).indexOf(
          noSpecialChars(searchText.toLowerCase()),
        ) >= 0
      ) {
        result[surah.index] = {
          ...surah,
          revelation: revelation ? revelation : 0,
        }
      }
    }
    return result
  }

  useEffect(() => {
    const surahInfo = makiyahMadaniyah()
    setFilterSurahInfo(surahInfo)
  }, [searchText])

  const handleSearch = (query: string) => {
    setSearchText(query)
  }

  const isLoading =
    Object.keys(filterSurahInfo).length === 0 && searchText.length === 0
  const isEmpty =
    Object.keys(filterSurahInfo).length === 0 && searchText.length !== 0

  return (
    <div className="flex flex-col">
      <h1 className="flex items-center py-2 font-bold px-4 text-[#2F6742] bg-[#c8e0d5]">
        <IconBar icon="1.surah.svg" />
        Daftar Surat
      </h1>
      <SearchInput
        onSearch={handleSearch}
        className="mx-3 md:mx-0 mt-3 mb-3 md:mt-0 md:rounded-none"
      />
      {isLoading ? (
        <SkeletonSurah count={10} />
      ) : isEmpty ? (
        <div className="flex flex-col items-center mt-15 px-10 md:px-0">
          <EqualNotIcon className="h-20 w-20 text-[#ccd6ce]" />
          <p className="text-center text-gray-400">
            Tidak ada hasil yang ditemukan untuk &quot;{searchText}&quot;
          </p>
        </div>
      ) : (
        Object.values(filterSurahInfo).map((item, index) => (
          <CardSurah key={index} surahInfoItem={item} />
        ))
      )}
    </div>
  )
}
