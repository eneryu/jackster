import { Header } from '@/components/Header'
import Image from 'next/image'
import Link from 'next/link'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-light dark:bg-dark">
      <Header />
      
      {/* Hero Section */}
      <main className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-right">
            <div className="inline-block mb-4 px-4 py-2 rounded-full bg-primary/10">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                منصة تعليمية جديدة كلياً 🎯
              </span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold mb-4">
              مع جاك، المذاكرة
              <br />
              <span className="text-primary">هتبقى أسهل</span>
          </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
              منصة تعليمية مصرية 100% هدفها تسهيل المذاكرة
              <br />
              وتوفير محتوى تعليمي عالي الجودة لكل الطلاب
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-end">
              <Link 
                href="/register" 
                className="px-8 py-3 rounded-xl bg-primary text-white hover:bg-primary-dark transition-all group"
              >
                <span className="flex items-center justify-center gap-2">
                  ابدأ مجاناً
                  <span className="group-hover:translate-x-1 transition-transform">←</span>
                </span>
              </Link>
              <Link 
                href="/about" 
                className="px-8 py-3 rounded-xl border border-gray-200 dark:border-gray-800 hover:bg-light-card dark:hover:bg-dark-card transition-all"
              >
                اعرف أكتر عننا
              </Link>
            </div>
          </div>

          {/* Hero Stats */}
          <div className="flex-1">
            <div className="grid grid-cols-2 gap-4">
              <div className="p-6 rounded-2xl bg-light-card dark:bg-dark-card">
                <div className="text-4xl font-bold text-primary mb-2">+1000</div>
                <div className="text-gray-600 dark:text-gray-400">طالب سعيد</div>
              </div>
              <div className="p-6 rounded-2xl bg-light-card dark:bg-dark-card">
                <div className="text-4xl font-bold text-accent mb-2">+50</div>
                <div className="text-gray-600 dark:text-gray-400">درس تفاعلي</div>
              </div>
              <div className="p-6 rounded-2xl bg-light-card dark:bg-dark-card">
                <div className="text-4xl font-bold text-primary mb-2">+20</div>
                <div className="text-gray-600 dark:text-gray-400">مدرس متميز</div>
              </div>
              <div className="p-6 rounded-2xl bg-light-card dark:bg-dark-card">
                <div className="text-4xl font-bold text-accent mb-2">+100</div>
                <div className="text-gray-600 dark:text-gray-400">امتحان</div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Features Section */}
      <section className="py-24 bg-light-card dark:bg-dark-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold">
              ليه تختار{' '}
              <span className="text-primary">جاكستر</span>؟
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mt-4">
              لأننا بنقدم تجربة تعليمية مختلفة وممتعة
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl bg-light dark:bg-dark group hover:bg-primary/5 transition-all">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-bold mb-2">شرح مبسط</h3>
              <p className="text-gray-600 dark:text-gray-400">
                نبسط المعلومة ونوصلها بأسهل طريقة ممكنة
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-light dark:bg-dark group hover:bg-primary/5 transition-all">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <span className="text-2xl">⚡️</span>
              </div>
              <h3 className="text-xl font-bold mb-2">تفاعل مستمر</h3>
              <p className="text-gray-600 dark:text-gray-400">
                تواصل مباشر مع المدرسين وحل سريع لأي مشكلة
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-light dark:bg-dark group hover:bg-primary/5 transition-all">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <span className="text-2xl">🎮</span>
              </div>
              <h3 className="text-xl font-bold mb-2">تعلم ممتع</h3>
              <p className="text-gray-600 dark:text-gray-400">
                نظام تعليمي تفاعلي يخلي المذاكرة متعة
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Grades Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold">
              اختار{' '}
              <span className="text-primary">صفك</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mt-4">
              محتوى تعليمي مخصص لكل صف دراسي
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { title: 'أولى ثانوي', desc: 'خطوة بخطوة نبني أساس قوي', emoji: '🌱' },
              { title: 'تانية ثانوي', desc: 'نكمل المشوار ونثبت المعلومة', emoji: '🌿' },
              { title: 'تالتة ثانوي', desc: 'نوصل للقمة ونحقق الهدف', emoji: '🌳' }
            ].map((grade) => (
              <div key={grade.title} className="group">
                <div className="p-6 rounded-2xl bg-light-card dark:bg-dark-card hover:bg-primary/5 transition-all">
                  <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                    <span className="text-4xl">{grade.emoji}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-center mb-2">{grade.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-center">{grade.desc}</p>
                  <div className="mt-6">
                    <Link
                      href={`/register?grade=${grade.title}`}
                      className="block w-full py-3 rounded-xl border border-primary text-primary hover:bg-primary hover:text-white transition-all text-center"
                    >
                      ابدأ دلوقتي
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-light-card dark:bg-dark-card">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block mb-4 px-4 py-2 rounded-full bg-primary/10">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                مستني ايه؟ 🚀
              </span>
            </div>
            <h2 className="text-4xl font-bold mb-4">
              ابدأ رحلتك مع جاكستر
              <br />
              <span className="text-primary">مجاناً</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
              سجل دلوقتي وجرب المنصة بنفسك
              <br />
              واكتشف ليه آلاف الطلاب بيثقوا فينا
            </p>
            <Link
              href="/register"
              className="inline-block px-8 py-3 rounded-xl bg-primary text-white hover:bg-primary-dark transition-all"
            >
              سجل دلوقتي
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <span className="text-xl">🎓</span>
                </div>
                <span className="text-xl font-bold">جاكستر</span>
              </div>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                منصة تعليمية مصرية بنحاول نخلي المذاكرة أسهل وأحلى.. 
                عشان كل بطيخة تقدر توصل لحلمها! 🚀
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-4">روابط مهمة</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/about" className="text-gray-600 dark:text-gray-400 hover:text-primary">
                    احنا مين؟
                  </Link>
                </li>
                <li>
                  <Link href="/leaderboard" className="text-gray-600 dark:text-gray-400 hover:text-primary">
                    بطايخنا المتفوقين 🏆
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-gray-600 dark:text-gray-400 hover:text-primary">
                    كلمنا
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="text-gray-600 dark:text-gray-400 hover:text-primary">
                    الخصوصية
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">تابع بطيختنا</h4>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
                >
                  <span className="text-xl">📱</span>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
                >
                  <span className="text-xl">📺</span>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
                >
                  <span className="text-xl">💬</span>
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-bold mb-4">عايز تكلمنا؟</h4>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                <li className="flex items-center gap-2">
                  <span>📧</span>
                  <span>احنا@جاكستر.مصر</span>
                </li>
                <li className="flex items-center gap-2">
                  <span>📱</span>
                  <span>اتصل بينا: 123-456-789</span>
                </li>
                <li className="flex items-center gap-2">
                  <span>⏰</span>
                  <span>شغالين 24/7 عشانك</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800 text-center">
            <p className="text-gray-600 dark:text-gray-400 mb-2">
              جاك عمل المنصة دي عشان يساعد كل الطلاب يحققوا أحلامهم 
              <br/>
              وكل مدرس يقدر يوصل رسالته بأسهل وأحلى طريقة 🎯
            </p>
            <p className="text-gray-600 dark:text-gray-400">
              كل البطايخ محفوظة © {new Date().getFullYear()} جاكستر - صنع في مصر 🇪🇬
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
