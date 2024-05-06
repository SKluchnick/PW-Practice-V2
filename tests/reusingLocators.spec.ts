import { test, expect } from "@playwright/test";

test.beforeEach("start beforeEach test", async ({ page }) => {
  await page.goto("http://localhost:4200/");
  await page.getByText("Forms").click();
  await page.getByText("Form Layouts").click();
});

test("reusingLocators.spec", async ({ page }) => {
  const basicForm = page.locator("nb-card").filter({ hasText: "Basic form" });
  const emailField = basicForm.getByRole("textbox", { name: "Email" });
  
  await emailField.fill("email@email.com");
       
  await basicForm.getByRole("textbox", { name: "Password" })
  .fill("email@email.com");
    
  await basicForm.getByRole("button").click();
  await basicForm.locator("button").click();

  await expect(emailField).toHaveValue('email@email.com')
});
