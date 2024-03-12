'use client'

import CardSurah from '@/components/CardSurah'
import IconBar from '@/components/IconBar'
import SearchInput from '@/components/SearchInput'
import SkeletonSurah from '@/components/SkeletonSurah'
import { useSurahListSearch } from '@/hook/useSurah'
import { EqualNotIcon } from 'lucide-react'

export default function SurahPage() {
  const [filterSurahInfo, searchText, handleSearch, isLoading, isEmpty] = useSurahListSearch()

  return (
    <div className="flex flex-col">
      <h1 className="flex items-center py-2 font-bold px-4 text-[#2F6742] bg-[#c8e0d5]">
        {' '}
        <IconBar icon="1.surah.svg" /> Daftar Surat{' '}
      </h1>
      <SearchInput onSearch={handleSearch} className="mx-3 md:mx-0 mt-3 mb-3 md:mt-0 md:rounded-none" />
      {isLoading ? (
        <SkeletonSurah count={10} />
      ) : isEmpty ? (
        <div className="flex flex-col items-center mt-15 px-10 md:px-0">
          <EqualNotIcon className="h-20 w-20 text-[#ccd6ce]" />
          <p className="text-center text-gray-400"> Tidak ada hasil yang ditemukan untuk &quot;{searchText}&quot;</p>
        </div>
      ) : (
        filterSurahInfo.map((item, index) => <CardSurah key={index} surahInfoItem={item} />)
      )}
    </div>
  )
}
