import { GetCompanies } from "../services/company/company.services"

export async function GetHelloWorld(): Promise<Response> {

  const companies = await GetCompanies()

  return Response.json(companies)
}
