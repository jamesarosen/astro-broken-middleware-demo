import { s as setFooToBar } from './chunks/pages/index_D1ekVaaF.mjs';
import '@astrojs/internal-helpers/path';
import 'cookie';

const onRequest$1 = async (context, next) => {
  const response = await next();
  response.headers.set("middleware", "true");
  setFooToBar(response.headers);
  return response;
};

function sequence(...handlers) {
  const filtered = handlers.filter((h) => !!h);
  const length = filtered.length;
  if (!length) {
    const handler = defineMiddleware((context, next) => {
      return next();
    });
    return handler;
  }
  return defineMiddleware((context, next) => {
    return applyHandle(0, context);
    function applyHandle(i, handleContext) {
      const handle = filtered[i];
      const result = handle(handleContext, async () => {
        if (i < length - 1) {
          return applyHandle(i + 1, handleContext);
        } else {
          return next();
        }
      });
      return result;
    }
  });
}

function defineMiddleware(fn) {
  return fn;
}

const onRequest = sequence(
	
	onRequest$1
	
);

export { onRequest };
