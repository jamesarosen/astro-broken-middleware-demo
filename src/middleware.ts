import type { MiddlewareHandler } from 'astro'
import { setFooToBar } from './lib/a-shared-library'

export const onRequest: MiddlewareHandler = async (context, next) => {
  const response = await next()
  response.headers.set('middleware', 'true')
  setFooToBar(response.headers);
  return response
}
