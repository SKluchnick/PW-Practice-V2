import { test, expect } from "@playwright/test";

test.beforeEach("start beforeEach test", async ({ page }) => {
  await page.goto("http://localhost:4200/");

  await page.getByText("Forms").click();

  await page.getByText("Form Layouts").click();
});

test("ChildElements", async ({ page }) => {
  await page.locator('nb-card nb-radio :text-is("Option 1")').click();

  // the same

  await page
    .locator("nb-card")
    .locator("nb-radio")
    .locator(':text-is("Option 2")')
    .click();


  await page
    .locator("nb-card")
    .getByRole("button", { name: "Sign in" })
    .first()
    .click();

  await page.locator("nb-card").nth(3).getByRole("button").click();
});


// ? ******************************************************************************************************

test("ChildElements => two", async ({ page }) => {
  await page.locator('nb-card nb-radio :text-is("Option 1")').click()

  await page
    .locator("nb-card", { hasText: "Using the Grid" })
    .getByRole("radio", { name: "Option 1" })
    .check({ force: true });
  await page.getByRole("radio", { name: "Option 1" }).check({ force: true });

  await page.locator("nb-card").locator("nb-radio").getByRole("radio", { name: "Option 1" }).check({ force: true });
  await page.locator('span[class="text"]:text-is("Option 1")').check({ force: true });
});

// ? ******************************************************************************************************

test("ChildElements => three", async ({ page }) => {
  await page
  .locator("nb-card")
  .getByRole("button", { name: "Sign in" })
  .first()
  .click();

await page.locator("nb-card").nth(3).getByRole("button").click();
});
