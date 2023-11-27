import type { Metadata } from 'next'
import localFont from "next/font/local";
import './globals.css';
import { Providers } from './providers';


const myFont=localFont({
  src:"../assets/fonts/Vazirmatn-Regular.ttf",

})


export const metadata: Metadata = {
  title: 'سیستم اطلاع رسانی بلیط اتوبوس',
  description: 'made by ali shirani',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fa" dir='rtl' className='dark'>
      <body className={myFont.className}><Providers>{children}</Providers></body>
    </html>
  )
}
