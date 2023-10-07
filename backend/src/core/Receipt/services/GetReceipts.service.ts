import BasicMethods from "../../shared/BasicMethods.shared";
import { IReceipt } from "../model/Receipt.interface";
import { pages } from "../../shared/types.shared"
import ReceiptRepository from "./Receipt.repository";

export default class GetReceipts implements BasicMethods<pages, IReceipt[]> {
  constructor(
    private readonly repository: ReceiptRepository
  ) { }

  async call(pages: pages): Promise<IReceipt[]> {
    return await this.repository.get(pages.pageN, pages.pageS)
      .then((res: any) => {
        return res
      })
      .catch((err: any) => {
        throw new Error(err)
      })
  }

}
