import Elysia from "elysia";
import { z } from "zod";
import CreateUser from "../../core/User/services/CreateUser.service";
import User, { Role } from "../../core/User/model/User.interface";

export default class CreateUserController {
  constructor(
    readonly server: Elysia,
    readonly baseMethod: CreateUser
  ) {
    server.post("api/user", async ({ body }) => {

      const zObj = z.object({
        username: z.string().nonempty(),
        email: z.string().email(),
        role: z.string()
      })

      const companySchema = zObj.parse(body);

      await baseMethod.call(companySchema as User)
    })
  }
}
