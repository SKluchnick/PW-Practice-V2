import { Page, expect } from "@playwright/test";


export class CopyDatepickerPage {

  readonly page: Page
    
  constructor(page: Page){
      this.page = page
  }

  async copySelectCommonDatePickerDateFromToday(numberOfDaysFromToday: number){
    const calendarInputField = this.page.getByPlaceholder("Form Picker");
    await calendarInputField.click();
    const dateToAssert = await this.copySelectDateInCalendar(numberOfDaysFromToday)
    await expect(calendarInputField).toHaveValue(dateToAssert);

 
  } 

  async copySelectDatePickerDateWithRangeFromToday(startDayfromToday:number,endDayfromToday:number){
    const calendarInputField = this.page.getByPlaceholder("Range Picker");
    await calendarInputField.click();
    const dateToAssertStart = await this.copySelectDateInCalendar(startDayfromToday)
    const dateToAssertEnd = await this.copySelectDateInCalendar(endDayfromToday)
    const dateToAssert = `${dateToAssertStart} - ${dateToAssertEnd}`;
    await expect(calendarInputField).toHaveValue(dateToAssert);
  }


  async copySelectDateInCalendar(numberOfDaysFromToday: number){
    let date = new Date();
    date.setDate(date.getDate() + numberOfDaysFromToday);
    const expectedDate = date.getDate().toString();
    const expectedMonthShot = date.toLocaleString("En-US", { month: "short" });
    const expectedYear = date.getFullYear();
    const dateToAssert = `${expectedMonthShot} ${expectedDate}, ${expectedYear}`;
    
    const expectedMonthLong = date.toLocaleString('En-US', {month: 'long'})
    let calendarMonthAndYear = await this.page.locator('nb-calendar-view-mode').textContent()
    const expectedMonthAndYear = ` ${expectedMonthLong} ${expectedYear}`
    while(!calendarMonthAndYear.includes(expectedMonthAndYear)){
        await this.page.locator('nb-calendar-pageable-navigation [data-name="chevron-right"]').click()
        calendarMonthAndYear = await this.page.locator('nb-calendar-view-mode').textContent()
    }
    await this.page
    .locator('.day-cell.ng-star-inserted')
    .getByText(expectedDate, { exact: true })
    .click();
    return dateToAssert
  }







}
