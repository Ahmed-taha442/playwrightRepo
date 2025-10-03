import { test, expect } from "@playwright/test";
import dotenv from "dotenv";
import path from "path";
dotenv.config({ path: path.resolve(__dirname, "../../environments.env") });
import { WelcomePage } from "../../../src/pages/customerPages/welcomePage";
import { MenuPage } from "../../../src/pages/customerPages/MenuPage";
let welcomePage: WelcomePage;
let menu: MenuPage;
const customerUrl = process.env.Customer_Staging || "";
test.beforeEach(async ({ page }) => {
  menu = new MenuPage(page);
  welcomePage = new WelcomePage(page);
  await page.goto(customerUrl);
  await welcomePage.selectOneBranch();
  await welcomePage.selectPickup();
});
test("TC04-Customer can add item to cart successfully", async ({ page }) => {
  await menu.addToCartAndReturnPrice();
  await expect(menu.viewCart).toBeVisible();
});
