import BaseRepository from "../../shared/BaseRepository.shared"
import { IReceipt } from "../model/Receipt.interface"

export default interface ReceiptRepository extends BaseRepository<IReceipt> {

  create(user: IReceipt): Promise<void>

  get(pageN: number, pageS: number): Promise<IReceipt[]>

  getById(id: string): Promise<IReceipt>

  getBy(receiptId: string): Promise<IReceipt>

  update(id: string, user: Partial<IReceipt>): Promise<void>

  delete(id: string): Promise<void>

}
