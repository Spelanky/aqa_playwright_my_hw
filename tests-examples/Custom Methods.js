//* In each file
import { test, expect } from "@playwright/test";

// --------------------------------------------------------------------- //

//! Click
// Объявляем асинхронную функцию, которая будет оберткой для click()
async function clickWithTimeout(locator, options = {}) {
  // Устанавливаем таймаут в 10 секунд (10000 миллисекунд)
  const timeout = options.timeout || 10000;

  // Пытаемся кликнуть по элементу с указанным таймаутом
  try {
    await locator.click({ timeout });
    return true; // Возвращаем true, если клик успешен
  } catch (error) {
    console.error("Ошибка при клике:", error);
    return false; // Возвращаем false, если клик не удался
  }
}

// Пример использования обертки
async function testClick() {
  const page = await browser.newPage();
  await page.goto("https://example.com");

  // Локатор для элемента, по которому мы хотим кликнуть
  const element = page.locator("a");

  // Кликаем по элементу с использованием нашей обертки
  const clickSuccess = await clickWithTimeout(element);

  if (clickSuccess) {
    console.log("Клик успешен!");
  } else {
    console.log("Клик не удался.");
  }

  await page.close();
}

// Запускаем тест
testClick();
