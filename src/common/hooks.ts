import { AfterAll, BeforeAll } from "@cucumber/cucumber";
import { Browser, BrowserContext, chromium } from "@playwright/test";
import { pageFixture } from "./pageFixture";
const {After, Before} = require('@cucumber/cucumber');

let browser: Browser;
let context: BrowserContext;

BeforeAll(async function () {
    browser = await chromium.launch({
        headless: true,
    });
});

Before(async function () {
    context = await browser.newContext();
    const page =  await context.newPage();
    pageFixture.page = page;
});

After(async function () {
    await context.close();
});

AfterAll(async function () {
    await browser.close();
});
