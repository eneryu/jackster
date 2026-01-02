import { Header } from '@/components/Header'
import Image from 'next/image'
import { IconTrophy, IconMedal, IconStar } from '@tabler/icons-react'

const topStudents = [
  {
    name: 'محمد لمونة',
    grade: 'تانية ثانوي', 
    perfectScores: 12,
    totalExams: 18,
    rating: 4.8,
    avatar: 'https://img.freepik.com/free-photo/portrait-young-man-with-dark-curly-hair_176532-8137.jpg'
  },
  {
    name: 'أحمد بطيخة',
    grade: 'تالتة ثانوي',
    perfectScores: 15,
    totalExams: 20,
    rating: 4.9,
    avatar: 'https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg'
  },
  {
    name: 'مصطفى برتقانة',
    grade: 'أولى ثانوي',
    perfectScores: 10,
    totalExams: 15,
    rating: 4.7,
    avatar: 'https://img.freepik.com/free-photo/handsome-confident-smiling-man-with-hands-crossed-chest_176420-18743.jpg'
  }
]

const otherTopStudents = [
  {
    name: 'سارة تفاحة',
    grade: 'تانية ثانوي',
    perfectScores: 8,
    totalExams: 12,
    rating: 4.6,
    rank: 4,
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sara'
  },
  {
    name: 'كريم عنبة',
    grade: 'تالتة ثانوي', 
    perfectScores: 7,
    totalExams: 11,
    rating: 4.5,
    rank: 5,
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Karim'
  },
  {
    name: 'نور مانجة',
    grade: 'أولى ثانوي',
    perfectScores: 6,
    totalExams: 10,
    rating: 4.4,
    rank: 6,
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Nour'
  }
]

