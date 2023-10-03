import Elysia from "elysia";
import { z } from "zod";
import { Company } from "../../dtos/Company.dto";
import UpdateCompany from "../../core/company/services/UpdateCompany.service";

export default class UpdateCompanyController {
  constructor(
    readonly server: Elysia,
    readonly baseMethod: UpdateCompany
  ) {
    server.put("api/company/update", async ({ query, body }) => {

      const id = z.string().uuid().parse(query.id)

      const zObj = z.object({
        company: z.string().nonempty().optional(),
        email: z.string().email().optional()
      })

      const companySchema = zObj.parse(body);

      await baseMethod.call({ id: id, company: companySchema as Company })
    })
  }
}
