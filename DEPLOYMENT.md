# 🚀 دليل النشر على Vercel - Jackster

هذا الملف يحتوي على تعليمات مفصلة لنشر منصة جاكستر على Vercel.

## 📋 المتطلبات الأساسية

- حساب على [Vercel](https://vercel.com)
- حساب على [GitHub](https://github.com)
- قاعدة بيانات PostgreSQL (يُنصح باستخدام [Neon](https://neon.tech) أو [Supabase](https://supabase.com))

## 🔧 الإعداد المحلي

### 1. تحديث قاعدة البيانات للإنتاج

قبل النشر، يجب تغيير قاعدة البيانات من SQLite إلى PostgreSQL:

**ملف `prisma/schema.prisma`:**
```prisma
datasource db {
  provider = "postgresql"  // غيّر من "sqlite" إلى "postgresql"
  url      = env("DATABASE_URL")
}
```

### 2. إنشاء قاعدة بيانات PostgreSQL

#### استخدام Neon (مُوصى به):
1. اذهب إلى [neon.tech](https://neon.tech)
2. أنشئ حساب جديد
3. أنشئ مشروع جديد
4. انسخ رابط الاتصال (Connection String)

#### استخدام Supabase:
1. اذهب إلى [supabase.com](https://supabase.com)
2. أنشئ مشروع جديد
3. اذهب إلى Settings > Database
4. انسخ Connection String (اختر "Connection Pooling")

## 🌐 النشر على Vercel

### الخطوة 1: ربط المشروع بـ Vercel

1. اذهب إلى [vercel.com](https://vercel.com)
2. اضغط على "Add New Project"
3. اختر المستودع `eneryu/jackster` من GitHub
4. اضغط على "Import"

### الخطوة 2: إعداد المتغيرات البيئية

في صفحة إعدادات المشروع، أضف المتغيرات التالية:

#### متغيرات إلزامية:

| المتغير | القيمة | الوصف |
|---------|--------|-------|
| `DATABASE_URL` | `postgresql://user:password@host/database` | رابط قاعدة بيانات PostgreSQL |
| `JWT_SECRET` | `your-super-secret-key-min-32-chars` | مفتاح سري لـ JWT (32 حرف على الأقل) |
| `NEXT_PUBLIC_APP_URL` | `https://your-domain.vercel.app` | رابط الموقع الخاص بك |

#### مثال على `DATABASE_URL`:
```
postgresql://username:password@ep-cool-name-123456.us-east-2.aws.neon.tech/jackster?sslmode=require
```

#### توليد `JWT_SECRET`:
يمكنك استخدام الأمر التالي لتوليد مفتاح عشوائي:
```bash
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

### الخطوة 3: إعدادات البناء

Vercel سيكتشف تلقائياً أن المشروع Next.js، لكن تأكد من:

- **Framework Preset**: Next.js
- **Build Command**: `prisma generate && next build` (موجود في package.json)
- **Install Command**: `pnpm install`
- **Output Directory**: `.next` (افتراضي)

### الخطوة 4: النشر

1. اضغط على "Deploy"
2. انتظر حتى ينتهي البناء (2-5 دقائق)
3. إذا نجح البناء، ستحصل على رابط الموقع

## 🗄️ إعداد قاعدة البيانات

بعد النشر الأول، يجب تشغيل migrations:

### الطريقة 1: من خلال Vercel CLI

```bash
# تثبيت Vercel CLI
npm i -g vercel

# تسجيل الدخول
vercel login

# ربط المشروع
vercel link

# تشغيل migration
vercel env pull .env.production
pnpm exec prisma migrate deploy
```

### الطريقة 2: من خلال Prisma Studio

```bash
# استخدم DATABASE_URL من Vercel
DATABASE_URL="your-production-url" pnpm exec prisma db push
```

## 🔍 حل المشاكل الشائعة

### مشكلة: Build Failed - Prisma Client not generated

**الحل:**
تأكد من أن `package.json` يحتوي على:
```json
{
  "scripts": {
    "build": "prisma generate && next build",
    "postinstall": "prisma generate"
  }
}
```

### مشكلة: Database connection failed

**الحل:**
- تأكد من أن `DATABASE_URL` صحيح
- تأكد من إضافة `?sslmode=require` في نهاية الرابط
- تحقق من أن قاعدة البيانات تسمح بالاتصالات الخارجية

### مشكلة: JWT_SECRET not found

**الحل:**
- تأكد من إضافة `JWT_SECRET` في Environment Variables في Vercel
- أعد نشر المشروع بعد إضافة المتغير

### مشكلة: Module not found errors

**الحل:**
```bash
# امسح node_modules و pnpm-lock.yaml
rm -rf node_modules pnpm-lock.yaml

# أعد التثبيت
pnpm install

# ادفع التغييرات
git add pnpm-lock.yaml
git commit -m "Update dependencies"
git push
```

## 🔄 التحديثات التلقائية

Vercel سيقوم تلقائياً بإعادة البناء والنشر عند:
- Push جديد على branch `main`
- Pull Request جديد (سينشئ preview deployment)

## 📊 المراقبة والتحليلات

### Vercel Analytics
1. اذهب إلى Project Settings > Analytics
2. فعّل Analytics
3. ستحصل على إحصائيات مفصلة عن الزوار والأداء

### Vercel Logs
- اذهب إلى Deployments > اختر deployment > Runtime Logs
- يمكنك رؤية جميع الأخطاء والتحذيرات

## 🔐 الأمان

### توصيات مهمة:

1. **لا تشارك المتغيرات البيئية أبداً**
2. **استخدم مفاتيح JWT قوية** (32 حرف على الأقل)
3. **فعّل HTTPS فقط** (Vercel يفعله تلقائياً)
4. **راجع الأذونات** في قاعدة البيانات
5. **استخدم Environment Variables** لجميع البيانات الحساسة

## 🎯 الخطوات التالية

بعد النشر الناجح:

1. ✅ اختبر تسجيل الدخول والتسجيل
2. ✅ تأكد من عمل قاعدة البيانات
3. ✅ اختبر جميع الصفحات
4. ✅ راجع الأداء في Vercel Analytics
5. ✅ أضف Domain مخصص (اختياري)

## 📞 الدعم

إذا واجهت أي مشكلة:
- راجع [Vercel Documentation](https://vercel.com/docs)
- راجع [Prisma Documentation](https://www.prisma.io/docs)
- تواصل معنا: jackezt2@gmail.com

---

**ملاحظة:** هذا الدليل محدث لـ Next.js 15.1.11 و Prisma 6.1.0