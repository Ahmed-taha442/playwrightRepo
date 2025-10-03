import { type Locator, type Page } from "@playwright/test";
import labels from "../../../src/locales/labels.json";

export class MenuPage {
  readonly page: Page;

  // 🔹 locators
  readonly exploreText: Locator;
  readonly changeButton: Locator;
  readonly categoryLink: Locator;
  readonly targetCategory: Locator;
  readonly productCard: Locator;
  readonly addToCartButton: Locator;
  readonly viewCart: Locator;

  // 🔹 constructor
  constructor(page: Page) {
    this.page = page;

    this.exploreText = page.getByRole("heading", {
      name: labels.menuPage.exploreText,
    });
    this.changeButton = page.getByRole("button", {
      name: labels.menuPage.changeButton,
    });
    this.categoryLink = page
      .getByRole("paragraph")
      .filter({ hasText: labels.menuPage.categoryLink });
    this.targetCategory = page.getByRole("heading", {
      name: labels.menuPage.categoryLink,
    });
    this.productCard = page.getByRole("button", {
      name: labels.menuPage.productName,
    });

    this.addToCartButton = this.productCard.getByRole("button", {
      name: labels.menuPage.addToCartButton,
    });
    this.viewCart = page.getByRole("button", {
      name: labels.menuPage.viewCartButton,
    });
  }

  async selectCategory() {
    await this.categoryLink.click();
  }

  async getProductPrice() {
    const productPrice = await this.productCard
      .getByText(labels.menuPage.currency)
      .textContent();
    return productPrice ? productPrice.trim() : "";
  }

  async addToCartAndReturnPrice() {
    const price = await this.getProductPrice();
    await this.addToCartButton.click();
    return price;
  }

  async openCart() {
    await this.viewCart.click();
  }
}
