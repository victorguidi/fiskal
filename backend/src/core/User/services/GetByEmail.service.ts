import BasicMethods from "../../shared/BasicMethods.shared";
import User from "../model/User.interface";
import UserRepository from "./User.repository";

export default class GetUserByEmail implements BasicMethods<string, User> {

  constructor(
    private readonly repository: UserRepository
  ) { }

  async call(email: string): Promise<User> {
    return await this.repository.getByEmail(email)
      .then((res: any) => {
        if (!res) throw new Error("This email was already rigistered")
        return res
      })
      .catch((err: any) => {
        throw new Error(err)
      })
  }
}
