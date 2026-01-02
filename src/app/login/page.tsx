import { Header } from '@/components/Header'
import Image from 'next/image'
import Link from 'next/link'
import { LoginForm } from '@/components/LoginForm'

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-light dark:bg-dark">
      <Header />
      <main className="container max-w-6xl mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Form Side */}
          <div className="w-full lg:w-1/2 max-w-md">
            <div className="flex items-center gap-2 mb-8">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <svg className="w-6 h-6 text-primary" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 15C15.3137 15 18 12.3137 18 9C18 5.68629 15.3137 3 12 3C8.68629 3 6 5.68629 6 9C6 12.3137 8.68629 15 12 15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2.90625 20.2491C3.82834 18.6531 5.1542 17.3278 6.75064 16.4064C8.34708 15.485 10.1579 15 12.0011 15C13.8444 15 15.6552 15.4851 17.2516 16.4065C18.848 17.3279 20.1739 18.6533 21.0959 20.2493" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <h1 className="text-2xl font-bold mb-1">تسجيل الدخول 🔥</h1>
                <p className="text-gray-600 dark:text-gray-400">ادخل على حسابك بموبايلك والباسورد</p>
              </div>
            </div>
            <LoginForm />
            <p className="mt-6 text-center text-gray-600 dark:text-gray-400">
              لسه معندكش حساب؟{' '}
              <Link href="/register" className="text-primary hover:text-primary-dark">
                اعمل واحد دلوقتي!
              </Link>
            </p>
          </div>

          {/* Image Side */}
          <div className="hidden lg:block w-1/2">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-2xl" />
              <Image
                src="https://img.freepik.com/free-vector/online-learning-concept-illustration_114360-4735.jpg"
                alt="طالب يذاكر"
                width={600}
                height={400}
                className="w-full rounded-2xl"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <h3 className="text-xl font-bold mb-2">معانا هتوصل لأعلى الدرجات! 🚀</h3>
                <p className="text-gray-200">شرح مبسط، تدريبات كتير، ودعم مستمر</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}