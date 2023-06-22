import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  const user = await prisma.user.create({
    data: {
      name: 'Andre_Pires',
      email: 'andre_pires@teste-prisma.io',
      posts: {
        create: {
          title: 'Incluindo novos usuarios',
          content: 'Aula Data Persistence',
          published: true,
        },
      },
    },
  })
  console.log(user)
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
