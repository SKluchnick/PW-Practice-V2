import { test, expect } from "@playwright/test";

test.beforeEach("start beforeEach test", async ({ page }) => {
  await page.goto("http://localhost:4200/");
  await page.getByText("Forms").click();
  await page.getByText("Form Layouts").click();
});

test("UserFacingLocators.spec", async ({ page }) => {
  await page.getByRole("textbox", { name: "Email" }).first().click();
  await page.getByRole("textbox", { name: "Jane Doe" }).click();
  await page.getByRole("button", { name: "Sign in" }).first().click();
  await page.getByRole("button", { name: "Submit" }).first().click();
  await page.getByLabel("Email").first().click();
  await page.getByLabel("Password").first().click();
  await page.getByLabel("Password").nth(1).click();
  await page.getByPlaceholder("Jane Doe").click();
  await page.getByPlaceholder("Recipients").click();
  await page.getByText("Using the Grid").click();
  await page.getByText("Inline form").click();
  await page.getByTitle("IoT Dashboard").click();
  await page.getByTitle("Forms").click();
});
