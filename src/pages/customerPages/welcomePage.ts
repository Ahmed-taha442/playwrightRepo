import { type Locator, type Page, Dialog } from "@playwright/test";
import labels from "../../../src/locales/labels.json";
export class WelcomePage {
  readonly page: Page;
  readonly openDropdown: Locator;
  // readonly targetBranch: Locator;
  readonly branchOption: Locator;
  readonly pickupButton: Locator;
  readonly currentLanguage: Locator;
  readonly targetLanguage: Locator;
  readonly languageAssert: Locator;

  constructor(page: Page) {
    this.page = page;
    this.openDropdown = page.getByRole("combobox", {
      name: labels.welcomePage.branchesDropdown,
    });
    this.pickupButton = page.getByRole("button", {
      name: labels.welcomePage.serviceName,
    });
    this.languageAssert = page.getByRole("combobox", {
      name: labels.welcomePage.arabicText,
    });
    this.branchOption = page.getByRole("option", {
      name: labels.welcomePage.branchName,
    });
    this.currentLanguage = page.getByRole("button", {
      name: labels.welcomePage.currentLanguage,
    });
    this.targetLanguage = page.getByText(labels.welcomePage.targetLanguage); //// No accessible role available to locate this element by role
  }
  async selectOneBranch() {
    await this.openDropdown.click();
    await this.branchOption.click();
  }

  async selectLanguage() {
    await this.currentLanguage.click();
    await this.targetLanguage.click();
  }
  async selectPickup() {
    await this.pickupButton.click();
  }
}