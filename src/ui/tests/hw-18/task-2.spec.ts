import test, { expect } from "@playwright/test";

test.describe("[UI] [demo-registration-form] [Smoke] Registration form", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(
      "https://anatoly-karpovich.github.io/demo-registration-form/"
    );
  });

  test("Fill registration form with valid values", async ({ page }) => {
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
      skills: "JavaScript",
      hobbies: "Movies",
      dateOfBirth: "4 April 1990",
    };

    //Full Name, Address, Email address, Phone
    await page.locator("#firstName").fill(user.firstName);
    await page.locator("#lastName").fill(user.lastName);
    await page.locator("#address").fill(user.address);
    await page.locator("#email").fill(user.email);
    await page.locator("#phone").fill(user.phone);

    //Country
    const countryDropdown = page.locator("#country");
    await countryDropdown.selectOption("USA");

    //Gender
    await page.locator('input[value="male"]').click();

    //Hobbies
    await page.locator('.hobby[value="Movies"]').click();

    //Language
    await page.locator("#language").fill(user.language);

    const skillsDropdown = page.locator("#skills");
    await skillsDropdown.selectOption("JavaScript");

    //Date of Birth
    const yearOfBirth = page.locator("#year");
    await yearOfBirth.selectOption("1990");
    const monthOfBirth = page.locator("#month");
    await monthOfBirth.selectOption("April");
    const dayOfBirth = page.locator("#day");
    await dayOfBirth.selectOption("4");

    //Password
    await page.locator("#password").fill(user.password);
    await page.locator("#password-confirm").fill(user.password);

    //Submit btn
    await page.locator('button[type="submit"]').click();

    //!Assertions
    await expect(page.locator("#fullName")).toContainText(
      `${user.firstName} ${user.lastName}`
    );
    await expect(page.locator("#address")).toContainText(`${user.address}`);
    await expect(page.locator("#email")).toContainText(`${user.email}`);
    await expect(page.locator("#phone")).toContainText(`${user.phone}`);
    await expect(page.locator("#phone")).toContainText(`${user.phone}`);
    await expect(page.locator("#country")).toContainText(`${user.country}`);
    await expect(page.locator("#gender")).toContainText(`${user.gender}`);
    await expect(page.locator("#language")).toContainText(`${user.language}`);
    await expect(page.locator("#skills")).toContainText(`${user.skills}`);
    await expect(page.locator("#hobbies")).toContainText(`${user.hobbies}`);
    await expect(page.locator("#dateOfBirth")).toContainText(
      `${user.dateOfBirth}`
    );
    await expect(page.locator("#password")).toContainText(`*****`);
  });
});
