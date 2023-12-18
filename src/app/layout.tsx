import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Inter as FontSans } from "next/font/google"
import Navbar from '@/components/navbar'


import { cn } from '@/lib/utils'
 
export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'WHT Calc',
  description: 'Created for WHT Agents',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}>
        
      <Navbar />
      
        {children}
        
      </body>
    </html>
  )
}
