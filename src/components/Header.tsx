'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useTheme } from 'next-themes'
import { useState, useEffect } from 'react'
import { IconSun, IconMoon, IconMenu2 } from '@tabler/icons-react'

export function Header() {
  const [mounted, setMounted] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur supports-[backdrop-filter]:bg-light/60 dark:supports-[backdrop-filter]:bg-dark/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
              <span className="text-xl">🍉</span>
            </div>
            <span className="text-xl font-bold">جاكستر</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              href="/leaderboard"
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
            >
              <span>🏆</span>
              <span>المتفوقين</span>
            </Link>
            
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
            >
              {theme === 'dark' ? (
                <IconSun className="w-5 h-5 text-primary" />
              ) : (
                <IconMoon className="w-5 h-5 text-primary" />
              )}
            </button>

            <Link
              href="/login"
              className="px-4 py-2 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
            >
              يا بطيخ ادخل
            </Link>

            <Link
              href="/register"
              className="px-4 py-2 rounded-full bg-primary text-white hover:bg-primary/90 transition-colors"
            >
              اعمل بطيخة جديدة
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
            >
              {theme === 'dark' ? (
                <IconSun className="w-5 h-5 text-primary" />
              ) : (
                <IconMoon className="w-5 h-5 text-primary" />
              )}
            </button>
            
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
            >
              <IconMenu2 className="w-5 h-5 text-primary" />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 dark:border-gray-800">
            <div className="flex flex-col gap-2">
              <Link
                href="/leaderboard"
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
              >
                <span>🏆</span>
                <span>المتفوقين</span>
              </Link>

              <Link
                href="/login"
                className="px-4 py-2 rounded-xl bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
              >
                يا بطيخ ادخل
              </Link>

              <Link
                href="/register"
                className="px-4 py-2 rounded-xl bg-primary text-white hover:bg-primary/90 transition-colors"
              >
                اعمل بطيخة جديدة
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}