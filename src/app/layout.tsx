import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import { classNames } from '@/utils/class-names'
import Footer from '@/components/Footer'

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
      <body
        className={classNames(
          inter.className,
          'relative container mx-auto max-w-[500px] min-h-screen flex flex-col justify-between',
        )}
      >
        <div className="flex flex-col">
          <Header />
          <main className="min-h-[70vh]">{children}</main>
        </div>
        <Footer />
      </body>
    </html>
  )
}
