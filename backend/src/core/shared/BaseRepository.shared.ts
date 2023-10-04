export default interface BaseRepository<T> {

  create(company: T): Promise<void>

  get(pageN: number, pageS: number): Promise<T[]>

  getById(id: string): Promise<T>

  getByEmail(email: string): Promise<T>

  update(id: string, company: Partial<T>): Promise<void>

  delete(id: string): Promise<void>

}
