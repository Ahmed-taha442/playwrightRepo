import { expect, type Locator, type Page, Dialog } from "@playwright/test";
export class HomePage {
  readonly page: Page;
  readonly homePageLabel: Locator;
  readonly administratorLabel: Locator;
  constructor(page: Page) {
    this.page = page;
    this.homePageLabel = page.getByRole("link", { name: "Home" });
    this.administratorLabel = page.getByRole("button", {
      name: "Administration",
    });
  }
  async adminstrator() {
    await this.administratorLabel.click();
  }
}
