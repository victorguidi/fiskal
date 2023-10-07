import Elysia from "elysia";
import { z } from "zod";
import GetReceiptsByRID from "../../core/Receipt/services/GetReceiptsByRID.service";

export default class GetReceiptByIdController {
  constructor(
    readonly server: Elysia,
    readonly baseMethod: GetReceiptsByRID
  ) {
    server.get("api/receipt/receiptid", async ({ query }) => {

      if (!query.receiptid) throw new Error("No receiptid provided")

      z.string().parse(query.receiptid)

      return await baseMethod.call(query.receiptid)
    })
  }
}
