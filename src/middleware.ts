import type { MiddlewareHandler } from 'astro'

const NODE_ENV = import.meta.env.NODE_ENV;

export const onRequest: MiddlewareHandler = async (context, next) => {
  const response = await next()
  response.headers.set('middleware', 'true')
  response.headers.set('NODE_ENV', NODE_ENV);
  return response
}
