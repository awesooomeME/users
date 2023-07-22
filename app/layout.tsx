import './globals.css'
import type { Metadata } from 'next'
import { Kumbh_Sans } from 'next/font/google'

const font = Kumbh_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'User List',
  description: 'App to show users fetch on api https://reqres.in/',
  authors: [
    {
      name: 'Joderick Espanola'
    }
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className} suppressHydrationWarning={true}>{children}</body>
    </html>
  )
}
