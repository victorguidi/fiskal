import { Elysia } from "elysia";
import CompanyPrismaRepository from "./external/Prisma/CompanyPrisma.repository";
import CreateCompany from "./core/company/services/CreateCompany.service";
import CreateCompanyController from "./adapters/Company/CreateCompany.controller";
import GetByCompanyEmail from "./core/company/services/GetCompanyByEmail.service";
import GetCompanyByEmailController from "./adapters/Company/GetByEmail.controller";

const app = new Elysia()

//--------- Company 
const companyRepository = new CompanyPrismaRepository() // Connections to the DB
const createCompany = new CreateCompany(companyRepository)
const getCompanyByEmail = new GetByCompanyEmail(companyRepository)
new CreateCompanyController(app, createCompany)
new GetCompanyByEmailController(app, getCompanyByEmail)

//--------- Users


//--------- Receipts


//--------- Files

app.listen(process.env.PORT || 5000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
