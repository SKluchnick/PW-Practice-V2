import { test, expect } from "@playwright/test";

test.beforeEach("start beforeEach test", async ({ page }) => {
  await page.goto("http://localhost:4200/");
  
  
}); 



test.describe("test suite 1", () => {

  test.beforeEach("start beforeEach test", async ({ page }) => {
      await page.getByText("Forms").click();
    
  }); 
  test("the first test", async ({ page }) => {
    await page.getByText("Form Layouts").click();
    
    // Expect a title "to contain" a substring.
    // await expect(page).toHaveTitle(/Playwright/);
  });

  test("navigate to datepicker page", async ({ page }) => {
      await page.getByText("Datepicker").click();
    
    // Expect a title "to contain" a substring.
    // await expect(page).toHaveTitle(/Playwright/);
  });
});

test.skip("the second test", async ({ page }) => {
  await page.getByText("Form Layouts").click();
  
  // Expect a title "to contain" a substring.
  // await expect(page).toHaveTitle(/Playwright/);
});

test("navigate to datepicker page", async ({ page }) => {
    await page.getByText("Datepicker").click();
  
  // Expect a title "to contain" a substring.
  // await expect(page).toHaveTitle(/Playwright/);
});

