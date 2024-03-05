import { useAppContext } from '@/context/state'
import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const formatNumber = (numberText: string): string => {
  const numParam = parseInt(numberText, 10)
  if (numParam < 10) {
    return `00${numberText}`
  } else if (numParam < 100) {
    return `0${numberText}`
  } else {
    return `${numberText}`
  }
}
