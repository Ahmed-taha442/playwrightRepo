import { test, expect } from "@playwright/test";
import dotenv from "dotenv";
import path from "path";
dotenv.config({ path: path.resolve(__dirname, "../../environments.env") });
import { WelcomePage } from "../../../src/pages/customerPages/welcomePage";
import { MenuPage } from "../../../src/pages/customerPages/menuPage";
let welcomePage: WelcomePage;
let menuPage: MenuPage;
const customerUrl = process.env.Customer_Staging || "";
test.beforeEach(async ({ page }) => {
  menuPage = new MenuPage(page);
  welcomePage = new WelcomePage(page);
  await page.goto(customerUrl);
});

test("TC03-Customer can scroll to category after click in category link", async ({
  page,
}) => {
  await welcomePage.selectOneBranch();
  await welcomePage.selectPickup();
  await menuPage.selectCategory();
  await expect(menuPage.targetCategory).toBeVisible();
});
