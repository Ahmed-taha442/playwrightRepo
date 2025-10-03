import { expect, type Locator, type Page, Dialog } from "@playwright/test";

export class LoginPage {
  readonly page: Page;
  readonly emailInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.emailInput = page.getByRole("textbox", { name: "email" });
    this.passwordInput = page.getByRole("textbox", { name: "password" });
    this.loginButton = page.getByRole("button", { name: "Login " });
  }
  async validLogin(email: string, password: string) {
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }
}
