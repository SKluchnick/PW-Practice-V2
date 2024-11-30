import { test, expect } from "@playwright/test";

test.beforeEach("start beforeEach test", async ({ page }) => {
  await page.goto("http://localhost:4200/");
});

test.describe("Form Layouts page => Radio buttons", () => {
  test.beforeEach(async ({ page }) => {
    await page.getByText("Forms").click();
    await page.getByText("Form Layouts").click();
  });
  test("Radio buttons", async ({ page }) => {
    const usingTheGridForm = page.locator("nb-card", {
      hasText: "Using the Grid",
    });
    // await usingTheGridForm.getByLabel("Option 1").check({ force: true });

    await usingTheGridForm
      .getByRole("radio", { name: "Option 1" })
      .check({ force: true });

    const radioStatus = await usingTheGridForm
      .getByRole("radio", { name: "Option 1" })
      .isChecked();

    expect(radioStatus).toBeTruthy();

    await expect(
      usingTheGridForm.getByRole("radio", { name: "Option 1" })
    ).toBeChecked();


    await usingTheGridForm
      .getByRole("radio", { name: "Option 2" })
      .check({ force: true });
      

    expect(
      await usingTheGridForm
        .getByRole("radio", { name: "Option 1" })
        .isChecked()
    ).toBeFalsy();

    expect(
      await usingTheGridForm
        .getByRole("radio", { name: "Option 2" })
        .isChecked()
    ).toBeTruthy();
  });
});


test.describe("Form Layouts page =>Radio buttons two", () => {
  test.beforeEach(async ({ page }) => {
    await page.getByText("Forms").click();
    await page.getByText("Form Layouts").click();
  });
  test("Radio buttons two", async ({ page }) => {
    const usingTheGridForm = page.locator("nb-card", {
      hasText: "Using the Grid",
    });
    await usingTheGridForm.getByLabel("Option 2").check({ force: true });

    const radioStatus = await usingTheGridForm.getByLabel("Option 2").isChecked();

    expect (radioStatus).toBeTruthy()

    await expect(usingTheGridForm.getByLabel("Option 2")).toBeChecked()

    await usingTheGridForm.getByLabel("Option 1").check({ force: true });

    expect (await usingTheGridForm.getByLabel("Option 2").isChecked()).toBeFalsy() 
    expect (await usingTheGridForm.getByLabel("Option 1").isChecked()).toBeTruthy() 

    });
});

