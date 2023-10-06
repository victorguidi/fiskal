import BasicMethods from "../../shared/BasicMethods.shared";
import User from "../model/User.interface";
import UserRepository from "./User.repository";

export default class CreateUser implements BasicMethods<User, void> {

  constructor(
    private readonly repository: UserRepository
  ) { }

  async call(obj: User): Promise<void> {
    const { username, email, role } = obj;

    await this.repository.getByEmail(email)
      .then((res: any) => {
        if (res) throw new Error("This email was already rigistered")
      })
      .catch((err: any) => { throw new Error(err) })

    await this.repository.create({ username, email, role })
      .then(() => {
        return "Company Created"
      })
      .catch((err: any) => {
        throw new Error(err)
      })
  }
}
