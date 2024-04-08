import { Locator, Page } from "@playwright/test";

export class BasePage {

    readonly page: Page;
    readonly exit: Locator;
    url: string
    
        constructor(page:Page,url:string = '/'){
            this.page = page
            this.url = url
            this.exit = this.page.getByLabel('Выход')
        }

        async open() {
            await this.page.goto(this.url);
        }

        async dropUser(){
           await this.exit.click()
        }
    






}


