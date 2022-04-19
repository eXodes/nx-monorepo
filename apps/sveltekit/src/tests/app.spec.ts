import { expect, test } from "@playwright/test";

test.describe("App", () => {
  test("should has app title", async ({ page }) => {
    await page.goto("/");
    const appName = "NX-powered Applications";

    expect(await page.content()).toContain(`<title>${appName}</title>`);
  });
});
