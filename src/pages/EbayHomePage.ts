import { expect } from "@playwright/test"
import { pageFixture } from "../common/pageFixture"

export class EbayHomePage {
    
    async open() {
        await pageFixture.page.goto('https://www.ebay.com/')
    }

    async searchFor(searchTerm: string) {
        await pageFixture.page.fill('input[name=_nkw]', searchTerm);
        await pageFixture.page.click('#gh-search-btn');
    }

    async clickOnAdvanceLink() {
        await pageFixture.page.getByText('Advanced').click();
    }

    async validateResultCount(resultCount: number) {
        let result = (await pageFixture.page.textContent('h1.srp-controls__count-heading .BOLD')).trim().replace(",","");
        let count = parseInt(result);
        expect(count).toBeGreaterThan(resultCount);
    }

    async clickOnHeaderLink(link: string) {
        await pageFixture.page.getByRole('link', {name: link}).click();
    }
}