import { test, expect } from "@playwright/test";

test.beforeEach("start beforeEach test", async ({ page }) => {
  await page.goto("http://localhost:4200/");
  await page.getByText("Forms").click();
  await page.getByText("Form Layouts").click();
});

test("LocatorSyntaxRules", async ({ page }) => {
  //by tag name
  page.locator('input');
  page.locator('span');
  //by id
  await page.locator('#inputEmail1').first().click();
  await page.locator('#inputPassword2');
   //by class
   page.locator('.shape-rectangle');
   page.locator('.input-full-width')
    //by attributeS
   page.locator('[placeholder="Email"]')
   page.locator('[placeholder="Password"]')
    //by class value (full)
    page.locator('[class="input-full-width size-medium status-basic shape-rectangle nb-transition"]')
    page.locator('[class="native-input visually-hidden"]')
    //combine different slectors
    page.locator('input[placeholder="Email"].shape-rectangle')
    page.locator('input[type="radio"].native-input visually-hidden')
     //by Xpath (NOT RECOMENDED)
    page.locator('//*[@id="inputEmail1"]')
     //by partial text match
     page.locator(':text("Using")')
    //by exact text match
    page.locator(':text-is("Using the Grid")')
});
