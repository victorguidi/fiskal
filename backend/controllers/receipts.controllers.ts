import { Client } from "pg"

export async function GetHelloWorld(db: Client): Promise<Response> {
  const body = {
    message: "Hello World"
  }

  return Response.json(body)
}
