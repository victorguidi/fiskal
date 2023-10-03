import Elysia from "elysia";
import { z } from "zod";
import GetByCompanyEmail from "../../core/company/services/GetCompanyByEmail.service";

export default class GetCompanyByEmailController {
  constructor(
    readonly server: Elysia,
    readonly baseMethod: GetByCompanyEmail
  ) {
    server.get("api/company", async ({ query }) => {

      z.string().email().parse(query.email)

      if (query.email) return await baseMethod.call(query.email)
      else throw new Error("No Email Provided")
    })
  }
}
