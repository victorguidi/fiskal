import { Company } from "@prisma/client";
import BasicMethods from "../../shared/BasicMethods.shared";
import CompanyRepository from "./Company.repository";

export default class GetCompanyById implements BasicMethods<string, Company> {

  constructor(
    private readonly repository: CompanyRepository
  ) { }

  async call(id: string): Promise<Company> {
    return await this.repository.getById(id)
      .then((res: any) => {
        if (!res) throw new Error("No company found with this ID")
        return res
      })
      .catch((err: any) => { throw new Error(err) })
  }
}
