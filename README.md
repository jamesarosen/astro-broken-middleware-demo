# Astro Breaks Middleware

This demo was created as follows

1. `npm create astro@latest`
1. `npx astro add netlify`
1. modify `astro.config.mjs` to set `edgeMiddleware: true`

At this point, the demo app is working.

This repo then breaks the Netlify build by doing the following

1. add a new `src/lib/a-shared-library.ts`. This file contains only pure
   web runtime code. It has nothing to do with Astro or HTML. It exports a
   single function, `setFooToBar`, that operates on a `Headers`.
1. import `setFooToBar` in both `src/middleware.ts` and
   `src/components/Card.astro`. This causes the Astro component runtime to get
   compiled into the middleware, breaking the build.
