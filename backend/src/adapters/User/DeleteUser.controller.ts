import Elysia from "elysia";
import { z } from "zod";
import DeleteUser from "../../core/User/services/DeleteUser.service";

export default class DeleteUserController {
  constructor(
    readonly server: Elysia,
    readonly baseMethod: DeleteUser
  ) {
    server.delete("api/user", async ({ query }) => {

      z.string().uuid().parse(query.id)

      if (query.id) return await baseMethod.call(query.id)
      else throw new Error("No id Provided")
    })
  }
}
