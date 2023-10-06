import Elysia from "elysia";
import { z } from "zod";
import UpdateUser from "../../core/User/services/UpdateUser.service";
import User from "../../core/User/model/User.interface";

export default class UpdateUserController {
  constructor(
    readonly server: Elysia,
    readonly baseMethod: UpdateUser
  ) {
    server.put("api/user", async ({ query, body }) => {

      if (!query.id) throw new Error("No Id provided")

      z.string().uuid().parse(query.id)

      const zObj = z.object({
        username: z.string().nonempty(),
        email: z.string().email(),
        role: z.string()
      })

      const companySchema = zObj.parse(body);

      await baseMethod.call({ id: query.id, user: companySchema as User })
    })
  }
}
