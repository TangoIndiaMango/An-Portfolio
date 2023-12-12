import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '../components/Navbar'

const inter = Inter({ subsets: ['latin'] })

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
    <html lang="en">
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
