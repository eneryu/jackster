import { NextResponse } from 'next/server'
import { register } from '@/lib/auth'

export async function POST(req: Request) {
  try {
    const data = await req.json()
    const result = await register(data)
    return NextResponse.json(result)
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'حدث خطأ أثناء التسجيل' },
      { status: 400 }
    )
  }
}
