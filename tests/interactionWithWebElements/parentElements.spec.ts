import { test, expect } from "@playwright/test";

test.beforeEach("start beforeEach test", async ({ page }) => {
  
  await page.goto("http://localhost:4200/");
  
  await page.getByText("Forms").click();
  
  await page.getByText("Form Layouts").click();
});

test("parentElements", async ({ page }) => {
  
  await page
    .locator("nb-card", { hasText: "Using the grid" })
    .getByRole("textbox", { name: "Email" })
    .click();
  
    await page
    .locator("nb-card", { has: page.locator("#inputEmail") })
    .getByRole("textbox", { name: "Email" })
    .click();
  
    await page
    .locator("nb-card")
    .filter({ hasText: "Basic form" })
    .getByRole("textbox", { name: "Email" })
    .click();
  
    await page
    .locator("nb-card")
    .filter({ has: page.locator(".status-danger") })
    .getByRole("textbox", { name: "Password" })
    .click();
  
    await page
    .locator("nb-card")
    .filter({ has: page.locator(".status-danger") })
    .getByRole("textbox", { name: "Password" })
    .click();
  
    await page
    .locator("nb-card")
    .filter({ has: page.locator("nb-checkbox") })
    .filter({ hasText: "Sign in" })
    .getByRole("textbox", { name: "Email" })
    .click();
});

// ? ******************************************************************************************************

test("parentElements => two", async ({ page }) => {
  

// await page
// .locator("nb-card", { hasText: "Block form" })
// .getByRole("textbox", { name: "Email" })
// .fill("Email");

// await page
// .locator("nb-card", { has: page.locator("#inputEmail") })
// .getByRole("textbox", { name: "First Name" })
// .fill("First Name");
 
// await page
// .locator("nb-card")
// .filter({ hasText: "Form without labels" })
// .getByRole("textbox", { name: "Recipients" })
// .fill("Recipients");

// await page
// .locator("nb-card")
// .filter({ has: page.locator('[class="status-success appearance-filled size-medium shape-rectangle nb-transition"]') })
// .getByRole("textbox", { name: "Subject" })
// .fill("Subject");


await page
.locator("nb-card")
.filter({ has: page.locator("nb-checkbox") })
.filter({ hasText: "Submit" })
.filter({ hasText: "Email address" })
.getByRole("textbox", { name: "Email" })
.fill("Email");
    
});
