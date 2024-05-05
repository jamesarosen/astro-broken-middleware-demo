import type { MiddlewareHandler } from 'astro'

export const onRequest: MiddlewareHandler = async (context, next) => {
  const response = await next()
  response.headers.set('middleware', 'true')
  return response
}
