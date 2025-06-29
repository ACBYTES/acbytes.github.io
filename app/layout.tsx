import type { Metadata } from 'next'
import './global.css'

export const metadata: Metadata = {
  title: 'ACBYTES',
  description: 'A Software Solutions Company',
  icons: {
    icon: "/favicon.ico"
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
