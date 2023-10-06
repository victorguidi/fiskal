import Elysia from "elysia";
import { z } from "zod";
import GetUserByEmail from "../../core/User/services/GetByEmail.service";

export default class GetUserByEmailController {
  constructor(
    readonly server: Elysia,
    readonly baseMethod: GetUserByEmail
  ) {
    server.get("api/user/byemail", async ({ query }) => {

      z.string().email().parse(query.email)

      if (query.email) return await baseMethod.call(query.email)
      else throw new Error("No Email Provided")
    })
  }
}
