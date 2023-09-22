// - /getSuppliers/@Query(supplier, date of creation, need approval)
// - /getFiles/@Query(supplier, date of creation, need approval)

import { Supplier } from "./suppliers.dto";

export async function CreateSupplier(body: Supplier): Promise<void> {
  console.log(body)
}

export async function UpdateSupplier(id: string, body: Supplier): Promise<void> {
  console.log(id, body)
}

export async function GetSupplierInfo(): Promise<Response> {
  const body = {
    id: "hellooo"
  }
  return Response.json(body)
}
