import Elysia from "elysia";
import { z } from "zod";
import CreateReceipt from "../../core/Receipt/services/CreateReceipt.service";
import { IReceipt } from "../../core/Receipt/model/Receipt.interface";

export default class CreateReceiptController {
  constructor(
    readonly server: Elysia,
    readonly baseMethod: CreateReceipt
  ) {
    server.post("api/receipt", async ({ body }) => {

      const zObj = z.object({
        receiptId: z.string().nonempty(),
        whoRequestsId: z.string().uuid(),
        whoBelongsId: z.string().uuid()
      })

      const companySchema = zObj.parse(body);

      await baseMethod.call(companySchema as IReceipt)
    })
  }
}
