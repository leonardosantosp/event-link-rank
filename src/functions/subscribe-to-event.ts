import { eq } from 'drizzle-orm'
import { db } from '../drizzle/client'
import { subscriptions } from '../drizzle/schema/subscriptions'
import { redis } from '../redis/client'

interface SubscribeToEventParams {
  name: string
  email: string
  referrerId?: string | null
}

export async function subscribeToEvent({
  name,
  email,
  referrerId,
}: SubscribeToEventParams) {
  const results = await db
    .select()
    .from(subscriptions)
    .where(eq(subscriptions.email, email))

  if (results.length > 0) {
    return { subscriberId: results[0].id }
  }

  const [{ subscriberId }] = await db
    .insert(subscriptions)
    .values({
      name,
      email,
    })
    .returning({
      subscriberId: subscriptions.id,
    })

  if (referrerId) {
    await redis.zincrby('referral:ranking', 1, referrerId)
  }

  return { subscriberId }
}
