import { expect, test } from "@playwright/test";

test.describe("App", () => {
  test("should has app title", async ({ page }) => {
    await page.goto("/");
    const appName = process.env.APP_NAME ?? "SvelteKit with NX";

    expect(await page.content()).toContain(`<title>${appName}</title>`);
  });
});
