export interface IReceipt {
  id?: string
  receiptId: string
  whoRequests: string
  whoBelongs: string
  createdAt?: Date
  updatedAt?: Date
}