export default function LeaderboardPage() {
  return (
    <div className="min-h-screen bg-light dark:bg-dark">
      <Header />
      
      <main className="container mx-auto px-4 py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">
            🏆 بطايخنا المتفوقين 🏆
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            دول أحلى بطايخ عندنا.. كل واحد فيهم قفل امتحانات وجاب العلامة الكاملة
          </p>
        </div>

        {/* Top 3 Students */}
        <div className="flex flex-col md:flex-row justify-center items-end gap-8 max-w-5xl mx-auto mb-16">
          {/* Second Place */}
          <div className="w-full md:w-1/3">
            <div className="relative">
              <div className="absolute -top-6 left-1/2 -translate-x-1/2">
                <IconMedal className="w-12 h-12 text-gray-400" />
              </div>
              <div className="p-6 rounded-2xl bg-light-card dark:bg-dark-card">
                <div className="w-24 h-24 mx-auto mb-4 relative">
                  <Image
                    src={topStudents[0].avatar}
                    alt={topStudents[0].name}
                    fill
                    className="rounded-full object-cover"
                  />
                  <div className="absolute -bottom-2 -right-2 bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">
                    #2
                  </div>
                </div>
                <h3 className="text-xl font-bold text-center mb-2">{topStudents[0].name}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-center mb-4">{topStudents[0].grade}</p>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600 dark:text-gray-400">امتحانات كاملة:</span>
                    <span className="font-bold text-primary">{topStudents[0].perfectScores}/{topStudents[0].totalExams}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600 dark:text-gray-400">التقييم:</span>
                    <div className="flex items-center gap-1">
                      <IconStar className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                      <span className="font-bold">{topStudents[0].rating}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* First Place */}
          <div className="w-full md:w-1/3 md:mb-8">
            <div className="relative">
              <div className="absolute -top-6 left-1/2 -translate-x-1/2">
                <IconTrophy className="w-12 h-12 text-yellow-500" />
              </div>
              <div className="p-6 rounded-2xl bg-primary/10 ring-2 ring-primary">
                <div className="w-32 h-32 mx-auto mb-4 relative">
                  <Image
                    src={topStudents[1].avatar}
                    alt={topStudents[1].name}
                    fill
                    className="rounded-full object-cover"
                  />
                  <div className="absolute -bottom-2 -right-2 bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold">
                    #1
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-center mb-2">{topStudents[1].name}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-center mb-4">{topStudents[1].grade}</p>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600 dark:text-gray-400">امتحانات كاملة:</span>
                    <span className="font-bold text-primary">{topStudents[1].perfectScores}/{topStudents[1].totalExams}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600 dark:text-gray-400">التقييم:</span>
                    <div className="flex items-center gap-1">
                      <IconStar className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                      <span className="font-bold">{topStudents[1].rating}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Third Place */}
          <div className="w-full md:w-1/3">
            <div className="relative">
              <div className="absolute -top-6 left-1/2 -translate-x-1/2">
                <IconMedal className="w-12 h-12 text-amber-600" />
              </div>
              <div className="p-6 rounded-2xl bg-light-card dark:bg-dark-card">
                <div className="w-24 h-24 mx-auto mb-4 relative">
                  <Image
                    src={topStudents[2].avatar}
                    alt={topStudents[2].name}
                    fill
                    className="rounded-full object-cover"
                  />
                  <div className="absolute -bottom-2 -right-2 bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">
                    #3
                  </div>
                </div>
                <h3 className="text-xl font-bold text-center mb-2">{topStudents[2].name}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-center mb-4">{topStudents[2].grade}</p>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600 dark:text-gray-400">امتحانات كاملة:</span>
                    <span className="font-bold text-primary">{topStudents[2].perfectScores}/{topStudents[2].totalExams}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600 dark:text-gray-400">التقييم:</span>
                    <div className="flex items-center gap-1">
                      <IconStar className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                      <span className="font-bold">{topStudents[2].rating}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Other Top Students */}
        <div className="max-w-5xl mx-auto mb-16">
          <h2 className="text-2xl font-bold mb-8 text-center">بطايخ متميزة كمان 🌟</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {otherTopStudents.map((student) => (
              <div key={student.name} className="p-6 rounded-2xl bg-light-card dark:bg-dark-card hover:scale-105 transition-transform">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 relative">
                    <Image
                      src={student.name.includes('سارة') ? 'https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg' : 'https://img.freepik.com/free-photo/handsome-confident-smiling-man-with-hands-crossed-chest_176420-18743.jpg'}
                      alt={student.name}
                      fill
                      className="rounded-full object-cover"
                    />
                    <div className="absolute -bottom-1 -right-1 bg-primary text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold">
                      #{student.rank}
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold">{student.name}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{student.grade}</p>
                  </div>
                </div>
                <div className="mt-4 space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600 dark:text-gray-400">امتحانات كاملة:</span>
                    <span className="font-bold text-primary">{student.perfectScores}/{student.totalExams}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600 dark:text-gray-400">التقييم:</span>
                    <div className="flex items-center gap-1">
                      <IconStar className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                      <span className="font-bold">{student.rating}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Motivational Footer */}
        <div className="text-center py-16 bg-light-card dark:bg-dark-card rounded-2xl">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h3 className="text-3xl font-bold">
                  عايز تبقى من البطايخ دي؟ 🤔
                </h3>
                <p className="text-xl text-gray-600 dark:text-gray-400">
                  مفيش مستحيل.. ابدأ المذاكرة دلوقتي وهتوصل للقمة! 🚀
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <Image
                    src="https://img.freepik.com/free-photo/group-diverse-students-studying-together_1163-5022.jpg"
                    alt="طلاب متفوقين"
                    width={120}
                    height={120}
                    className="rounded-xl"
                  />
                  <Image
                    src="https://img.freepik.com/free-photo/students-knowing-right-answer_23-2148888810.jpg"
                    alt="طلاب سعداء"
                    width={120}
                    height={120}
                    className="rounded-xl"
                  />
                  <Image
                    src="https://img.freepik.com/free-photo/medium-shot-students-taking-notes_23-2148888811.jpg"
                    alt="طلاب يذاكرون"
                    width={120}
                    height={120}
                    className="rounded-xl"
                  />
                </div>
              </div>
              <div className="relative h-80">
                <Image
                  src="https://img.freepik.com/free-photo/happy-students-with-diplomas_23-2148888799.jpg"
                  alt="طلاب متفوقين"
                  fill
                  className="rounded-2xl object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl flex items-end p-8">
                  <p className="text-white text-xl font-bold">
                    انضم لآلاف الطلاب اللي حققوا أحلامهم معانا 💫
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}