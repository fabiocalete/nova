import { prisma } from '@/lib/prisma'
import { NextResponse } from 'next/server'

// Force Node.js runtime for Prisma
export const runtime = 'nodejs'

export async function GET() {
  try {
    // Test database connection
    await prisma.$queryRaw`SELECT 1`
    
    // Get database stats
    const userCount = await prisma.user.count()
    const postCount = await prisma.post.count()
    
    return NextResponse.json({
      status: 'Connected',
      database: 'Neon PostgreSQL',
      stats: {
        users: userCount,
        posts: postCount
      },
      timestamp: new Date().toISOString()
    })
  } catch (error) {
    console.error('Database connection test failed:', error)
    return NextResponse.json(
      { 
        status: 'Failed',
        error: 'Database connection failed',
        timestamp: new Date().toISOString()
      },
      { status: 500 }
    )
  }
}