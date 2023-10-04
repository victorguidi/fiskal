enum Role {
  USER,
  ADMIN
}

export default interface User {
  id?: string
  username: string
  email: string
  role: Role
  createdAt?: Date
  updatedAt?: Date
}
