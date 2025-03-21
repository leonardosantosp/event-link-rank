import { fastifyCors } from '@fastify/cors'
import { fastifySwagger } from '@fastify/swagger'
import { fastifySwaggerUi } from '@fastify/swagger-ui'
import { fastify } from 'fastify'
import {
  type ZodTypeProvider,
  jsonSchemaTransform,
  serializerCompiler,
  validatorCompiler,
} from 'fastify-type-provider-zod'
import { env } from './env.js'
import { accessInviteLinkRoute } from './routes/access-invite-link-route.js'
import { getRankingRoute } from './routes/get-ranking-route.js'
import { getSubscriberInviteCountsRoute } from './routes/get-subscribe-invite-counts-route.js'
import { getSubscriberRankPositionRoute } from './routes/get-subscribe-ranking-position-route.js'
import { getSubscriberInviteLinksRoute } from './routes/get-subscriber-invite-links-route.js'
import { subscribeToEventRoute } from './routes/subscribe-to-event-route.js'

const app = fastify().withTypeProvider<ZodTypeProvider>()

app.setSerializerCompiler(serializerCompiler)
app.setValidatorCompiler(validatorCompiler)

app.register(fastifyCors)

app.register(fastifySwagger, {
  openapi: {
    info: {
      title: 'Nlw Connect',
      version: '0.0.1',
    },
  },
  transform: jsonSchemaTransform,
})

app.register(fastifySwaggerUi, {
  routePrefix: '/docs',
})

app.register(subscribeToEventRoute)
app.register(accessInviteLinkRoute)
app.register(getSubscriberInviteLinksRoute)
app.register(getSubscriberInviteCountsRoute)
app.register(getSubscriberRankPositionRoute)
app.register(getRankingRoute)

app.listen({ port: env.PORT }).then(() => {
  console.log('Http server Running')
})
