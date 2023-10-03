import { Company } from "@prisma/client";
import BasicMethods from "../../shared/BasicMethods.shared";
import CompanyRepository from "./Company.repository";

type pages = {
  pageN: number
  pageS: number
}

export default class GetCompanies implements BasicMethods<pages, Company[]> {

  constructor(
    private readonly repository: CompanyRepository
  ) { }

  async call(pages: pages): Promise<Company[]> {
    return await this.repository.getCompanies(pages.pageN, pages.pageS)
      .then((res: any) => {
        return res
      })
      .catch((err: any) => { throw new Error(err) })
  }
}
