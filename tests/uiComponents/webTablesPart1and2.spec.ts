import { test, expect } from "@playwright/test";

test.beforeEach("start beforeEach test", async ({ page }) => {
  await page.goto("http://localhost:4200/");
});

test.describe("Web tables => web table", () => {
  test.beforeEach(async ({ page }) => {
    await page.getByText("Tables & Data").click();
    await page.getByText("Smart Table").click();
  });

  test("web table", async ({ page }) => {
    //1 get the row by any test in this row
    const targetRow = page.getByRole("row", { name: "twitter@outlook.com" });
    await targetRow.locator(".nb-edit").click();
    await page.locator("input-editor").getByPlaceholder("Age").clear();
    await page.locator("input-editor").getByPlaceholder("Age").fill("35");
    await page.locator(".nb-checkmark").click();

    //2 get the row based on the value in the specific column
    await page.locator(".ng2-smart-pagination-nav").getByText("2").click();
    const targetRowById = page
      .getByRole("row", { name: "11" })
      .filter({ has: page.locator("td").nth(1).getByText("11") });
    await targetRowById.locator(".nb-edit").click();

    await page.locator("input-editor").getByPlaceholder("E-mail").clear();

    await page
      .locator("input-editor")
      .getByPlaceholder("E-mail")
      .fill("test@test.com");
    await page.locator(".nb-checkmark").click();

    await expect(targetRowById.locator("td").nth(5)).toHaveText(
      "test@test.com"
    );

    //3 test filter of the table

    const ages = ["20", "30", "40", "200"];

    for (let age of ages) {
      await page.locator("input-filter").getByPlaceholder("Age").clear();
      await page.locator("input-filter").getByPlaceholder("Age").fill(age);
      await page.waitForTimeout(500);
      const ageRows = page.locator("tbody tr");

      for (let row of await ageRows.all()) {
        const cellValue = await row.locator("td").last().textContent();

        if (age == "200") {
          expect(await page.getByRole("table").textContent()).toContain(
            "No data found"
          );
        } else {
          expect(cellValue).toEqual(age);
        }
      }
    }
  });
});



// ? **********************************************************************************************

test.describe("Web tables => web table two", () => {
  test.beforeEach(async ({ page }) => {
    await page.getByText("Tables & Data").click();
    await page.getByText("Smart Table").click();
  });

  test("web table two ", async ({ page }) => {
    //1 get the row by any test in this row
    const targetRow = page.getByRole("row", { name: "twitter@outlook.com" });
    await targetRow.locator(".nb-edit").click();
    await page.locator("input-editor").getByPlaceholder("Age").clear();
    await page.locator("input-editor").getByPlaceholder("Age").fill("35");
    await page.locator(".nb-checkmark").click();



    //2 get the row based on the value in the specific column
    await page.locator(".ng2-smart-pagination-nav").getByText("2").click();

    const targetRowById = page
    .getByRole("row", { name: "11" })
    .filter({ has: page.locator("td").nth(1).getByText("11") });
    await targetRowById.locator(".nb-edit").click();

    await page.locator("input-editor").getByPlaceholder("E-mail").clear();
    await page.locator("input-editor").getByPlaceholder("E-mail").fill("test@test.com");
    await page.locator(".nb-checkmark").click();

    await expect(targetRowById.locator("td").nth(5)).toHaveText(
      "test@test.com"
    );

  });
});
