import { chromium } from "@playwright/test";
import { createPlan } from "./planner";
import { executePlan } from "./executor";

async function main() {

    const browser = await chromium.launch({
        headless: false
    });

    const page = await browser.newPage();

    const planText = await createPlan(
    "Go to https://the-internet.herokuapp.com/javascript_alerts"
);

    console.log("Generated Plan:");
    console.log(planText);

    const plan = JSON.parse(planText);

    await executePlan(page, plan.steps);

    await page.waitForTimeout(10000);

    await browser.close();
}

main().catch(console.error);