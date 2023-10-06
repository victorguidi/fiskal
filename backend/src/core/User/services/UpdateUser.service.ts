import BasicMethods from "../../shared/BasicMethods.shared";
import User from "../model/User.interface";
import UserRepository from "./User.repository";

type TUser = {
  id: string,
  user: Partial<User>
}


export default class UpdateUser implements BasicMethods<TUser, void> {
  constructor(
    private readonly repository: UserRepository
  ) { }

  async call(obj: TUser): Promise<void> {

    const { id, user } = obj;

    await this.repository.update(id, user)
      .then(() => {
        return {
          message: "User Updated",
          newObj: obj
        }
      })
      .catch((err: any) => {
        throw new Error(err)
      })
  }
}
