import { test, expect } from "@playwright/test";

test.beforeEach("start beforeEach test", async ({ page },testInfo) => {
    await page.goto("http://uitestingplayground.com/ajax");
    await page.getByText("Button Triggering AJAX Request").click();
    testInfo.setTimeout(testInfo.timeout + 2000);
});



 
  test("timeouts", async ({ page }) =>{
    const successButton = page.locator(".bg-success");
    // await successButton.click();

    // await successButton.click({timeout:16000});

    // test.setTimeout(1000);
    // await successButton.click();

    // test.slow();
    // await successButton.click();


    
  })