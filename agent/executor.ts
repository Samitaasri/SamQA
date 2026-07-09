import { Page } from "@playwright/test";

export async function executePlan(page: Page, steps: any[]) {

    // Listen for alerts
    page.on("dialog", async (dialog) => {
        console.log("Alert Message:", dialog.message());
        await dialog.accept();
    });

    for (const step of steps) {

        console.log("Executing:", step.action);

        switch (step.action) {

            case "goto":
                await page.goto(step.url);
                break;

            case "fill":
                await page.locator(step.locator).fill(step.value);
                break;

            case "click":
                await page.locator(step.locator).click();
                break;

            case "press":
                await page.locator(step.locator).press(step.value);
                break;

            case "acceptAlert":
                // Nothing to do here.
                // The page.on("dialog") handler automatically accepts it.
                break;

            default:
                console.log("Unknown action:", step.action);
        }
    }
}