import { test, expect } from "@playwright/test";

test.beforeEach("start beforeEach test", async ({ page }) => {
  await page.goto("http://localhost:4200/");
});


test.describe("testMain",()=>{
   
         test("test", async ({ page }) => {
          await page.getByText("Modal & Overlays").click()
          await page.getByText("Tooltip").click()

          const res = page.locator('nb-card',{hasText:'Tooltip Placements'})
          // await res.getByRole('button',{name:'Top'}).hover()
          await res.getByRole("button", { name: "Top" }).hover();

          const tooltip = await page.locator('nb-tooltip').textContent()
          expect (tooltip).toEqual('This is a tooltip')
          });
       

})


