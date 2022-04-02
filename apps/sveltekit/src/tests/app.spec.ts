import { expect, test } from "@playwright/test";

test("Page has page name", async ({ page }) => {
  await page.goto("/");

  expect(await page.content()).toContain(process.env.DOM_APP_NAME);
});
