// Создайте ОДИН смоук тест со следующими шагами:

// 1. Переход на страницу https://anatoly-karpovich.github.io/demo-registration-form/
// 2. Заполните форму регистрации
// 3. Проверьте , что пользователь успешно зарегистрирован

import test, { expect } from "@playwright/test";

test.describe("[UI] [demo-registration-form] [Smoke] Registration form", () => {
  const baseUrl = "https://anatoly-karpovich.github.io/demo-registration-form/";
  const selectors = {
    firstName: "#firstName",
    lastName: "#lastName",
    address: "#address",
    email: "#email",
    phone: "#phone",
    country: "#country",
    genderMale: 'input[name="gender"][value="male"]',
    hobby: 'input.hobby[value="Movies"]',
    language: "#language",
    skills: "#skills",
    year: "#year",
    month: "#month",
    day: "#day",
    password: "#password",
    confirmPassword: "#password-confirm",
    submitButton: 'button[type="submit"]',

    // Result selectors
    resultHeader: "h2.text-center",
    resultFullName: "#fullName",
    resultAddress: "#address",
    resultEmail: "#email",
    resultPhone: "#phone",
    resultCountry: "#country",
    resultGender: "#gender",
    resultLanguage: "#language",
    resultSkills: "#skills",
    resultHobbies: "#hobbies",
    resultDateOfBirth: "#dateOfBirth",
    resultPassword: "#password",
  };

  const testData = {
    firstName: "Dmitriy",
    lastName: "Bohdanov",
    address: "Street st. house number",
    email: "email@test.com",
    phone: "08008005050",
    language: "English",
    password: "password123",
    country: "USA",
    gender: "male",
    skills: ["JavaScript", "Python"],
    hobbies: "Movies",
    year: "1990",
    month: "April",
    day: "4",
  };

  test.beforeEach(async ({ page }) => {
    await page.goto(baseUrl);
  });

  test("Fill registration form with valid values", async ({ page }) => {
    await page.fill(selectors.firstName, testData.firstName);
    await page.fill(selectors.lastName, testData.lastName);
    await page.fill(selectors.address, testData.address);
    await page.fill(selectors.email, testData.email);
    await page.fill(selectors.phone, testData.phone);
    await page.selectOption(selectors.country, testData.country);
    await page.check(selectors.genderMale);
    await page.check(selectors.hobby);
    await page.fill(selectors.language, testData.language);
    await page.selectOption(selectors.skills, testData.skills);
    await page.selectOption(selectors.year, testData.year);
    await page.selectOption(selectors.month, testData.month);
    await page.selectOption(selectors.day, testData.day);
    await page.fill(selectors.password, testData.password);
    await page.fill(selectors.confirmPassword, testData.password);

    //Submit btn
    await page.locator('button[type="submit"]').click();

    //!Assertions
    // Wait for result page
    await expect(page.locator(selectors.resultHeader)).toHaveText(
      "Registration Details"
    );
    // Check displayed values
    await expect(page.locator(selectors.resultFullName)).toHaveText(
      `${testData.firstName} ${testData.lastName}`
    );
    await expect(page.locator(selectors.resultAddress)).toHaveText(
      testData.address
    );
    await expect(page.locator(selectors.resultEmail)).toHaveText(
      testData.email
    );
    await expect(page.locator(selectors.resultPhone)).toHaveText(
      testData.phone
    );
    await expect(page.locator(selectors.resultCountry)).toHaveText(
      testData.country
    );
    await expect(page.locator(selectors.resultGender)).toHaveText(
      testData.gender
    );
    await expect(page.locator(selectors.resultLanguage)).toHaveText(
      testData.language
    );
    await expect(page.locator(selectors.resultSkills)).toHaveText(
      testData.skills.join(", ")
    );
    await expect(page.locator(selectors.resultHobbies)).toHaveText("Movies");
    await expect(page.locator(selectors.resultDateOfBirth)).toHaveText(
      `${testData.day} ${testData.month} ${testData.year}`
    );

    //Password masking
    const passwordMask = await page.locator("#password").innerText();
    expect(passwordMask.length).toBe(testData.password.length);
    expect(passwordMask).toMatch(/^\*+$/);

    // Check password is not in HTML
    const html = await page.content();
    expect(html).not.toContain(testData.password);
  });
});
