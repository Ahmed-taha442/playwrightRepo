import { test, expect } from "@playwright/test";
import dotenv from "dotenv";
import path from "path";
dotenv.config({ path: path.resolve(__dirname, "../../environments.env") });
import { WelcomePage } from "../../../src/pages/customerPages/welcomePage";
import labels from "../../../src/locales/labels.json";
let welcomePage: WelcomePage;
const customerUrl = process.env.Customer_Staging || "";
test.beforeEach(async ({ page }) => {
  welcomePage = new WelcomePage(page);
  await page.goto(customerUrl);
});

test("TC01-Customer can select a branch successfully", async ({ page }) => {
  await welcomePage.selectOneBranch();
  await expect(welcomePage.pickupButton).toBeVisible();
});
