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

  const user = {
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
    await page.fill(selectors.firstName, user.firstName);
    await page.fill(selectors.lastName, user.lastName);
    await page.fill(selectors.address, user.address);
    await page.fill(selectors.email, user.email);
    await page.fill(selectors.phone, user.phone);
    await page.selectOption(selectors.country, user.country);
    await page.check(selectors.genderMale);
    await page.check(selectors.hobby);
    await page.fill(selectors.language, user.language);
    await page.selectOption(selectors.skills, user.skills);
    await page.selectOption(selectors.year, user.year);
    await page.selectOption(selectors.month, user.month);
    await page.selectOption(selectors.day, user.day);
    await page.fill(selectors.password, user.password);
    await page.fill(selectors.confirmPassword, user.password);

    //Submit btn
    await page.locator('button[type="submit"]').click();

    //!Assertions
    // Wait for result page
    await expect(page.locator(selectors.resultHeader)).toHaveText(
      "Registration Details"
    );
    // Check displayed values
    await expect(page.locator(selectors.resultFullName)).toHaveText(
      `${user.firstName} ${user.lastName}`
    );
    await expect(page.locator(selectors.resultAddress)).toHaveText(
      user.address
    );
    await expect(page.locator(selectors.resultEmail)).toHaveText(user.email);
    await expect(page.locator(selectors.resultPhone)).toHaveText(user.phone);
    await expect(page.locator(selectors.resultCountry)).toHaveText(
      user.country
    );
    await expect(page.locator(selectors.resultGender)).toHaveText(user.gender);
    await expect(page.locator(selectors.resultLanguage)).toHaveText(
      user.language
    );
    await expect(page.locator(selectors.resultSkills)).toHaveText(
      user.skills.join(", ")
    );
    await expect(page.locator(selectors.resultHobbies)).toHaveText("Movies");
    await expect(page.locator(selectors.resultDateOfBirth)).toHaveText(
      `${user.day} ${user.month} ${user.year}`
    );

    //Password masking
    const passwordMask = await page.locator("#password").innerText();
    expect(passwordMask.length).toBe(user.password.length);
    expect(passwordMask).toMatch(/^\*+$/);

    // Check password is not in HTML
    const html = await page.content();
    expect(html).not.toContain(user.password);
  });
});
