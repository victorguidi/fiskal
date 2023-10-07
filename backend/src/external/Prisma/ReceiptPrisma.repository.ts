import { PrismaClient } from "@prisma/client";
import ReceiptRepository from "../../core/Receipt/services/Receipt.repository";
import { IReceipt } from "../../core/Receipt/model/Receipt.interface";

// FIX: Types for the relations here
export default class ReceiptPrismaRepository implements ReceiptRepository {
  private prisma: PrismaClient

  constructor() {
    this.prisma = new PrismaClient()
  }

  getByEmail(email: string): Promise<IReceipt> {
    throw new Error("Method not implemented.");
  }

  async create(receipt: IReceipt): Promise<void> {
    await this.prisma.receipts.create({ data: receipt })
      .catch(err => {
        throw new Error(err)
      })
  }

  async get(pageN: number, pageS: number): Promise<IReceipt[]> {
    return await this.prisma.receipts.findMany({
      skip: pageN,
      take: pageS,
      include: {
        whoRequests: {
          select: {
            email: true
          }
        },
        whoBelongs: {
          select: {
            email: true
          }
        }
      }
    })
      .then(res => res as any[])
      .catch(err => {
        throw new Error(err)
      })
  }

  async getById(id: string): Promise<IReceipt> {
    return await this.prisma.receipts.findUnique({
      where: {
        id
      }
    })
      .then(res => res as any)
      .catch(err => {
        throw new Error(err)
      })
  }

  async getBy(receiptId: string): Promise<IReceipt> {
    return await this.prisma.receipts.findUnique({
      where: {
        receiptId
      }
    })
      .then(res => res as any)
      .catch(err => {
        throw new Error(err)
      })
  }

  async update(id: string, receipt: Partial<IReceipt>): Promise<void> {
    await this.prisma.receipts.update({
      where: {
        id
      },
      data: receipt
    })
      .catch(err => {
        throw new Error(err)
      })
  }

  async delete(id: string): Promise<void> {
    await this.prisma.receipts.delete({
      where: {
        id
      }
    })
      .catch(err => {
        throw new Error(err)
      })
  }

}
