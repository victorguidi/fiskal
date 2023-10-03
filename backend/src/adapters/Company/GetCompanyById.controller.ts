import Elysia from "elysia";
import { z } from "zod";
import GetCompanyById from "../../core/company/services/GetCompanyById.service";

export default class GetCompanyByIdController {
  constructor(
    readonly server: Elysia,
    readonly baseMethod: GetCompanyById
  ) {
    server.get("api/company/byid", async ({ query }) => {

      z.string().uuid().parse(query.id)

      if (query.id) return await baseMethod.call(query.id)
      else throw new Error("No ID Provided")
    })
  }
}
