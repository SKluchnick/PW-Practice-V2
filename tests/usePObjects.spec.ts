import { test, expect } from "@playwright/test";
// import { NavigationPage } from "../page-obj/navPage";
// import { FormLayoutsPage } from "../page-obj/formLayoutsPage";
// import { DatepickerPage } from "../page-obj/datepickerPage";
import { PageManager } from '../page-obj/pageManager';

test.beforeEach("start beforeEach test", async ({ page }) => {
  await page.goto("http://localhost:4200/");
});

test("navigate to new page", async ({ page }) => {
  const pm = new PageManager(page)
  // const navigateTo = new NavigationPage(page);
  await pm.navigateTo().formLayoutsPage();
  await pm.navigateTo().datepickerPage();
  await pm.navigateTo().smartTablePage();
  await pm.navigateTo().toastrPage();
  await pm.navigateTo().tooltipPage();
});

test("parametrized methods", async ({ page }) => {
  const pm = new PageManager(page)
  // const navigateTo = new NavigationPage(page);
  // const onFormLayoutsPage = new FormLayoutsPage(page);
  // const onDatepickerPage = new DatepickerPage(page);

  await pm.navigateTo().formLayoutsPage();
  await pm.onFormLayoutsPage().submitUsingTheGrigdFormWithCredentialsAndSelectOption(
    "test@test.com",
    "Hello",
    "Option 1"
  );
  await pm.onFormLayoutsPage().sumbitInlineFormWithNameEmailAndCheckbox(
    "test@test.com",
    "Hello",
    false
  );
  await pm.navigateTo().datepickerPage();
  await pm.onDatepickerPage().selectCommonDatePickerDateFromToday2(10);
  await pm.onDatepickerPage().selectDatepickerWithRangeFromToday(6,10);
  
});
