import Elysia from "elysia";
import { z } from "zod";
import GetUsers from "../../core/User/services/GetUsers.service";

export default class GetUsersController {
  constructor(
    readonly server: Elysia,
    readonly baseMethod: GetUsers
  ) {
    server.get("api/user", async ({ query }) => {

      if (!query.pageN || !query.pageS) throw new Error("Pages or Size were not provided")

      z.number().int().nonnegative().parse(Number(query.pageN))
      z.number().int().nonnegative().parse(Number(query.pageS))

      return await baseMethod.call({ pageN: +query.pageN, pageS: +query.pageS })
    })
  }
}
