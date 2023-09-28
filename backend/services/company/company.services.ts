import { db } from "../.."
import { Company } from "../../dtos/company.dto"

export async function GetCompanies(): Promise<Company[]> {

  return await db.query('SELECT id, company, addr, email FROM public."Company";')
    .then(res => {
      return res.rows as Company[]
    })
    .catch((error) => {
      throw new Error(error)
    })

}

export async function GetCompany(): Promise<Company[]> {

  return await db.query('SELECT id, company, addr, email FROM public."Company";')
    .then(res => {
      return res.rows as Company[]
    })
    .catch((error) => {
      throw new Error(error)
    })

}

export async function Create(): Promise<Company[]> {

  return await db.query('SELECT id, company, addr, email FROM public."Company";')
    .then(res => {
      return res.rows as Company[]
    })
    .catch((error) => {
      throw new Error(error)
    })

}

export async function Update(): Promise<Company[]> {

  return await db.query('SELECT id, company, addr, email FROM public."Company";')
    .then(res => {
      return res.rows as Company[]
    })
    .catch((error) => {
      throw new Error(error)
    })

}

export async function Delete(): Promise<Company[]> {

  return await db.query('SELECT id, company, addr, email FROM public."Company";')
    .then(res => {
      return res.rows as Company[]
    })
    .catch((error) => {
      throw new Error(error)
    })

}
