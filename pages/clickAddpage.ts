import {Page,Locator} from '@playwright/test';

export class AddPage{
    page:Page;
    AddButton:Locator;
    DeleteButton:Locator;

    constructor(page:Page){
        this.page=page;
        this.AddButton=page.locator("//button[@onclick='addElement()']");
        this.DeleteButton=page.locator("//button[@class='added-manually']");
    }

    async navigateURL(){
        await this.page.goto('https://the-internet.herokuapp.com/add_remove_elements/');
    }

}