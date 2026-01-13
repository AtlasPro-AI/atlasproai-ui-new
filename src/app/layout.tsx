import type { Metadata, Viewport } from 'next'
import { Space_Grotesk, Inter } from 'next/font/google'
import './globals.css'

// Font optimization with display swap and preload
const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
  preload: true,
  weight: ['400', '500', '600', '700'],
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  preload: true,
  weight: ['400', '500', '600'],
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#11231F',
}

export const metadata: Metadata = {
  title: 'AtlasPro AI - Spatial Intelligence Platform',
  description: 'Transform maps, satellite imagery, LiDAR, and sensor data into real-time monitoring, automated analysis, and operational simulations.',
  keywords: ['spatial intelligence', 'geospatial', 'satellite imagery', 'LiDAR', 'mapping', 'GIS'],
  // Open Graph for better social sharing
  openGraph: {
    title: 'AtlasPro AI - Spatial Intelligence Platform',
    description: 'Transform maps, satellite imagery, LiDAR, and sensor data into real-time monitoring and automated analysis.',
    type: 'website',
    locale: 'en_US',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  )
}
