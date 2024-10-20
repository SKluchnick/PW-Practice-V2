import { test, expect } from "@playwright/test";
import { CopyPageManager } from '../page-obj copy/copyPageManager';
// import { CopyNavigationPage } from "../page-obj copy/copyNavPage";
// import { CopyFormLayoutsPage } from "../page-obj copy/copyFormLayoutsPage";
// import { CopyDatepickerPage } from "../page-obj copy/copyDatepickerPage";

test.beforeEach("start beforeEach test", async ({ page }) => {
  await page.goto("http://localhost:4200/");
});

test("nav to new page", async ({ page }) => {
  // const navToPage = new CopyNavigationPage(page);
  // await navToPage.copyDatepickerPage();
  // await navToPage.copySmartTablePage();
  // await navToPage.copyToastrPage();
  // await navToPage.copyTooltipPage();
  // await navToPage.copyformLayoutsPage();
  const pm = new CopyPageManager(page)
  await pm.copyNavigateTo().copyDatepickerPage();
  await pm.copyNavigateTo().copySmartTablePage();
  await pm.copyNavigateTo().copyToastrPage();
  await pm.copyNavigateTo().copyTooltipPage();
  await pm.copyNavigateTo().copyformLayoutsPage();
});

test("param test one", async ({ page }) => {
  // const navToPage = new CopyNavigationPage(page);
  // const copyOnFormLayoutsPage = new CopyFormLayoutsPage(page);
  // const onDatepickerPage = new CopyDatepickerPage(page);

  // await navToPage.copyformLayoutsPage();
  // await copyOnFormLayoutsPage.copySubmitUsingTheGrigdFormWithCredentialsAndSelectOption( "dfgh", "fghjkl",  "Option 1" );
  // await copyOnFormLayoutsPage.copySumbitInlineFormWithNameEmailAndCheckbox("dfgh", "fghjkl", true  );
  // await navToPage.copyDatepickerPage();
  // await onDatepickerPage.copySelectCommonDatePickerDateFromToday(5)
  // await onDatepickerPage.copySelectDatePickerDateWithRangeFromToday(5,7)
  const pm = new CopyPageManager(page)
  await pm.copyNavigateTo().copyformLayoutsPage();  
  await pm.copyOnFormLayoutsPage().copySubmitUsingTheGrigdFormWithCredentialsAndSelectOption( "dfgh", "fghjkl",  "Option 1" );
  await pm.copyOnFormLayoutsPage().copySumbitInlineFormWithNameEmailAndCheckbox("dfgh", "fghjkl", true  );
  await pm.copyNavigateTo().copyDatepickerPage();
  await pm.copyOnDatepickerPage().copySelectCommonDatePickerDateFromToday(5)
  await pm.copyOnDatepickerPage().copySelectDatePickerDateWithRangeFromToday(5,7)
    

});
