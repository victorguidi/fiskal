import Elysia from "elysia";
import CreateCompany from "../../core/company/services/CreateCompany.service";
import { z } from "zod";
import { Company } from "../../dtos/Company.dto";

export default class CreateCompanyController {
  constructor(
    readonly server: Elysia,
    readonly baseMethod: CreateCompany
  ) {
    server.post("api/company", async ({ body }) => {

      const zObj = z.object({
        company: z.string().nonempty(),
        email: z.string().email()
      })

      const companySchema = zObj.parse(body);

      await baseMethod.call(companySchema as Company)
    })
  }
}
