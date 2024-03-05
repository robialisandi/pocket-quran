'use client'

import { BookmarkObject } from '@/@types/Bookmark'
import { useAppContext } from '@/context/state'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import SkeletonBookmark from './SkeletonBookmark'
import { FaBookmark } from 'react-icons/fa6'

const WidgetBookmark = () => {
  const { bookmark } = useAppContext().bookmarkContext
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 100)
  }, [])

  return (
    <div className="flex flex-col pt-5 pb-6 px-3 sm:px-0">
      <div className="pb-4 z-10">
        <div className="flex items-center">
          <FaBookmark className="mr-2 h-[14px] text-[#3ca980]" />
          <h1 className="text-sm text-gray-600 font-semibold">Ayat yang ditandai</h1>
        </div>
      </div>
      <div className="rounded-lg p-2 bg-[#ffffff54] backdrop-blur-sm shadow-[0_-5px_15px_2px_rgba(0,0,0,0.07)">
        <div className="border-dashed border-2 rounded-lg w-full h-full flex flex-col justify-center items-center p-[2px]">
          {loading ? (
            <SkeletonBookmark count={2} />
          ) : bookmark.length ? (
            <div className="grid grid-cols-2 gap-[6px] w-full">
              {bookmark.map((item: BookmarkObject, key: number) => (
                <Link
                  key={key}
                  href={`/surah/${item.surat}`}
                  className="flex flex-row justify-between rounded-lg items-center p-2 sm:p-4 bg-[#ffffffa3] backdrop-blur-sm shadow-[0_-5px_15px_2px_rgba(0,0,0,0.07)"
                >
                  <div className="text-center text-[10px] sm:text-xs text-[#2F6742] font-arabic">{item.arabic}</div>
                  <div className="text-center text-xs sm:text-sm text-gray-700 font-bold">{item.name}</div>
                  <div className="text-center text-[10px] sm:text-xs text-gray-400">ayat {item.ayat}</div>
                </Link>
              ))}
            </div>
          ) : (
            <span className="text-xs text-[#0000004d] py-3">Belum ada ayat yang ditandai.</span>
          )}
        </div>
      </div>
    </div>
  )
}

export default WidgetBookmark
