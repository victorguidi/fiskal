import BasicMethods from "../../shared/BasicMethods.shared";
import CompanyRepository from "./Company.repository";
import { Company } from "../../../dtos/Company.dto";

export default class CreateCompany implements BasicMethods<Company, void> {

  constructor(
    private readonly repository: CompanyRepository
  ) { }

  async call(obj: Company): Promise<void> {
    const { company, email } = obj;

    await this.repository.getByEmail(email)
      .then((res: any) => {
        if (res) throw new Error("This email was already rigistered")
      })
      .catch((err: any) => { throw new Error(err) })

    await this.repository.createCompany({ company, email })
      .then((res: any) => {
        return "Company Created"
      })
      .catch((err: any) => {
        throw new Error(err)
      })
  }
}
