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


// ? ******************************************************************************************************


test("UserFacingLocators.spec => two", async ({ page }) => {
  await page.getByRole("textbox", { name: "Email" }).first().fill("one");
  await page.locator('input[id=exampleInputEmail1][placeholder="Email"]').fill("two");
  await page.getByRole("button", { name: "Sign in" }).nth(1).click();
  await page.locator('button[type="submit"][class="appearance-filled size-medium shape-rectangle status-danger nb-transition"]:text-is("Submit")').click();

  await page.getByLabel("Email").first().fill("AAA");
  await page.getByLabel("Email").nth(2).fill("nth(2)");
  await page.getByLabel('Email', { exact: true }).first().fill('BBB');
  await page.getByLabel("Password").first().fill("BBB");

  await page.getByPlaceholder("Jane Doe").fill('Jane Doe');

  await page.getByText("Using the Grid").click();

  await page.getByTitle("IoT Dashboard").click();

  await page.locator('a[title="IoT Dashboard"]').click();
    
      
  
});
