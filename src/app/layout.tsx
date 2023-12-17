import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import localFont from 'next/font/local'
import Navbar from '../components/Navbar'
import './globals.css'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

const sunroll = localFont({
  src: [
    {
      path: 'fonts/Sunroll-Bold.ttf',
      weight: '800',
    },
    {
      path: 'fonts/Sunroll.ttf',
      weight: '400',
    }
  ],
  variable: '--font-sunroll',
})

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'An-najat Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${sunroll.variable} font-sans`}>
      <body className='w-screen h-screen bg-mainBackground font-raleway overflow-x-hidden sm:overflow-x-hidden'>
        <main className='w-screen flex flex-col items-center'>
          <Navbar />
          <div className="relative w-[280px] h-[240px] md:w-[340px] md:h-[340px] bg-[#FFEF61] rounded-full blur-[90px] mt-10 md:mt-0" />
          {children}
        </main>
      </body>
    </html>
  )
}
