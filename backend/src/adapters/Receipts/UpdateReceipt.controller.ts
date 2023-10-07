import Elysia from "elysia";
import { z } from "zod";
import { IReceipt } from "../../core/Receipt/model/Receipt.interface";
import UpdateReceipt from "../../core/Receipt/services/UpdateReceipt.service";

export default class UpdateReceiptController {
  constructor(
    readonly server: Elysia,
    readonly baseMethod: UpdateReceipt
  ) {
    server.put("api/receipt", async ({ query, body }) => {

      if (!query.id) throw new Error("No id was provided")

      z.string().uuid().parse(query.id)

      const zObj = z.object({
        receiptId: z.string().optional(),
        whoRequestsId: z.string().uuid().optional(),
        whoBelongsId: z.string().uuid().optional()
      })

      const receiptSchema = zObj.parse(body);

      await baseMethod.call({ id: query.id, obj: receiptSchema as IReceipt })
    })
  }
}
