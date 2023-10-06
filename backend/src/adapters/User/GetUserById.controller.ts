import Elysia from "elysia";
import { z } from "zod";
import GetUserById from "../../core/User/services/GetUserById.service";

export default class GetUserByIdController {
  constructor(
    readonly server: Elysia,
    readonly baseMethod: GetUserById
  ) {
    server.get("api/user/byid", async ({ query }) => {

      z.string().uuid().parse(query.id)

      if (query.id) return await baseMethod.call(query.id)
      else throw new Error("No id Provided")
    })
  }
}
