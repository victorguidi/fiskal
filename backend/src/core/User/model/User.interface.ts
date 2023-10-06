export enum Role {
  USER,
  ADMIN
}

export default interface User {
  id?: string
  username: string
  email: string
  role: 'USER' | 'ADMIN'
  createdAt?: Date
  updatedAt?: Date
}
