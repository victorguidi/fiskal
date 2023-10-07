import BasicMethods from "../../shared/BasicMethods.shared";
import { IReceipt } from "../model/Receipt.interface";
import ReceiptRepository from "./Receipt.repository";

export default class GetReceiptsByID implements BasicMethods<string, IReceipt> {
  constructor(
    private readonly repository: ReceiptRepository
  ) { }

  async call(receiptId: string): Promise<IReceipt> {
    return await this.repository.getBy(receiptId)
      .then((res: any) => {
        return res
      })
      .catch((err: any) => {
        throw new Error(err)
      })
  }

}
