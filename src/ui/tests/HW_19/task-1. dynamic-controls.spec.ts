// Разработать тест со следующими шагами:
//   - открыть https://the-internet.herokuapp.com/
//   - перейти на страницу Dynamic Controls
//   - Дождаться появления кнопки Remove
//   - Завалидировать текста в заголовке страницы
//   - Чекнуть чекбокс
//   - Кликнуть по кнопке Remove
//   - Дождаться исчезновения чекбокса
//   - Проверить наличие кнопки Add
//   - Завалидировать текст It's gone!
//   - Кликнуть на кнопку Add
//   - Дождаться появления чекбокса
//   - Завалидировать текст It's back!

import test, { expect } from "@playwright/test";

test.describe("[UI] [Heroku] Dynamic Controls", () => {
  test("Dynamic Controls test", async ({ page }) => {
    await page.goto("https://the-internet.herokuapp.com/");
    const dynamicControlsLink = page.getByRole("link", {
      name: "Dynamic Controls",
      exact: true,
    });
    await dynamicControlsLink.click();
    await expect(page).toHaveURL(
      "https://the-internet.herokuapp.com/dynamic_controls"
    );
    await page
      .getByRole("button", { name: "Remove" })
      .waitFor({ state: "visible" });

    //Check page headers
    await expect(
      page.getByRole("heading", { name: "Dynamic Controls" })
    ).toHaveText("Dynamic Controls");
    await expect(page.locator("p")).toHaveText(
      "This example demonstrates when elements (e.g., checkbox, input field, etc.) are changed asynchronously."
    );

    //Checkbox
    const checkbox = page.locator('#checkbox input[label="blah"]');
    await expect(checkbox).toBeVisible();
    await checkbox.check();

    await page.getByRole("button", { name: "Remove" }).click();
    await checkbox.waitFor({ state: "detached" });
    const addButton = page.getByRole("button", { name: "Add" });
    await expect(addButton).toBeVisible();
    await expect(page.locator("#message")).toHaveText("It's gone!");
    await addButton.click();
    await page
      .locator('input[type="checkbox"]')
      .waitFor({ state: "attached", timeout: 7000 });
    await expect(page.locator('input[type="checkbox"]')).toBeVisible();
    await expect(page.locator("#message")).toHaveText("It's back!");
  });
});
