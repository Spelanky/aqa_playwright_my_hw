// Разработать тест со следующими шагами:
//  - Открыть url https://anatoly-karpovich.github.io/aqa-course-project/#
//  - Войти в приложения используя учетные данные test@gmail.com / 12345678 при этом:
//  - дождаться исчезновения спиннеров
//  - проверить действительно ли пользователь с логином Anatoly вошел в систему
//  - Проверить скриншотом боковое навигационное меню с выбранной страницей Home

import { test, expect } from "@playwright/test";

test.describe("[UI] [aqa-course-project] Login", () => {
  test("Login and UI verification", async ({ page }) => {
    await page.goto("https://anatoly-karpovich.github.io/aqa-course-project/#");
    await page.getByLabel("Email address").fill("test@gmail.com");
    await page.getByLabel("Password").fill("12345678");
    await page.getByRole("button", { name: "Login" }).click();

    // Ждем, пока все элементы .spinner-border исчезнут из DOM
    await page.waitForFunction(() => {
      return document.querySelectorAll(".spinner-border").length === 0;
    });

    //! Не работает, т.к. ".spinner-border" больше одного элемента в DOM
    // await page.waitForSelector(".spinner-border", {
    //   state: "detached",
    //   timeout: 2000,
    // });

    const userName = page.getByText("Anatoly", { exact: false });
    await expect(userName).toBeVisible();

    // Скриншот сайдбара
    const sideBar = page.locator("#sidebar");
    await expect(sideBar).toHaveScreenshot("sidebar-home.png");
  });
});
