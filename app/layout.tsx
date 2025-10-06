import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Agung Krisna Prastyaning Ari - Full Stack Developer & UI/UX Designer",
  description: "Passionate Full Stack Developer and UI/UX Designer from BINUS@Malang. Specializing in web development, mobile applications, and creative design solutions. Building innovative digital experiences with modern technologies.",
  keywords: [
    "Full Stack Developer",
    "UI UX Designer", 
    "Web Developer",
    "Mobile App Developer",
    "Frontend Developer",
    "Backend Developer",
    "React Developer",
    "Next.js Developer",
    "JavaScript Developer",
    "PHP Developer",
    "Golang Developer",
    "BINUS University",
    "Malang Developer",
    "Indonesia Developer",
    "Creative Designer",
    "Digital Solutions",
    "Portfolio",
    "Agung Krisna Prastyaning Ari"
  ],
  authors: [{ name: "Agung Krisna Prastyaning Ari" }],
  creator: "Agung Krisna Prastyaning Ari",
  publisher: "Agung Krisna Prastyaning Ari",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    url: 'https://agungkrisnaprastyaningari.vercel.app',
    title: 'Agung Krisna Prastyaning Ari - Full Stack Developer & UI/UX Designer',
    description: 'Passionate Full Stack Developer and UI/UX Designer from BINUS@Malang. Specializing in web development, mobile applications, and creative design solutions.',
    siteName: 'Agung Krisna Portfolio',
    images: [
      {
        url: '/image/4x6CM.png',
        width: 1200,
        height: 630,
        alt: 'Agung Krisna Prastyaning Ari - Full Stack Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Agung Krisna Prastyaning Ari - Full Stack Developer & UI/UX Designer',
    description: 'Passionate Full Stack Developer and UI/UX Designer from BINUS@Malang. Specializing in web development, mobile applications, and creative design solutions.',
    images: ['/image/4x6CM.png'],
    creator: '@agungkrisnaprastyaningari',
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
  },
  category: 'technology',
  classification: 'Portfolio Website',
  referrer: 'origin-when-cross-origin',
  alternates: {
    canonical: 'https://agungkrisnaprastyaningari.vercel.app',
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  colorScheme: 'dark',
  themeColor: '#1e40af',
}

import { ReactNode } from "react"

export default function RootLayout({ children }: { children: ReactNode }) { // Perbaikan: Tambahkan tipe untuk 'children'
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}