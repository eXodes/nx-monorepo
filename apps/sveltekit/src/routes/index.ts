import type { RequestHandler } from "@sveltejs/kit";

export const get: RequestHandler = () => {
  const appName = process.env.APP_NAME ?? "SvelteKit with NX";

  return {
    status: 200,
    body: {
      appName,
    },
  };
};
