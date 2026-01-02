import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

const prisma = new PrismaClient()

export interface RegisterData {
  firstName: string
  lastName: string
  email: string
  password: string
  governorate: string
  grade: string
}

export interface LoginData {
  email: string
  password: string
}

export async function register(data: RegisterData) {
  const existingUser = await prisma.user.findUnique({
    where: { email: data.email }
  })

  if (existingUser) {
    throw new Error('البريد الإلكتروني مستخدم بالفعل')
  }

  const hashedPassword = await bcrypt.hash(data.password, 10)

  const user = await prisma.user.create({
    data: {
      ...data,
      password: hashedPassword
    }
  })

  const token = jwt.sign(
    { userId: user.id },
    process.env.JWT_SECRET || 'fallback-secret',
    { expiresIn: '7d' }
  )

  return { user, token }
}

export async function login(data: LoginData) {
  const user = await prisma.user.findUnique({
    where: { email: data.email }
  })

  if (!user) {
    throw new Error('البريد الإلكتروني غير موجود')
  }

  const isValid = await bcrypt.compare(data.password, user.password)

  if (!isValid) {
    throw new Error('كلمة المرور غير صحيحة')
  }

  const token = jwt.sign(
    { userId: user.id },
    process.env.JWT_SECRET || 'fallback-secret',
    { expiresIn: '7d' }
  )

  return { user, token }
}

export async function getUserFromToken(token: string) {
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'fallback-secret') as { userId: string }
    const user = await prisma.user.findUnique({
      where: { id: decoded.userId }
    })
    return user
  } catch {
    return null
  }
}