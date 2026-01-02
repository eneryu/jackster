import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

let prisma: PrismaClient | null = null;

// Initialize Prisma only if DATABASE_URL is available
try {
  if (process.env.DATABASE_URL) {
    prisma = new PrismaClient();
  }
} catch (error) {
  console.warn(
    "Database connection not available, auth features will be disabled",
  );
}

export interface RegisterData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  governorate: string;
  grade: string;
}

export interface LoginData {
  email: string;
  password: string;
}

export async function register(data: RegisterData) {
  if (!prisma) {
    throw new Error("قاعدة البيانات غير متاحة حالياً");
  }

  const existingUser = await prisma.user.findUnique({
    where: { email: data.email },
  });

  if (existingUser) {
    throw new Error("البريد الإلكتروني مستخدم بالفعل");
  }

  const hashedPassword = await bcrypt.hash(data.password, 10);

  const user = await prisma.user.create({
    data: {
      ...data,
      password: hashedPassword,
    },
  });

  const token = jwt.sign(
    { userId: user.id },
    process.env.JWT_SECRET || "development-secret-key-change-in-production",
    { expiresIn: "7d" },
  );

  return { user, token };
}

export async function login(data: LoginData) {
  if (!prisma) {
    throw new Error("قاعدة البيانات غير متاحة حالياً");
  }

  const user = await prisma.user.findUnique({
    where: { email: data.email },
  });

  if (!user) {
    throw new Error("البريد الإلكتروني غير موجود");
  }

  const isValid = await bcrypt.compare(data.password, user.password);

  if (!isValid) {
    throw new Error("كلمة المرور غير صحيحة");
  }

  const token = jwt.sign(
    { userId: user.id },
    process.env.JWT_SECRET || "development-secret-key-change-in-production",
    { expiresIn: "7d" },
  );

  return { user, token };
}

export async function getUserFromToken(token: string) {
  if (!prisma) {
    return null;
  }

  try {
    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET || "development-secret-key-change-in-production",
    ) as { userId: string };

    const user = await prisma.user.findUnique({
      where: { id: decoded.userId },
    });
    return user;
  } catch {
    return null;
  }
}

export function isDatabaseAvailable(): boolean {
  return prisma !== null && !!process.env.DATABASE_URL;
}
