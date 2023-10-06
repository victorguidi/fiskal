import { Elysia } from "elysia";
import CompanyPrismaRepository from "./external/Prisma/CompanyPrisma.repository";
import CreateCompany from "./core/company/services/CreateCompany.service";
import CreateCompanyController from "./adapters/Company/CreateCompany.controller";
import GetByCompanyEmail from "./core/company/services/GetCompanyByEmail.service";
import GetCompanyByEmailController from "./adapters/Company/GetByEmail.controller";
import GetCompanies from "./core/company/services/GetCompanies.service";
import GetCompaniesController from "./adapters/Company/GetCompanies.controller";
import GetCompanyById from "./core/company/services/GetCompanyById.service";
import GetCompanyByIdController from "./adapters/Company/GetCompanyById.controller";
import DeleteCompany from "./core/company/services/DeleteCompany.service";
import DeleteCompanyController from "./adapters/Company/DeleteCompany.controller";
import UpdateCompany from "./core/company/services/UpdateCompany.service";
import UpdateCompanyController from "./adapters/Company/UpdateCompany.controller";
import UserPrismaRepository from "./external/Prisma/UserPrisma.repository";
import CreateUser from "./core/User/services/CreateUser.service";
import CreateUserController from "./adapters/User/CreateUser.controller";
import GetUserByEmail from "./core/User/services/GetByEmail.service";
import GetUserByEmailController from "./adapters/User/GetUserByEmail.controller";

const app = new Elysia()

//--------- Company 
const companyRepository = new CompanyPrismaRepository() // Connections to the DB

const createCompany = new CreateCompany(companyRepository)
const getCompanyByEmail = new GetByCompanyEmail(companyRepository)
const getCompanies = new GetCompanies(companyRepository)
const getCompanyById = new GetCompanyById(companyRepository)
const updateCompany = new UpdateCompany(companyRepository)
const deleteCompany = new DeleteCompany(companyRepository)

new CreateCompanyController(app, createCompany)
new GetCompaniesController(app, getCompanies)
new GetCompanyByIdController(app, getCompanyById)
new GetCompanyByEmailController(app, getCompanyByEmail)
new UpdateCompanyController(app, updateCompany)
new DeleteCompanyController(app, deleteCompany)

//--------- Users
const userRepository = new UserPrismaRepository() // Connections to the DB

const createUser = new CreateUser(userRepository)
const getUserByEmail = new GetUserByEmail(userRepository)

new CreateUserController(app, createUser)
new GetUserByEmailController(app, getUserByEmail)

//--------- Receipts


//--------- Files

app.listen(process.env.PORT || 5000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
