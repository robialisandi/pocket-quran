import IconBar from '@/components/IconBar'
import Link from 'next/link'
import { getCategory } from './categories'

export default async function Page() {
  const categories = await getCategory()

  return (
    <div className="flex flex-col">
      <h1 className="flex py-2 font-bold px-4 text-[#2F6742] bg-[#c8e0d5] mb-2">
        <IconBar icon="3.doa-doa.svg" />
        Doa-doa
      </h1>
      <div className="p-3 sm:p-0 mt-4">
        {categories.map((item, index) => (
          <Link
            href={item.url}
            className="flex items-center shadow-md shadow-[#4a575c1a] gap-4 py-5 px-4 rounded-xl mb-3 bg-[#ffffffa3] backdrop-blur-sm shadow-[0_-5px_15px_2px_rgba(0,0,0,0.07)"
            key={index}
          >
            <div className="bg-[#EFF7DE] rounded-full justify-center items-center font-bold flex h-10 w-10">
              {index + 1}
            </div>
            <div className="flex-1 flex justify-between items-center">
              <span className="text-lg text-[#2B3032]">{item.category}</span>
              <span className="text-[12px] text-gray-400">{item.total} Bacaan</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
