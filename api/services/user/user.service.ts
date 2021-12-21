import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export class UserService {
  async findAll(): Promise<object[]> {
    const users = await prisma.user.findMany({
      where: { published: true },
    })
    return users
  }

  async findById(id: number): Promise<object | null> {
    const user = await prisma.user.findFirst({
      where: { id },
    })
    return user
  }

  async create(user: any): Promise<object> {
    const result = await prisma.user.create({ data: { ...user } })
    return result
  }
}
