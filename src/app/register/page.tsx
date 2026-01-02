'use client'

import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import * as Dialog from '@radix-ui/react-dialog'
import { IconX } from '@tabler/icons-react'
import { Header } from '@/components/Header'
import { RegisterForm } from '@/components/RegisterForm'
import { Instructions } from '@/components/Instructions'
import Image from 'next/image'

const grades = [
  { id: 'first', label: 'الصف الأول الثانوي' },
  { id: 'second', label: 'الصف الثاني الثانوي' },
  { id: 'third', label: 'الصف الثالث الثانوي' },
]

const governorates = [
  'القاهرة', 'الجيزة', 'الإسكندرية', 'البحيرة', 'كفر الشيخ', 'الدقهلية',
  'الغربية', 'المنوفية', 'القليوبية', 'الشرقية', 'بورسعيد', 'الإسماعيلية',
  'السويس', 'شمال سيناء', 'جنوب سيناء', 'البحر الأحمر', 'الوادي الجديد',
  'مطروح', 'الفيوم', 'بني سويف', 'المنيا', 'أسيوط', 'سوهاج', 'قنا',
  'الأقصر', 'أسوان'
]

export default function RegisterPage() {
  return (
    <div className="min-h-screen bg-light dark:bg-dark">
      <Header />
      <main className="container max-w-6xl mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Form Side */}
          <div className="w-full lg:w-1/2 max-w-md">
            <div className="flex items-center gap-2 mb-8">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-2xl">🍉</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold mb-1">يلا نعمل بطيخة جديدة! 🎉</h1>
                <p className="text-gray-600 dark:text-gray-400">هنخلي المذاكرة أحلى مع أحلى شلة مذاكرة في مصر</p>
              </div>
            </div>

            {/* Instructions */}
            <Instructions />

            <RegisterForm />
            
            <div className="mt-6 space-y-4">
              <p className="text-center text-gray-600 dark:text-gray-400">
                عندك حساب؟{' '}
                <Link href="/login" className="text-primary hover:text-primary-dark">
                  يلا ادخل على طول! 🚀
                </Link>
              </p>
              <div className="text-center">
                <p className="text-xs text-gray-600 dark:text-gray-400">
                  لما تعمل حساب، يبقى انت موافق على{' '}
                  <Link href="/terms" className="text-primary hover:text-primary-dark">شروط الاستخدام</Link>
                  {' '}و{' '}
                  <Link href="/privacy" className="text-primary hover:text-primary-dark">سياسة الخصوصية</Link>
                </p>
              </div>
            </div>
          </div>

          {/* Image Side */}
          <div className="hidden lg:block w-1/2">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-2xl" />
              <Image
                src="https://img.freepik.com/free-vector/students-watching-webinar-computer-studying-online_74855-15522.jpg"
                alt="مجموعة طلاب"
                width={600}
                height={400}
                className="w-full rounded-2xl"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <h3 className="text-xl font-bold mb-2">انضم لأكبر شلة مذاكرة! 🌟</h3>
                <p className="text-gray-200">مع أحلى مدرسين وأجمد طرق شرح في مصر</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}