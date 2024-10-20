import { Page } from "@playwright/test";


export class CopyHelperBase{

    readonly page: Page

    constructor(page: Page){
        this.page = page
    }

    async copyWaitForNumberOfSeconds(timeInSeconds: number){
        await this.page.waitForTimeout(timeInSeconds * 1000)
    }
}