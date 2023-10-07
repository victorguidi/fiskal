import BasicMethods from "../../shared/BasicMethods.shared";
import { TUpdate } from "../../shared/types.shared";
import { IReceipt } from "../model/Receipt.interface";
import ReceiptRepository from "./Receipt.repository";

export default class UpdateReceipt implements BasicMethods<TUpdate<Partial<IReceipt>>, void> {

  constructor(
    private readonly repository: ReceiptRepository
  ) { }

  async call(obj: TUpdate<Partial<IReceipt>>): Promise<void> {

    await this.repository.update(obj.id, obj.obj)
      .then(() => {
        return "Receipt Created"
      })
      .catch((err: any) => {
        throw new Error(err)
      })
  }
}
