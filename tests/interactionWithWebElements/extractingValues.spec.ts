import { test, expect } from "@playwright/test";

test.beforeEach("start beforeEach test", async ({ page }) => {
  await page.goto("http://localhost:4200/");
  await page.getByText("Forms").click();
  await page.getByText("Form Layouts").click();
});

test("extractingValues", async ({ page }) => {
  const basicForm = page.locator("nb-card").filter({ hasText: "Basic form" });
    // single text values
  const buttonText = await basicForm.locator("button").textContent();
  expect(buttonText).toEqual("Submit");

  // all text values
  const allRadioButtonsLabels = await page
    .locator("nb-radio")
    .allTextContents();
  
    expect(allRadioButtonsLabels).toContain("Option 2");

  

  const emailField = basicForm.getByRole("textbox", { name: "Email" });
  
  await emailField.fill("test@test.com");
    // input value 
  const emailValue = await emailField.inputValue();
  
  expect (emailValue).toEqual("test@test.com");

  // getAttribute 
  const placeholderValue = await emailField.getAttribute('placeholder');
  
  expect(placeholderValue).toEqual('Email');
});
