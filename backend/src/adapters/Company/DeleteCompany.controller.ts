import Elysia from "elysia";
import { z } from "zod";
import DeleteCompany from "../../core/company/services/DeleteCompany.service";

export default class DeleteCompanyController {
  constructor(
    readonly server: Elysia,
    readonly baseMethod: DeleteCompany
  ) {
    server.delete("api/company/delete", async ({ query }) => {

      z.string().uuid().parse(query.id)

      if (query.id) return await baseMethod.call(query.id)
      else throw new Error("No Email Provided")
    })
  }
}
