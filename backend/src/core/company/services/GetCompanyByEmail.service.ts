import { Company } from "@prisma/client";
import BasicMethods from "../../shared/BasicMethods.shared";
import CompanyRepository from "./Company.repository";

export default class GetByCompanyEmail implements BasicMethods<string, Company> {

  constructor(
    private readonly repository: CompanyRepository
  ) { }

  async call(email: string): Promise<Company> {
    return await this.repository.getByEmail(email)
      .then((res: any) => {
        if (!res) throw new Error("This email was already rigistered")
        return res
      })
      .catch((err: any) => { throw new Error(err) })
  }
}
