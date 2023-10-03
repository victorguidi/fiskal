import Elysia from "elysia";
import { z } from "zod";
import GetCompanies from "../../core/company/services/GetCompanies.service";

export default class GetCompaniesController {
  constructor(
    readonly server: Elysia,
    readonly baseMethod: GetCompanies
  ) {
    server.get("api/company", async ({ query }) => {

      if (!query.pageN || !query.pageS) throw new Error("Pages or Size were not provided")

      z.number().int().nonnegative().parse(Number(query.pageN))
      z.number().int().nonnegative().parse(Number(query.pageS))

      return await baseMethod.call({ pageN: +query.pageN, pageS: +query.pageS })
    })
  }
}
