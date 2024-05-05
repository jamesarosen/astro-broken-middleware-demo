# Astro Breaks Middleware

This demo was created as follows

1. `npm create astro@latest`
1. `npx astro add netlify`
1. modify `astro.config.mjs` to set `edgeMiddleware: true`

At this point, the demo app is working.

This repo then breaks the Netlify build by adding an `import.meta.env`
reference in the middleware. Astro compiles this to `process.env`, but that
doesn't exist in Netlify's edge middleware builder.
