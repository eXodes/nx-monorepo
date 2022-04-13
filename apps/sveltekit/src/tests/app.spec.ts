import { expect, test } from "@playwright/test";

test.describe("App", () => {
  test("should has app title", async ({ page }) => {
    await page.goto("/");

    expect(await page.content()).toContain(
      `<title>${process.env.DOM_APP_NAME}</title>`
    );
  });
});
