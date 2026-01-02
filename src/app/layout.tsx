import type { Metadata } from 'next'
import { ThemeProvider } from '@/components/theme-provider'
import { Noto_Kufi_Arabic, Amiri } from 'next/font/google'
import './globals.css'

const kufi = Noto_Kufi_Arabic({
  subsets: ['arabic'],
  weight: ['400', '700'],
  variable: '--font-kufi',
})

const amiri = Amiri({
  subsets: ['arabic'],
  weight: ['400', '700'],
  variable: '--font-amiri',
})

export const metadata: Metadata = {
  title: 'جاكستر - منصة تعليمية مصرية',
  description: 'منصة تعليمية مصرية هدفها تسهيل المذاكرة وتوفير محتوى تعليمي عالي الجودة لكل الطلاب',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <body className={`${kufi.variable} ${amiri.variable} font-kufi bg-light dark:bg-dark text-dark dark:text-white`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          storageKey="jackster-theme"
        >
          <div className="fixed bottom-4 left-4 text-xs text-gray-500">
            Developed by Jack
          </div>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
} 