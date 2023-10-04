
enum Role {
  USER,
  ADMIN
}

export type User = {
  username: string
  email: string
  role: Role
}
