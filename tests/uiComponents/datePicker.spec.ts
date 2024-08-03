import { test, expect } from "@playwright/test";

test.beforeEach("start beforeEach test", async ({ page }) => {
  await page.goto("http://localhost:4200/");
});

test.describe("Datepicker", () => {
  test.beforeEach(async ({ page }) => {
    await page.getByText("Forms").click();
    await page.getByText("Datepicker").click();
  });

  test("datepicker", async ({ page }) => {
    const calendarInputField = page.getByPlaceholder("Form Picker");
    await calendarInputField.click();

    // await page
    //   .locator('[class="day-cell ng-star-inserted"]')
    //   .getByText("1", { exact: true })
    //   .click();
    // await expect(calendarInputField).toHaveValue("May 1, 2024");

    let date = new Date();
    date.setDate(date.getDate() + 100);
    const expectedDate = date.getDate().toString();
    const expectedMonthShot = date.toLocaleString("En-US", { month: "short" });
    const expectedYear = date.getFullYear();
    const dateToAssert = `${expectedMonthShot} ${expectedDate}, ${expectedYear}`;
    
    // await page
    //   .locator('[class="day-cell ng-star-inserted"]')
    //   .getByText(expectedDate, { exact: true })
    //   .click();
    
      // await expect(calendarInputField).toHaveValue(dateToAssert);
    
    const expectedMonthLong = date.toLocaleString('En-US', {month: 'long'})
    let calendarMonthAndYear = await page.locator('nb-calendar-view-mode').textContent()
    const expectedMonthAndYear = ` ${expectedMonthLong} ${expectedYear}`
    while(!calendarMonthAndYear.includes(expectedMonthAndYear)){
        await page.locator('nb-calendar-pageable-navigation [data-name="chevron-right"]').click()
        calendarMonthAndYear = await page.locator('nb-calendar-view-mode').textContent()
    }
    await page
    .locator('[class="day-cell ng-star-inserted"]')
    .getByText(expectedDate, { exact: true })
    .click();
    await expect(calendarInputField).toHaveValue(dateToAssert);
    

  });
});
