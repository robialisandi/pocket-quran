import Link from 'next/link'
import Image from 'next/image'

interface Menu {
  name: string
  icon: string
  pathName: string
  isActive: boolean
}

export default function CardShadow({ menu }: { menu: Menu }) {
  return (
    <Link
      href={menu.pathName}
      className="flex flex-col items-center justify-center p-2 sm:p-4 bg-white"
      style={{ pointerEvents: menu.isActive ? 'auto' : 'none' }}
    >
      <div className="flex justify-center sm:w-24 sm:h-24 w-20 h-20 rounded-full bg-[#eef5ef] mb-2 flex-col items-center">
        {menu.isActive && (
          <Image
            src={`/icons/${menu.icon}`}
            alt="Picture of the author"
            width={42}
            height={42}
          />
        )}
      </div>
      <div className="text-center text-xs sm:text-sm text-[#2F6742] font-bold">
        {menu.name}
      </div>
    </Link>
  )
}
