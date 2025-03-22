import { Given, When, Then } from '@cucumber/cucumber';
import { EbayHomePage } from '../pages/EbayHomePage';
import { expect } from '@playwright/test';
import { pageFixture } from '../common/pageFixture';

let ebayHomePage = new EbayHomePage();

Given('I am on Ebay Home page', async function () {
    await ebayHomePage.open();
});

    
When('I click on Advance link', async function () {
    await ebayHomePage.clickOnAdvanceLink();
});
       

Then('I navigate to Advanced Search Page', async function () {
    expect(pageFixture.page.url()).toContain('https://www.ebay.com/sch/ebayadvsearch');
});

         
When('Search for {string}', async function (text) {
    await ebayHomePage.searchFor(text);
});

Then('Result count more than {int}', async function (resultCount) {
    await ebayHomePage.validateResultCount(resultCount);
});

When('I click on {string}', async function (link) {
    await ebayHomePage.clickOnHeaderLink(link);
});


Then('I validate that page navigates to {string} and title contains {string}', async function (link, title) {
    await pageFixture.page.waitForURL(link, {timeout: 5000});
    expect(pageFixture.page.url()).toContain(link);
    expect(await pageFixture.page.title()).toContain(title);
});

   