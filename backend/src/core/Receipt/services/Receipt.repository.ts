import BaseRepository from "../../shared/BaseRepository.shared"
import { IReceipt } from "../model/Receipt.interface"

export default interface ReceiptRepository extends BaseRepository<IReceipt> {

  create(receipt: IReceipt): Promise<void>

  get(pageN: number, pageS: number): Promise<IReceipt[]>

  getById(id: string): Promise<IReceipt>

  getByEmail(email: string): Promise<IReceipt>

  getBy(receiptId: string): Promise<IReceipt>

  update(id: string, receipt: Partial<IReceipt>): Promise<void>

  delete(id: string): Promise<void>

}
