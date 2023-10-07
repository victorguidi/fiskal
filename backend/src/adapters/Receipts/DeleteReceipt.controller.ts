import Elysia from "elysia";
import { z } from "zod";
import DeleteReceipt from "../../core/Receipt/services/DeleteReceipt.service";

export default class DeleteReceiptController {
  constructor(
    readonly server: Elysia,
    readonly baseMethod: DeleteReceipt
  ) {
    server.delete("api/receipt", async ({ query }) => {

      if (!query.id) throw new Error("No id provided")

      z.string().parse(query.id)

      return await baseMethod.call(query.id)
    })
  }
}
