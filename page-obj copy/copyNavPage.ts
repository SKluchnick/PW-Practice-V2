import {Page, Locator} from "@playwright/test";
import { CopyHelperBase } from "./copyHelperBase";


export class CopyNavigationPage extends CopyHelperBase{
  // readonly page: Page;

  constructor (page:Page){
    // this.page = page 
    super(page)

  }

  async copyformLayoutsPage(){
    // await this.page.getByText("Forms").click();
    await this.copySelectGoupMenuItem("Forms")
    await this.page.getByText("Form Layouts").click();
    await this.copyWaitForNumberOfSeconds(1)
  }

  async copyDatepickerPage() {
  
    // await this.page.getByText("Forms").click();
    await this.copySelectGoupMenuItem("Forms")
    await this.page.getByText("Datepicker").click();
  }

  async copySmartTablePage() {
    
    // await this.page.getByText("Tables & Data").click();
    await this.copySelectGoupMenuItem("Tables & Data")
    await this.page.getByText("Smart Table").click();
  }

  async copyToastrPage() {
   
    // await this.page.getByText("Modal & Overlays").click();
    await this.copySelectGoupMenuItem("Modal & Overlays")
    await this.page.getByText("Toastr").click();
  }

  async copyTooltipPage() {
  
    // await this.page.getByText("Modal & Overlays").click();
    await this.copySelectGoupMenuItem("Modal & Overlays")
    await this.page.getByText("Tooltip").click();
  }

  private async copySelectGoupMenuItem(groupItemTitle: string){
    const copyGroupMenuItem = this.page.getByTitle(groupItemTitle)
    const copyExpandedState = await copyGroupMenuItem.getAttribute("aria-expanded")
    if(copyExpandedState === "false"){
      await copyGroupMenuItem.click()
    }
}
}






  
  

