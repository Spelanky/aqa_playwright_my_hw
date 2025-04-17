import { test, expect } from "@playwright/test";

test.describe("[UI] [demo-login-form] [Smoke] Register", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://anatoly-karpovich.github.io/demo-login-form/");
    await page.locator("#registerOnLogin").click(); // goto register part
  });

  const successNotification =
    "Successfully registered! Please, click Back to return on login page";

  // Form visibility
  test("should display registration form with required fields and register button", async ({
    page,
  }) => {
    await expect(page.locator("#userNameOnRegister")).toBeVisible();
    await expect(page.locator("#passwordOnRegister")).toBeVisible();
    await expect(page.locator("#register")).toBeVisible();
    await expect(page.locator("#register")).toContainText("Register");
  });

  // Min chars
  test("input with min valid chars", async ({ page }) => {
    await page.locator("#userNameOnRegister").fill("Jan");
    await page.locator("#passwordOnRegister").fill("Pa$$w0rd");
    await page.locator("#register").click();

    await expect(page.locator("#errorMessageOnRegister")).toContainText(
      `${successNotification}`
    );
  });

  // Max chars
  test("input with max valid chars", async ({ page }) => {
    const username = "Name".repeat(10);
    const password = "Pa$$w0rd!";
    await page.locator("#userNameOnRegister").fill(username);
    await page.locator("#passwordOnRegister").fill(password);
    await page.locator("#register").click();

    await expect(page.locator("#errorMessageOnRegister")).toContainText(
      `${successNotification}`
    );
  });
});
