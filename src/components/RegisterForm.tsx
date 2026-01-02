'use client'

import React from 'react'
import { useRouter } from 'next/navigation'
import { IconUser, IconPhone, IconLock, IconLoader2, IconMapPin, IconSchool } from '@tabler/icons-react'

const grades = ['أولى ثانوي', 'تانية ثانوي', 'تالتة ثانوي']

const governorates = [
  'القاهرة', 'الجيزة', 'الإسكندرية', 'البحيرة', 'كفر الشيخ', 'الدقهلية',
  'الغربية', 'المنوفية', 'القليوبية', 'الشرقية', 'بورسعيد', 'الإسماعيلية',
  'السويس', 'شمال سيناء', 'جنوب سيناء', 'البحر الأحمر', 'الوادي الجديد',
  'مطروح', 'الفيوم', 'بني سويف', 'المنيا', 'أسيوط', 'سوهاج', 'قنا',
  'الأقصر', 'أسوان'
]

export function RegisterForm() {
  const router = useRouter()
  const [loading, setLoading] = React.useState(false)
  const [error, setError] = React.useState('')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    const formData = new FormData(e.currentTarget)
    const data = {
      firstName: formData.get('firstName') as string,
      lastName: formData.get('lastName') as string,
      phone: formData.get('phone') as string,
      parentPhone: formData.get('parentPhone') as string,
      password: formData.get('password') as string,
      governorate: formData.get('governorate') as string,
      grade: formData.get('grade') as string
    }

    try {
      const response = await fetch('/api/auth/register', {
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
      setError(error instanceof Error ? error.message : 'في حاجة غلط يا معلم.. جرب تاني كده')
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label htmlFor="firstName" className="block text-sm font-medium text-gray-300 mb-1.5">
            اسمك الأول
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-gray-400">
              <IconUser className="w-5 h-5" />
            </div>
            <input
              type="text"
              id="firstName"
              name="firstName"
              required
              className="w-full py-3 pr-10 pl-4 bg-dark-card rounded-xl focus:ring-2 focus:ring-primary transition-all"
              placeholder="محمد"
            />
          </div>
        </div>
        <div>
          <label htmlFor="lastName" className="block text-sm font-medium text-gray-300 mb-1.5">
            اسم العيلة
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-gray-400">
              <IconUser className="w-5 h-5" />
            </div>
            <input
              type="text"
              id="lastName"
              name="lastName"
              required
              className="w-full py-3 pr-10 pl-4 bg-dark-card rounded-xl focus:ring-2 focus:ring-primary transition-all"
              placeholder="أحمد"
            />
          </div>
        </div>
      </div>

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

        <div>
          <label htmlFor="parentPhone" className="block text-sm font-medium text-gray-300 mb-1.5">
            موبايل ولي الأمر
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-gray-400">
              <IconPhone className="w-5 h-5" />
            </div>
            <input
              type="tel"
              id="parentPhone"
              name="parentPhone"
              required
              dir="ltr"
              className="w-full py-3 pr-10 pl-4 bg-dark-card rounded-xl focus:ring-2 focus:ring-primary transition-all"
              placeholder="01xxxxxxxxx"
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label htmlFor="governorate" className="block text-sm font-medium text-gray-300 mb-1.5">
            ساكن فين؟
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-gray-400">
              <IconMapPin className="w-5 h-5" />
            </div>
            <select
              id="governorate"
              name="governorate"
              required
              className="w-full py-3 pr-10 pl-4 bg-dark-card rounded-xl focus:ring-2 focus:ring-primary transition-all appearance-none"
            >
              <option value="">اختار محافظتك</option>
              {governorates.map((gov) => (
                <option key={gov} value={gov}>
                  {gov}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label htmlFor="grade" className="block text-sm font-medium text-gray-300 mb-1.5">
            في سنة كام؟
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-gray-400">
              <IconSchool className="w-5 h-5" />
            </div>
            <select
              id="grade"
              name="grade"
              required
              className="w-full py-3 pr-10 pl-4 bg-dark-card rounded-xl focus:ring-2 focus:ring-primary transition-all appearance-none"
            >
              <option value="">اختار سنة دراسية</option>
              {grades.map((grade) => (
                <option key={grade} value={grade}>
                  {grade}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
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
              minLength={8}
              className="w-full py-3 pr-10 pl-4 bg-dark-card rounded-xl focus:ring-2 focus:ring-primary transition-all"
              placeholder="••••••••"
            />
          </div>
        </div>

        <div>
          <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-300 mb-1.5">
            اكتبه تاني
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-gray-400">
              <IconLock className="w-5 h-5" />
            </div>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              required
              minLength={8}
              className="w-full py-3 pr-10 pl-4 bg-dark-card rounded-xl focus:ring-2 focus:ring-primary transition-all"
              placeholder="••••••••"
            />
          </div>
        </div>
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
            <span>استنى شوية...</span>
          </>
        ) : (
          <>
            <span>يلا نبدأ المغامرة</span>
            <div className="w-5 h-5 rounded-full bg-white/20 group-hover:scale-150 transition-transform" />
          </>
        )}
      </button>
    </form>
  )
}