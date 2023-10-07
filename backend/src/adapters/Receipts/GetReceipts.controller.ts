import Elysia from "elysia";
import { z } from "zod";
import GetReceipts from "../../core/Receipt/services/GetReceipts.service";

export default class GetReceiptController {
  constructor(
    readonly server: Elysia,
    readonly baseMethod: GetReceipts
  ) {
    server.get("api/receipt", async ({ query }) => {

      if (!query.pageN || !query.pageS) throw new Error("No pages provided")

      z.number().nonnegative().parse(+query.pageN)
      z.number().nonnegative().parse(+query.pageS)

      return await baseMethod.call({ pageN: +query.pageN, pageS: +query.pageS })
    })
  }
}
