import Elysia from "elysia";
import { z } from "zod";
import GetReceiptsById from "../../core/Receipt/services/GetReceiptsByRID.service";

export default class GetReceiptByIdController {
  constructor(
    readonly server: Elysia,
    readonly baseMethod: GetReceiptsById
  ) {
    server.get("api/receipt/byid", async ({ query }) => {

      if (!query.id) throw new Error("No receiptid provided")

      z.string().parse(query.id)

      return await baseMethod.call(query.id)
    })
  }
}
