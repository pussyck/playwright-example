import { Locator, Page } from "@playwright/test";
import { BasePage } from "./basePage";

export class LoginPage extends BasePage {

    readonly email:Locator;
    readonly password:Locator;
    readonly confirm:Locator
	readonly errorMassage:Locator

    constructor(page:Page){
        super(page, '/auth');
        this.email = this.page.getByLabel('Имя пользователя')
        this.password = this.page.getByLabel('Пароль')
        this.confirm = this.page.getByRole('button')
		this.errorMassage = this.page.locator('#error-message')
    }
	  


	async inputUserData(email:string, password:string){
		this.email.fill(email)
        this.password.fill(password)
        this.confirm.click()
	}


    
    


}