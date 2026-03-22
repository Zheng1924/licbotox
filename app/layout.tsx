import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Long Island City Botox | Premium Beauty Services',
  description: 'Book your appointment for professional Botox and beauty services. Expert technicians, beautiful results in Long Island City.',
  keywords: 'botox, Long Island City, beauty, aesthetics, skincare, LIC',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  )
}
