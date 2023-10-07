import BasicMethods from "../../shared/BasicMethods.shared";
import { IReceipt } from "../model/Receipt.interface";
import ReceiptRepository from "./Receipt.repository";

export default class GetReceiptsById implements BasicMethods<string, IReceipt> {
  constructor(
    private readonly repository: ReceiptRepository
  ) { }

  async call(id: string): Promise<IReceipt> {
    return await this.repository.getById(id)
      .then((res: any) => {
        return res
      })
      .catch((err: any) => {
        throw new Error(err)
      })
  }

}
