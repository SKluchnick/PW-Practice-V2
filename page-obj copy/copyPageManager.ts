import { test, expect } from "@playwright/test";
import { CopyNavigationPage } from "../page-obj copy/copyNavPage";
import { CopyFormLayoutsPage } from "../page-obj copy/copyFormLayoutsPage";
import { CopyDatepickerPage } from "../page-obj copy/copyDatepickerPage";
import { Page } from "@playwright/test"

export class CopyPageManager{

    private readonly page: Page
    private readonly copyNavigationPage: CopyNavigationPage
    private readonly copyFormLayoutsPage: CopyFormLayoutsPage
    private readonly copyDatepickerPage: CopyDatepickerPage


    constructor(page: Page){
        this.page = page
        this.copyNavigationPage = new CopyNavigationPage(this.page)
        this.copyFormLayoutsPage = new CopyFormLayoutsPage(this.page)
        this.copyDatepickerPage = new CopyDatepickerPage(this.page)
    }

    copyNavigateTo(){
        return this.copyNavigationPage
    }

    copyOnFormLayoutsPage(){
        return this.copyFormLayoutsPage
    }

    copyOnDatepickerPage(){
        return this.copyDatepickerPage
    }


}