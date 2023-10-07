export interface IReceipt {
  id?: string
  receiptId: string
  whoRequestsId: string
  whoRequests?: any
  whoBelongsId: string
  whoBelongs?: any
  createdAt?: Date
  updatedAt?: Date
}
