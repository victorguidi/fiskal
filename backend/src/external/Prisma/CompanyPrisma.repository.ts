import { PrismaClient } from "@prisma/client";
import CompanyRepository from "../../core/company/services/Company.repository";
import { Company } from "../../dtos/Company.dto";

export default class CompanyPrismaRepository implements CompanyRepository {
  private prisma: PrismaClient

  constructor() {
    this.prisma = new PrismaClient()
  }

  async createCompany(company: Company): Promise<void> {
    await this.prisma.company.create({ data: company })
      .catch(err => {
        throw new Error(err)
      })
  }

  async getCompanies(pageN: number, pageS: number): Promise<Company[]> {
    return await this.prisma.company.findMany({
      skip: pageN,
      take: pageS,
    })
      .then(res => res as Company[])
      .catch(err => {
        throw new Error(err)
      })
  }

  async getById(id: string): Promise<Company> {
    return await this.prisma.company.findUnique({
      where: {
        id
      }
    })
      .then(res => res as Company)
      .catch(err => {
        throw new Error(err)
      })
  }

  async getByEmail(email: string): Promise<Company> {
    return await this.prisma.company.findUnique({
      where: {
        email
      }
    })
      .then(res => res as Company)
      .catch(err => {
        throw new Error(err)
      })
  }

  async updateCompany(id: string, company: Partial<Company>): Promise<void> {
    await this.prisma.company.update({
      where: {
        id
      },
      data: company
    })
      .catch(err => {
        throw new Error(err)
      })
  }

  async deleteCompany(id: string): Promise<void> {
    await this.prisma.company.delete({
      where: {
        id
      }
    })
      .catch(err => {
        throw new Error(err)
      })
  }

}
