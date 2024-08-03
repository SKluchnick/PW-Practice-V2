import { test, expect } from "@playwright/test";

test.beforeEach("start beforeEach test", async ({ page }) => {
  await page.goto("http://uitestingplayground.com/ajax");
  await page.getByText("Button Triggering AJAX Request").click();
 
});

test("auto-waiting", async ({ page }) => {
  const successButton = page.locator(".bg-success");
  await successButton.click();
  
  const text = await successButton.textContent();
  expect(text).toEqual('Data loaded with AJAX get request.');

  await successButton.waitFor({state:"attached"})
  const textTwo = await successButton.allTextContents();
  expect(textTwo).toContain('Data loaded with AJAX get request.');

  await expect(successButton).toHaveText('Data loaded with AJAX get request.',{timeout:2000});





});

test("auto-waitingTwo", async ({ page }) =>{
  const successButton = page.locator(".bg-success");

    
  // wait for element 
  await page.waitForSelector('.bg-success')

  // wait for response
  await page.waitForResponse("http://uitestingplayground.com/ajaxdata")

  // wait for network calls to be completed
  await page.waitForLoadState('networkidle')
  const textThree = await successButton.allTextContents();
  expect(textThree).toContain('Data loaded with AJAX get request.');

})