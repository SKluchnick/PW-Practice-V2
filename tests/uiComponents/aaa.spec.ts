import { test, expect } from "@playwright/test";


test.beforeEach("start beforeEach test", async ({ page }) => {
  await page.goto("http://localhost:4200/");
});

test.describe("Tooltips", () => {

  test.beforeEach(async({page})=>{
    await page.getByText("Forms").click();
    await page.getByText("Datepicker").click();
  })
  test("datepicker", async({page}) => {
   const datepickerClick = page.locator('nb-card').getByRole('textbox',{name:"Form Picker"});
   await datepickerClick.click();
   
  //  await page
  //     .locator('[class="day-cell ng-star-inserted"]')
  //     .getByText("1", { exact: true })
  //     .click();
  //   await expect(datepickerClick).toHaveValue("May 1, 2024");


})

});

