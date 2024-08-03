import {Page, Locator} from "@playwright/test";
import { HelperBase } from "./helperBase";

export class NavigationPage extends HelperBase{
  readonly page: Page;
  readonly formLayoutsMenuItem:Locator
  readonly datepickerMenuItem:Locator
  readonly smartTableMenuItem:Locator
  readonly toastrMenuItem:Locator
  readonly tooltipMenuItem:Locator
  
  
  constructor(page: Page){
    super(page)
}


  async formLayoutsPage() {
  await this.selectGoupMenuItem('Forms')
    // await this.page.getByText("Forms").click();
    await this.page.getByText("Form Layouts").click();
    await this.waitForNumberOfSeconds(2);
  }
  async datepickerPage() {
    await this.selectGoupMenuItem('Forms')
    // await this.page.getByText("Forms").click();
    await this.page.getByText("Datepicker").click();
  }

  async smartTablePage() {
    await this.selectGoupMenuItem('Tables & Data')
    // await this.page.getByText("Tables & Data").click();
    await this.page.getByText("Smart Table").click();
  }

  async toastrPage() {
    await this.selectGoupMenuItem('Modal & Overlays')
    // await this.page.getByText("Modal & Overlays").click();
    await this.page.getByText("Toastr").click();
  }

  async tooltipPage() {
    await this.selectGoupMenuItem('Modal & Overlays')
    // await this.page.getByText("Modal & Overlays").click();
    await this.page.getByText("Tooltip").click();
  }

  private async selectGoupMenuItem(groupItemTitle: string){
    const groupMenuItem = this.page.getByTitle(groupItemTitle)
    const expandedState = await groupMenuItem.getAttribute('aria-expanded')
    if(expandedState == "false")
        await groupMenuItem.click()
}
}
