import { Elysia } from "elysia";
import CompanyPrismaRepository from "./external/Prisma/CompanyPrisma.repository";
import CreateCompany from "./core/company/services/CreateCompany.service";
import CompanyController from "./adapters/Company/Company.controller";

const app = new Elysia()

const companyRepository = new CompanyPrismaRepository()
const createCompany = new CreateCompany(companyRepository)
new CompanyController(app, createCompany)

app.listen(5000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
