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

test("TC01-Verify language selector is visible and english is default", async ({
  page,
}) => {
  await expect(welcomePage.currentLanguage).toContainText(
    labels.welcomePage.currentLanguage
  );
});