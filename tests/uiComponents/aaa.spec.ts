import { test, expect } from "@playwright/test";

test.beforeEach("start beforeEach test", async ({ page }) => {
  await page.goto("http://localhost:4200/");
});
