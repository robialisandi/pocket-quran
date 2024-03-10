import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { cn } from '@/lib/utils'
import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import SurahAudioPlayer from '@/components/SurahAudioPlayer'
import { AppWrapper } from '@/context/state'
import { Toaster } from '@/components/ui/toaster'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Ńgäâåjį | Quran Online',
    template: '%s | Ngaaaji',
  },
  description: 'Baca Al-Qur`an dari browser | Ngaaaji',
  generator: 'Next.js',
  manifest: '/manifest.json',
  keywords: ['ngaji', 'Al-Quran', 'quran', 'pwa', 'ngaaaji'],
  authors: [{ name: 'Robi Alisandi' }],
  viewport: 'minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover',
  icons: [
    { rel: 'apple-touch-icon', url: 'icons/icon-128x128.png' },
    { rel: 'icon', url: 'icons/icon-128x128.png' },
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={cn(inter.className, 'min-h-screen')}>
        <Header />
        <AppWrapper>
          <MaxWidthWrapper className="flex flex-col min-h-screen justify-between">
            {children}
            <Footer />
          </MaxWidthWrapper>
          <SurahAudioPlayer />
        </AppWrapper>
        <Toaster />
      </body>
    </html>
  )
}
