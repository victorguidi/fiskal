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
import GetUsers from "./core/User/services/GetUsers.service";
import GetUserById from "./core/User/services/GetUserById.service";
import GetUsersController from "./adapters/User/GetUsers.controller";
import GetUserByIdController from "./adapters/User/GetUserById.controller";
import UpdateUser from "./core/User/services/UpdateUser.service";
import DeleteUser from "./core/User/services/DeleteUser.service";
import DeleteUserController from "./adapters/User/DeleteUser.controller";
import UpdateUserController from "./adapters/User/UpdateUser.controller";
import ReceiptPrismaRepository from "./external/Prisma/ReceiptPrisma.repository";
import CreateReceipt from "./core/Receipt/services/CreateReceipt.service";
import GetReceipts from "./core/Receipt/services/GetReceipts.service";
import CreateReceiptController from "./adapters/Receipts/CreateReceipt.controller";
import GetReceiptController from "./adapters/Receipts/GetReceipts.controller";

// TODO: Better Error messages
// TODO: Better Return messages

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
const getUsers = new GetUsers(userRepository)
const getUserByEmail = new GetUserByEmail(userRepository)
const getUserById = new GetUserById(userRepository)
const updateUser = new UpdateUser(userRepository)
const deleteUser = new DeleteUser(userRepository)

new CreateUserController(app, createUser)
new GetUsersController(app, getUsers)
new GetUserByEmailController(app, getUserByEmail)
new GetUserByIdController(app, getUserById)
new UpdateUserController(app, updateUser)
new DeleteUserController(app, deleteUser)

//--------- Receipts
const receiptRepository = new ReceiptPrismaRepository()

const createReceipt = new CreateReceipt(receiptRepository)
const getReceipts = new GetReceipts(receiptRepository)

new CreateReceiptController(app, createReceipt)
new GetReceiptController(app, getReceipts)


//--------- Files

app.listen(process.env.PORT || 5000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
