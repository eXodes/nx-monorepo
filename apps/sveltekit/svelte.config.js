import { resolve } from "path";
import preprocess from "svelte-preprocess";
import node from "@sveltejs/adapter-node";

const mode = process.env.NODE_ENV;
const production = mode === "production";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: [
    preprocess({
      sourceMap: !production,
      postcss: {
        configFilePath: resolve("../../postcss.config.cjs"),
      },
      typescript: {
        tsconfigFile: resolve("./tsconfig.app.json"),
      },
    }),
  ],
  compilerOptions: {
    dev: !production,
    css: false,
  },
  kit: {
    adapter: node({
      out: "../../dist/apps/sveltekit",
    }),
    vite: {
      mode,
      resolve: {
        alias: {
          "@nx-monorepo/store": resolve("../../packages/store/src/index.ts"),
          "@nx-monorepo/ui": resolve("../../packages/ui/src/index.ts"),
          "@nx-monorepo/utils": resolve("../../packages/utils/src/index.ts"),
        },
      },
      envPrefix: "DOM_",
    },
  },
};

export default config;
