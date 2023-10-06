import BasicMethods from "../../shared/BasicMethods.shared";
import { pages } from "../../shared/types.shared";
import User from "../model/User.interface";
import UserRepository from "./User.repository";

export default class GetUsers implements BasicMethods<pages, User[]> {
  constructor(
    private readonly repository: UserRepository
  ) { }

  async call(pages: pages): Promise<User[]> {
    return await this.repository.get(pages.pageN, pages.pageS)
      .then((res: any) => {
        return res
      })
      .catch((err: any) => {
        throw new Error(err)
      })
  }
}
