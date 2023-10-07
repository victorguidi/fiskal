import BasicMethods from "../../shared/BasicMethods.shared";
import { IReceipt } from "../model/Receipt.interface";
import ReceiptRepository from "./Receipt.repository";

export default class CreateReceipt implements BasicMethods<IReceipt, void> {

  constructor(
    private readonly repository: ReceiptRepository
  ) { }

  async call(obj: IReceipt): Promise<void> {
    const { receiptId, whoRequests, whoBelongs } = obj;

    await this.repository.getBy(receiptId)
      .then((res: any) => {
        if (res) throw new Error("This Receipt was already rigistered")
      })
      .catch((err: any) => { throw new Error(err) })

    await this.repository.create({ receiptId, whoRequests, whoBelongs })
      .then(() => {
        return "Receipt Created"
      })
      .catch((err: any) => {
        throw new Error(err)
      })
  }
}
