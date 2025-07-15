import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Rubiks House 3D',
  description: '3D Rubiks Cube House with animated foundation and static roof',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}