import BasicMethods from "../../shared/BasicMethods.shared";
import CompanyRepository from "./Company.repository";
import { Company } from "../../../dtos/Company.dto";

type TUpdateCompany = {
  id: string,
  company: Partial<Company>

}

export default class UpdateCompany implements BasicMethods<TUpdateCompany, void> {

  constructor(
    private readonly repository: CompanyRepository
  ) { }

  async call(obj: TUpdateCompany): Promise<void> {
    const { company, email } = obj.company;

    await this.repository.updateCompany(obj.id, { company, email })
      .then(() => {
        return {
          message: "Company Updated",
          newObj: obj
        }
      })
      .catch((err: any) => {
        throw new Error(err)
      })
  }
}
