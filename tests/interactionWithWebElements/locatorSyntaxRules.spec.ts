import { test, expect } from "@playwright/test";

test.beforeEach("start beforeEach test", async ({ page }) => {
  await page.goto("http://localhost:4200/");
  await page.getByText("Forms").click();
  await page.getByText("Form Layouts").click();
});

test("LocatorSyntaxRules", async ({ page }) => {
  //by tag name
  page.locator('input');
  //by id
  await page.locator('#inputEmail1').first().click();
   //by class
   page.locator('.shape-rectangle');
    //by attributeS
   page.locator('[placeholder="Email"]')
    //by class value (full)
    page.locator('[class="input-full-width size-medium status-basic shape-rectangle nb-transition"]')
    //combine different slectors
    page.locator('input[placeholder="Email"].shape-rectangle')
     //by Xpath (NOT RECOMENDED)
    page.locator('//*[@id="inputEmail1"]')
     //by partial text match
     page.locator(':text("Using")')
    //by exact text match
    page.locator(':text-is("Using the Grid")')
});
