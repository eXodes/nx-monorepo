import type { PlaywrightTestConfig } from "@playwright/test";

const config: PlaywrightTestConfig = {
  webServer: {
    command: "nx run sveltekit:preview",
    cwd: "../../",
    port: 3000,
  },
};

export default config;
