import { test, expect } from "@playwright/test";

test.beforeEach("start beforeEach test", async ({ page }) => {
  await page.goto("http://localhost:4200/");
  await page.getByText("Forms").click();
  await page.getByText("Form Layouts").click();
});

test("LocatorSyntaxRules", async ({ page }) => {
  
  //by tag name
  page.locator("input");
  page.locator("span");
  
  //by id
  await page.locator("#inputEmail1").first().click();
  await page.locator("#inputPassword2").click();
  await page.locator("#nb-global-spinner").click();
  
  //by class
  page.locator(".shape-rectangle");
  page.locator(".input-full-width");
  page.locator(".blob blob-5");

  //by attributeS
  page.locator('[placeholder="Email"]');
  page.locator('[placeholder="Password"]');
  page.locator('[placeholder="First Name"]');
  page.locator('[placeholder="First Name"]');
  page.locator('[placeholder="First Name"]');

  //by class value (full)
  page.locator(
    '[class="input-full-width size-medium status-basic shape-rectangle nb-transition"]'
  );
  page.locator('[class="native-input visually-hidden"]');
  page.locator(
    '[class="input-full-width size-medium status-basic shape-rectangle nb-transition"]'
  );
  page.locator(
    '[class="pace  pace-inactive"]'
  );
  
  //combine different slectors
  page.locator('input[placeholder="Email"].shape-rectangle');
  page.locator('input[type="radio"].native-input visually-hidden');
  page.locator('input[placeholder="Jane Doe"].input-full-width size-medium status-basic shape-rectangle nb-transition');
  page.locator('input[placeholder="Email"][nbinput]');
  //by Xpath (NOT RECOMENDED)
  page.locator('//*[@id="inputEmail1"]');
  //by partial text match
  page.locator(':text("Using")');
  page.locator(':text("Using the")');
  //by exact text match
  page.locator(':text-is("Using the Grid")');
});
