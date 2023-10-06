import BasicMethods from "../../shared/BasicMethods.shared";
import User from "../model/User.interface";
import UserRepository from "./User.repository";

export default class GetUserById implements BasicMethods<string, User> {

  constructor(
    private readonly repository: UserRepository
  ) { }

  async call(id: string): Promise<User> {
    return await this.repository.getById(id)
      .then((res: any) => {
        if (!res) throw new Error("There is no user with this ID")
        return res
      })
      .catch((err: any) => {
        throw new Error(err)
      })
  }
}

