import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { cn } from '@/lib/utils'
import MaxWidthWrapper from '@/components/MaxWidthWrapper'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Ńgäâåjį | Quran Online',
  description: 'Baca Al-Qur`an dari browser | Ngaaaji',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={cn(inter.className, 'min-h-screen')}>
        <Header />
        <MaxWidthWrapper className="flex flex-col min-h-screen justify-between">
          {children}
          <Footer />
        </MaxWidthWrapper>
      </body>
    </html>
  )
}
