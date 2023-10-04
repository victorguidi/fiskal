import BaseRepository from "../../shared/BaseRepository.shared"
import User from "../model/User.interface"

export default interface UserRepository extends BaseRepository<User> {

  create(user: User): Promise<void>

  get(pageN: number, pageS: number): Promise<User[]>

  getById(id: string): Promise<User>

  getByEmail(email: string): Promise<User>

  update(id: string, user: Partial<User>): Promise<void>

  delete(id: string): Promise<void>

}
