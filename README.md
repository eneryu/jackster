# 🍉 جاكستر - منصة تعليمية مصرية 100%

منصة تعليمية مصرية بتقدم محتوى تعليمي عالي الجودة لطلاب الثانوية العامة. المنصة مبنية بأحدث التقنيات وبتقدم تجربة تعليمية تفاعلية وممتعة.

## 🚀 المميزات

- ✨ تصميم عصري وسهل الاستخدام
- 📱 يدعم جميع الأجهزة (موبايل، تابلت، كمبيوتر)
- 🌙 الوضع الليلي
- 🎯 محتوى تعليمي مميز
- 🎮 نظام تفاعلي للمذاكرة
- 📊 متابعة مستمرة للتقدم
- 🏆 نظام المكافآت والتحديات

## 💻 التقنيات المستخدمة

- [Next.js 15.1.11](https://nextjs.org/) - فريمورك React
- [TypeScript](https://www.typescriptlang.org/) - لغة البرمجة
- [Tailwind CSS](https://tailwindcss.com/) - تنسيق وتصميم
- [Prisma](https://www.prisma.io/) - قاعدة البيانات
- [JWT](https://jwt.io/) - نظام تسجيل الدخول والمصادقة
- [Radix UI](https://www.radix-ui.com/) - مكونات واجهة المستخدم
- [Framer Motion](https://www.framer.com/motion/) - الحركة والأنيميشن

## 🛠️ التثبيت

1. نسخ المشروع:
\`\`\`bash
git clone https://github.com/eneryu/jackster.git
cd jackster
\`\`\`

2. تثبيت المكتبات:
\`\`\`bash
pnpm install
\`\`\`

3. إعداد ملف البيئة:
\`\`\`bash
cp .env.example .env.local
\`\`\`

4. توليد Prisma Client:
\`\`\`bash
pnpm exec prisma generate
\`\`\`

5. تشغيل المشروع:
\`\`\`bash
pnpm dev
\`\`\`

## 🚀 النشر على Vercel

1. ادفع الكود على GitHub
2. اربط المشروع بـ Vercel
3. أضف المتغيرات البيئية في Vercel:
   - `DATABASE_URL` - رابط قاعدة البيانات (PostgreSQL للإنتاج)
   - `JWT_SECRET` - مفتاح سري لـ JWT
   - `NEXT_PUBLIC_APP_URL` - رابط الموقع

4. Vercel سيقوم بالبناء تلقائياً عند كل push

### ملاحظات مهمة للنشر:
- استخدم PostgreSQL بدلاً من SQLite في الإنتاج
- غيّر `provider = "sqlite"` إلى `provider = "postgresql"` في `prisma/schema.prisma`
- قم بتشغيل `prisma migrate deploy` بعد النشر

## 📝 المساهمة

احنا نرحب بأي مساهمة لتحسين المنصة! لو عندك اقتراح أو لقيت مشكلة، اعمل:

1. Fork للمشروع
2. اعمل branch جديد (\`git checkout -b feature/amazing-feature\`)
3. Commit التغييرات (\`git commit -m 'إضافة ميزة جديدة'\`)
4. Push للـ branch (\`git push origin feature/amazing-feature\`)
5. افتح Pull Request

## 📄 الترخيص

هذا المشروع مرخص تحت رخصة MIT - شوف ملف [LICENSE](LICENSE) لمزيد من التفاصيل.

## 👥 فريق العمل

- جاك - مؤسس المشروع ومطور رئيسي

## 📞 تواصل معنا

- واتس اب: 01014023583
- فيس بوك: [@jackster_edu](https://www.facebook.com/jack2xii)
- إيميل: jackezt2@gmail.com
