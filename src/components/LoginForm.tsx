'use client'

import React from 'react'
import { useRouter } from 'next/navigation'
import { IconPhone, IconLock, IconLoader2 } from '@tabler/icons-react'

export function LoginForm() {
  const router = useRouter()
  const [loading, setLoading] = React.useState(false)
  const [error, setError] = React.useState('')
  const [loginWithCode, setLoginWithCode] = React.useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    const formData = new FormData(e.currentTarget)
    const data = {
      phone: formData.get('phone') as string,
      password: formData.get('password') as string
    }

    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.error)
      }

      localStorage.setItem('token', result.token)
      router.push('/dashboard')
    } catch (error) {
      setError(error instanceof Error ? error.message : 'في حاجة غلط يا بطيخة.. جرب تاني كده 🙈')
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-1.5">
            موبايلك
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-gray-400">
              <IconPhone className="w-5 h-5" />
            </div>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              dir="ltr"
              className="w-full py-3 pr-10 pl-4 bg-dark-card rounded-xl focus:ring-2 focus:ring-primary transition-all"
              placeholder="01xxxxxxxxx"
            />
          </div>
        </div>

        {!loginWithCode && (
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-1.5">
              الباسورد
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-gray-400">
                <IconLock className="w-5 h-5" />
              </div>
              <input
                type="password"
                id="password"
                name="password"
                required
                className="w-full py-3 pr-10 pl-4 bg-dark-card rounded-xl focus:ring-2 focus:ring-primary transition-all"
                placeholder="الباسورد بتاعك"
              />
            </div>
          </div>
        )}
      </div>

      <div className="flex items-center justify-between">
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            checked={loginWithCode}
            onChange={(e) => setLoginWithCode(e.target.checked)}
            className="sr-only peer"
          />
          <div className="w-11 h-6 bg-dark-card peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-primary rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
          <span className="mr-3 text-sm font-medium text-gray-300">نسيت الباسورد؟ ابعتلي كود</span>
        </label>
      </div>

      {error && (
        <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl">
          <p className="text-red-500 text-sm">{error}</p>
        </div>
      )}

      <button
        type="submit"
        disabled={loading}
        className="w-full py-3 bg-primary text-white rounded-xl hover:bg-primary-dark transition-colors disabled:opacity-50 flex items-center justify-center gap-2 group"
      >
        {loading ? (
          <>
            <IconLoader2 className="w-5 h-5 animate-spin" />
            <span>استنى شوية يا قمر...</span>
          </>
        ) : (
          <>
            <span>يلا بينا نذاكر! 🚀</span>
            <div className="w-5 h-5 rounded-full bg-white/20 group-hover:scale-150 transition-transform" />
          </>
        )}
      </button>
    </form>
  )
}