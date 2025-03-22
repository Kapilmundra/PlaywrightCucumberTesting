import { AfterAll, BeforeAll, Status } from "@cucumber/cucumber";
import { Browser, BrowserContext, chromium } from "@playwright/test";
import { pageFixture } from "./pageFixture";
import { After, Before } from "@cucumber/cucumber";
import * as fs from 'fs-extra';

let browser: Browser;
let context: BrowserContext;

BeforeAll(async function () {
    browser = await chromium.launch({
        headless: true,
    });
});

Before(async function () {
    context = await browser.newContext({
        recordVideo: {
            		dir: "test-results/videos",
        		},
    });
    const page = await context.newPage();
    pageFixture.page = page;
});

After(async function ({ result, pickle }) {
    let videoPath: string;
    let img: Buffer;
    if (result.status === Status.FAILED) {
        const screenshotPath = `test-result/screenshots/${pickle.name}.png`;
        img =await pageFixture.page.screenshot({ path: screenshotPath, type: "png" });
        videoPath = await pageFixture.page.video().path();
    }
    await context.close();

    if(result.status === Status.FAILED) {
        this.attach(img, "image/png");

        this.attach(fs.readFileSync(videoPath), "video/webm");
    }
});

AfterAll(async function () {
    await browser.close();
});
