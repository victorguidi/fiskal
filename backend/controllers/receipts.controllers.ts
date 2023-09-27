import { Client } from "pg"

interface Company {
  id?: string
  company: string
  addr?: string
  email: string
}

export async function GetHelloWorld(db: Client): Promise<Response> {

  const companies = await db.query('SELECT id, company, addr, email FROM public."Company";')
    .then(res => {
      return res.rows as Company[]
    })
    .catch((error)=> {
      console.log(error)
    })

  return Response.json(companies)
}
