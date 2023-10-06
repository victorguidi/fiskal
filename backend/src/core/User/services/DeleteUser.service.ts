import BasicMethods from "../../shared/BasicMethods.shared";
import UserRepository from "./User.repository";

export default class DeleteUser implements BasicMethods<string, void>{
  constructor(
    private readonly repository: UserRepository
  ) { }

  async call(id: string): Promise<void> {
    await this.repository.delete(id)
      .then(() => {
        return {
          message: `User ${id} was deleted`
        }
      })
      .catch((err: any) => {
        throw new Error(err)
      })
  }
}
