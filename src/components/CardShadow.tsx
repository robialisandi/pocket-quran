import Link from 'next/link'
import Image from 'next/image'

interface Menu {
  name: string
  icon: string
  pathName: string
}

export default function CardShadow({ menu }: { menu: Menu }) {
  return (
    <Link
      href={menu.pathName}
      className="flex flex-col items-center justify-center p-2 sm:p-4 bg-white"
    >
      <div className="flex justify-end sm:w-24 sm:h-24 w-16 h-16 rounded-full bg-[#eef5ef] mb-2 flex-col items-center">
        <Image
          src={`/icons/${menu.icon}`}
          alt="Picture of the author"
          width={60}
          height={60}
        />
      </div>
      <div className="text-center text-xs sm:text-sm text-black">
        {menu.name}
      </div>
    </Link>
  )
}
