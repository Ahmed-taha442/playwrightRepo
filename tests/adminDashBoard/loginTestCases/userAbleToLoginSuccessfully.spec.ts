import { test, expect } from "@playwright/test";
import dotenv from "dotenv";
import path from "path";
dotenv.config({ path: path.resolve(__dirname, "../../environments.env") });

import { LoginPage } from "../../../src/pages/adminPages/loginPage";
import { HomePage } from "../../../src/pages/adminPages/homePage";
let loginPage: LoginPage;
let homePage: HomePage;
const adminUrl = process.env.Admin_Staging || "";
const email = process.env.Admin_User || "";
const password = process.env.Admin_Pw || "";

test.beforeEach(async ({ page }) => {
  loginPage = new LoginPage(page);
  homePage = new HomePage(page);
  await page.goto(adminUrl);
});
test("User able to login successfully", async ({ page }) => {
  await loginPage.validLogin(email, password);
  await expect(homePage.homePageLabel).toBeVisible();
});
