import Link from 'next/link'
import { Rowdies } from 'next/font/google'
import { classNames } from '@/utils/class-names'

const rowdies = Rowdies({
  subsets: ['latin'],
  weight: '700',
})

export default function Header() {
  return (
    <header className="flex justify-center items-center py-4 px-2 sticky top-0 bg-green-linear">
      <Link href="/">
        <h1
          className={classNames(
            rowdies.className,
            'font-bold text-2xl text-white',
          )}
        >
          Ńgäâåjį.
        </h1>
      </Link>
    </header>
  )
}
