
			import { onRequest } from "/Users/jamesrosen/Code/shaggy-spiral/.netlify/functions-internal/ssr/middleware.mjs";
			import { createContext, trySerializeLocals } from 'astro/middleware';

			export default async (request, context) => {
				const ctx = createContext({ 
					request,
					params: {}
				});
				ctx.locals = { netlify: { context } }
				const next = () => {
					const { netlify, ...otherLocals } = ctx.locals;
					request.headers.set("x-astro-locals", trySerializeLocals(otherLocals));
					request.headers.set("x-astro-middleware-secret", "33d13d3f-5cb5-4f1a-914e-f98b2dee0844");
					return context.next();
				};
			
				return onRequest(ctx, next);
			}

			export const config = {
				name: "Astro Middleware",
				generator: "@astrojs/netlify@5.2.0",
				path: "/*", excludedPath: ["/_astro/*", "/.netlify/images/*"]
			};
			