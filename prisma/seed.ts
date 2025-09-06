import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('🌱 Seeding database...')

  // Create test users
  const users = await Promise.all([
    prisma.user.upsert({
      where: { email: 'john@example.com' },
      update: {},
      create: {
        email: 'john@example.com',
        name: 'John Doe',
      },
    }),
    prisma.user.upsert({
      where: { email: 'jane@example.com' },
      update: {},
      create: {
        email: 'jane@example.com',
        name: 'Jane Smith',
      },
    }),
    prisma.user.upsert({
      where: { email: 'alice@example.com' },
      update: {},
      create: {
        email: 'alice@example.com',
        name: 'Alice Johnson',
      },
    }),
  ])

  console.log(`✅ Created ${users.length} users`)

  // Create test posts
  const posts = await Promise.all([
    prisma.post.upsert({
      where: { id: 'post-1' },
      update: {},
      create: {
        id: 'post-1',
        title: 'Getting Started with Prisma and Neon',
        content: 'This is a comprehensive guide to setting up Prisma with Neon database. Neon provides a serverless PostgreSQL experience that scales automatically.',
        published: true,
        authorId: users[0].id,
      },
    }),
    prisma.post.upsert({
      where: { id: 'post-2' },
      update: {},
      create: {
        id: 'post-2',
        title: 'Building Modern Web Apps with Next.js',
        content: 'Next.js 15 brings incredible performance improvements and developer experience enhancements. Learn how to leverage the App Router for better applications.',
        published: true,
        authorId: users[1].id,
      },
    }),
    prisma.post.upsert({
      where: { id: 'post-3' },
      update: {},
      create: {
        id: 'post-3',
        title: 'Database Design Best Practices',
        content: 'Understanding how to design efficient database schemas is crucial for application performance and maintainability.',
        published: false,
        authorId: users[2].id,
      },
    }),
  ])

  console.log(`✅ Created ${posts.length} posts`)
  console.log('🎉 Database seeded successfully!')
}

main()
  .catch((e) => {
    console.error('❌ Seeding failed:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })