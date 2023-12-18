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
      <body className='w-screen h-screen bg-mainBackground font-raleway overflow-x-hidden'>
        <main className='w-screen flex flex-col items-center'>
          <Navbar />
          {children}
        </main>
      </body>
    </html>
  )
}
