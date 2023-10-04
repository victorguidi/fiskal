import { PrismaClient } from "@prisma/client";
import { User } from "../../dtos/User.dto";
import UserRepository from "../../core/User/services/User.repository";

export default class UserPrismaRepository implements UserRepository {
  private prisma: PrismaClient

  constructor() {
    this.prisma = new PrismaClient()
  }


  // FIXME: Needs fixing on the types
  async create(user: User): Promise<void> {
    await this.prisma.users.create({ data: user })
      .catch(err => {
        throw new Error(err)
      })
  }

  async get(pageN: number, pageS: number): Promise<User[]> {
    return await this.prisma.users.findMany({
      skip: pageN,
      take: pageS,
    })
      .then(res => res as User[])
      .catch(err => {
        throw new Error(err)
      })
  }

  async getById(id: string): Promise<User> {
    return await this.prisma.users.findUnique({
      where: {
        id
      }
    })
      .then(res => res as User)
      .catch(err => {
        throw new Error(err)
      })
  }

  async getByEmail(email: string): Promise<User> {
    return await this.prisma.users.findUnique({
      where: {
        email
      }
    })
      .then(res => res as User)
      .catch(err => {
        throw new Error(err)
      })
  }

  async update(id: string, company: Partial<User>): Promise<void> {
    await this.prisma.users.update({
      where: {
        id
      },
      data: company
    })
      .catch(err => {
        throw new Error(err)
      })
  }

  async delete(id: string): Promise<void> {
    await this.prisma.users.delete({
      where: {
        id
      }
    })
      .catch(err => {
        throw new Error(err)
      })
  }

}
