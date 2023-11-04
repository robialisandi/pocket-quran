import { cn } from '@/lib/utils'
import { ReactNode } from 'react'

const MaxWidthWrapper = ({
  className,
  children,
}: {
  className?: String
  children: ReactNode
}) => {
  return (
    <div
      className={cn('mx-auto w-full max-w-screen-sm px-0 md:px-20', className)}
    >
      {children}
    </div>
  )
}

export default MaxWidthWrapper
