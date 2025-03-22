import { pageFixture } from "../common/pageFixture";
import { DataTable } from '@cucumber/cucumber';


export class EbayAdvancedPage {

    page = pageFixture.page;
    
    async open()   {
        await pageFixture.page.goto('https://www.ebay.com/sch/ebayadvsearch');
    }

    async clickOnLogo() {
        await pageFixture.page.click('#gh-logo');
    }

    async fillForm(dataTable: DataTable) {
        await pageFixture.page.fill("//input[@id='_nkw']", dataTable.rows()[0][0]);
        await pageFixture.page.fill("//input[@id='_ex_kw']", dataTable.rows()[0][1]);
        await pageFixture.page.fill("//input[@name='_udlo']", dataTable.rows()[0][2]);
        await pageFixture.page.fill("//input[@name='_udhi']", dataTable.rows()[0][3]);
        await pageFixture.page.locator("//div[@class='adv-form__actions']//button[@type='submit'][normalize-space()='Search']").click();
    };
}