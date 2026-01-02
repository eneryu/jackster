'use client'

import { useState, useEffect } from 'react'
import { IconInfoCircle, IconX } from '@tabler/icons-react'

export function Instructions() {
  const [show, setShow] = useState(true)

  useEffect(() => {
    const hasSeenInstructions = localStorage.getItem('hasSeenInstructions')
    if (hasSeenInstructions) {
      setShow(false)
    }
  }, [])

  const handleDismiss = () => {
    localStorage.setItem('hasSeenInstructions', 'true')
    setShow(false)
  }

  if (!show) return null

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-dark-card rounded-2xl max-w-md w-full p-6 relative">
        <button
          onClick={handleDismiss}
          className="absolute top-4 left-4 text-gray-400 hover:text-white transition-colors"
        >
          <IconX className="w-5 h-5" />
        </button>

        <div className="flex items-start gap-3 mb-6">
          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
            <IconInfoCircle className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h3 className="text-xl font-bold mb-1">أهلاً بيك يا بطيخة! 👋</h3>
            <p className="text-gray-400">قبل ما نبدأ، في كام حاجة كده عايزين نقولهملك</p>
          </div>
        </div>

        <div className="space-y-6">
          <div className="space-y-4 text-sm text-gray-400">
            <p className="font-bold text-white">🎯 عشان تعمل حساب محتاجين منك:</p>
            <ul className="space-y-2 list-none">
              <li className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary">1</span>
                <span>اسمك الأول واسم العيلة</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary">2</span>
                <span>رقم موبايلك (هنبعتلك عليه كود)</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary">3</span>
                <span>رقم موبايل ولي أمرك (عشان نطمنه)</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary">4</span>
                <span>باسورد قوي (على الأقل 8 حروف)</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary">5</span>
                <span>المحافظة اللي انت ساكن فيها</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary">6</span>
                <span>السنة الدراسية بتاعتك</span>
              </li>
            </ul>
            <p>🔒 متقلقش، بياناتك دي في أمان تام وهنستخدمها بس عشان نساعدك في رحلة المذاكرة!</p>
          </div>

          <button
            onClick={handleDismiss}
            className="w-full py-3 bg-primary text-white rounded-xl hover:bg-primary-dark transition-colors flex items-center justify-center gap-2 group"
          >
            <span>تمام فهمت، يلا نبدأ! 🚀</span>
            <div className="w-5 h-5 rounded-full bg-white/20 group-hover:scale-150 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  )
}