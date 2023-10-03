import Company from "../model/Company.interface"

export default interface CompanyRepository {

  createCompany(company: Company): Promise<void>

  getCompanies(pageN: number, pageS: number): Promise<Company[]>

  getById(id: string): Promise<Company>

  getByEmail(email: string): Promise<Company>

  updateCompany(id: string, company: Partial<Company>): Promise<void>

  deleteCompany(id: string): Promise<void>

}
