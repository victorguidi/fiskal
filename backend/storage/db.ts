import { Client } from "pg"

export function ConnectDB(): Client {
  const client = new Client({
    host: process.env.DB_CONN || "localhost",
    user: process.env.DB_USER || "postgres",
    password: process.env.DB_USER || "postgres",
    database: process.env.DB_DB || "postgres"
  })

  client.connect()

  return client
}
