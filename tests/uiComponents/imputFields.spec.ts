import { test, expect } from "@playwright/test";

test.beforeEach("start beforeEach test", async ({ page }) => {
  await page.goto("http://localhost:4200/");
});

test.describe("Form Layouts page => Input fields", () => {
  test.beforeEach(async ({ page }) => {
    await page.getByText("Forms").click();
    await page.getByText("Form Layouts").click();
  });
  test("Input fields", async ({ page }) => {
    const usingTheGridEmailInput = page
      .locator("nb-card", { hasText: "Using the Grid" })
      .getByRole("textbox", { name: "Email" });

    await usingTheGridEmailInput.fill("test@test.com");
    await usingTheGridEmailInput.clear();
    await usingTheGridEmailInput.pressSequentially("test2@test.com", {
      delay:10,
    });

    //generic assertion
    const inputValue = await usingTheGridEmailInput.inputValue();
    expect(inputValue).toEqual("test2@test.com");
    //locator assertion
    await expect(usingTheGridEmailInput).toHaveValue("test2@test.com");
  });
});


test.describe("Form Layouts page two => Input fields two", () => {
  test.beforeEach(async ({ page }) => {
    await page.getByText("Forms").click();
    await page.getByText("Form Layouts").click();
  });
  test("Input fields two", async ({ page }) => {
    const basicFormEmailInput = page
      .locator("nb-card", { hasText: "Basic form" })
      .getByRole("textbox", { name: "Email" });

    await basicFormEmailInput.fill("test@test.com");
    await basicFormEmailInput.clear();
    await basicFormEmailInput.pressSequentially("test2@test.com", {
      delay:10,
    });

    //generic assertion
    const inputValue = await basicFormEmailInput.inputValue();
    expect(inputValue).toEqual("test2@test.com");
    //locator assertion
    await expect(basicFormEmailInput).toHaveValue("test2@test.com");
  });
});


test.describe("Form Layouts page three => Input fields three", () => {
  test.beforeEach(async ({ page }) => {
    await page.getByText("Forms").click();
    await page.getByText("Form Layouts").click();
  });
  test("Input fields three", async ({ page }) => {
    const horizontalFormPasswordInput = page
      .locator("nb-card", { hasText: "Horizontal form" })
      .getByRole("textbox", { name: "Password" });

    await horizontalFormPasswordInput.fill("test@test.com");
    await horizontalFormPasswordInput.clear();
    await horizontalFormPasswordInput.pressSequentially("test2@test.com", {
      delay:10,
    });

    //generic assertion
    const inputValue = await horizontalFormPasswordInput.inputValue();
    expect(inputValue).toEqual("test2@test.com");
    //locator assertion
    await expect(horizontalFormPasswordInput).toHaveValue("test2@test.com");
  });
});


test.describe("Form Layouts page four => Input fields four", () => {
  test.beforeEach(async ({ page }) => {
    await page.getByText("Forms").click();
    await page.getByText("Form Layouts").click();
  });
  test("Input fields four", async ({ page }) => {
    const horizontalFormPasswordInput = page
      .locator("nb-card", { hasText: "Horizontal form" })
      .getByRole("textbox", { name: "Password" });

    await horizontalFormPasswordInput.fill("test@test.com");
    await horizontalFormPasswordInput.clear();
    await horizontalFormPasswordInput.pressSequentially("test2@test.com", {
      delay:10,
    });

    //generic assertion
    const inputValue = await horizontalFormPasswordInput.inputValue();
    expect(inputValue).toEqual("test2@test.com");
    //locator assertion
    await expect(horizontalFormPasswordInput).toHaveValue("test2@test.com");
  });
});
