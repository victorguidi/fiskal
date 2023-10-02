import Company from "../model/Company.interface"

export default interface CompanyRepository {

  createCompany(company: Company): Promise<void>

  getCompanies(): Promise<Company[]>

  getById(id: string): Promise<Company>

  getByEmail(email: string): Promise<Company>

  updateCompany(): Promise<void>

  deleteCompany(): Promise<void>

}
