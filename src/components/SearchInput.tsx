'use client'

import { ChangeEvent } from 'react'
import { Input } from './ui/input'
import { SearchIcon } from 'lucide-react'
import { cn } from '@/lib/utils'

interface Props {
  onSearch: (query: string) => void
  className?: string
}

const SearchInput = ({ onSearch, className }: Props) => {
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value
    onSearch(query)
  }

  return (
    <div
      className={cn(
        'flex items-center rounded-xl border border-input bg-white pl-3 text-sm ring-offset-background focus-within:ring-1 focus-within:ring-ring focus-within:ring-offset-2',
        className,
      )}
    >
      <SearchIcon className="h-5 w-5" />
      <Input
        type="text"
        placeholder="Cari Surat"
        onChange={handleInputChange}
        className="w-full h-[50px] p-2 border-none rounded-xl placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50"
      />
    </div>
  )
}

export default SearchInput
