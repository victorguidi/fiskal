import BasicMethods from "../../shared/BasicMethods.shared";
import CompanyRepository from "./Company.repository";

export default class DeleteCompany implements BasicMethods<string, void> {

  constructor(
    private readonly repository: CompanyRepository
  ) { }

  async call(id: string): Promise<void> {
    await this.repository.deleteCompany(id)
      .catch((err: any) => { throw new Error(err) })
  }
}
