import Link from 'next/link'
import { Rowdies } from 'next/font/google'
import { cn } from '@/lib/utils'
import MaxWidthWrapper from './MaxWidthWrapper'

const rowdies = Rowdies({
  subsets: ['latin'],
  weight: '700',
})

export default function Header() {
  return (
    <nav className="sticky top-0 z-50">
      <MaxWidthWrapper>
        <div className="flex justify-center items-center py-4 px-2 bg-green-linear">
          <Link href="/">
            <h1
              className={cn(rowdies.className, 'font-bold text-2xl text-white')}
            >
              Ńgäâåjį.
            </h1>
          </Link>
        </div>
      </MaxWidthWrapper>
    </nav>
  )
}
