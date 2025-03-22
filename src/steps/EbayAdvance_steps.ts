import { Given, When, Then, DataTable } from '@cucumber/cucumber';
import { EbayAdvancedPage } from '../pages/EbayAdvancedPage';
import { expect } from '@playwright/test';
import { pageFixture } from '../common/pageFixture';

let ebayAdvancePage = new EbayAdvancedPage();

Given('I am on Ebay Advanced Search page', async function () {
    await ebayAdvancePage.open();
});
       
       
When('I click on Ebay Logo', async function () {
    await ebayAdvancePage.clickOnLogo();
});

Then('I navigate to Home Page', async function () {
    expect(pageFixture.page.url()).toContain('https://www.ebay.com/');
});
   
When('Fill the form with detail', async function (dataTable: DataTable) {
    await ebayAdvancePage.fillForm(dataTable);
});