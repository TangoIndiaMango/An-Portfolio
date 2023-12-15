import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '../components/Navbar'
import localFont from '@next/font/local'

const inter = Inter({ subsets: ['latin'] })

const sunroll = localFont({
  src: [
    {
      path: 'public/fonts/Sunroll-Bold.ttf',
      weight: '800',
    },
    {
      path: 'public/fonts/Sunroll.ttf',
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
      <body className='bg-mainBackground font-raleway overflow-x-hidden'>
        <main >
          <Navbar />
          <div className=" w-[340px] h-[340px] bg-[#FFEF61] rounded-[100%] absolute z-1 top-[55%] left-[50%] -translate-x-[50%] -translate-y-[50%] blur-[90px]">
            
          </div>
          {children}
        </main>

      </body>
    </html>
  )
}
