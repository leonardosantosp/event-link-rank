import { drizzle } from 'drizzle-orm/postgres-js'
import postgres from 'postgres'
import { env } from '../env.js'
import { subscriptions } from './schema/subscriptions.js'

export const pg = postgres(env.POSTGRES_URL)
export const db = drizzle(pg, {
  schema: {
    subscriptions,
  },
})
