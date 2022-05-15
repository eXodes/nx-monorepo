import type { RequestHandler } from "@sveltejs/kit";
import { api } from "./_api";

export const get: RequestHandler = async () => {
  const { app_name } = await api<{ app_name: string }>("app-name");

  return {
    status: 200,
    body: {
      appName: app_name,
    },
  };
};
