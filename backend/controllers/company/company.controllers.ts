import { Company } from "./company.dto"

export async function GetCompanyInfo(): Promise<Response> {
  const body = {
    message: "Hello World"
  }

  return Response.json(body)
}

export async function CreateCompay(body: Company): Promise<void> {
  console.log(body)
}

export async function UpdateCompany(id: string, body: Company): Promise<void> {
  console.log(id, body)
}

