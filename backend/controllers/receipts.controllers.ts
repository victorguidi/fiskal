export async function GetHelloWorld(): Promise<Response> {
  const body = {
    message: "Hello World"
  }

  return Response.json(body)
}
