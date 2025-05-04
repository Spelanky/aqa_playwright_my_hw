//* https://playwright.dev/docs/test-assertions#list-of-assertions

//! PAGE CHECK AFTER OPEN
//* Title and URL
// 1 Норм вариант
await expect(page).toHaveTitle("Dashboard");
await expect(page).toHaveTitle(/Dashboard/);
await expect(page).toHaveURL("https://google.com");

// 2 Плохой вариант, можно проще
const title = await page.title();
await expect(title).toContain("Dashboard");

//Soft assertions - Test Process is not terminated if failed
await expect.soft(page).toHaveTitle("Login - Headless Forms");

//! Checking fields before filling
await expect(await page.locator("#auth_email")).toBeVisible();
await expect(await page.locator("#auth_email")).toBeEmpty();
await expect(await page.locator("#auth_email")).toBeEditable();
await expect(await page.locator("#auth_email")).toBeFocused();

//! Checking some Button before submit. В .click уже содержатся ожидания пока кнопка станет доступной и это необязательные проверки
const loginbtn = page.getByRole("button", { name: "Login" });
await expect(loginbtn).toBeVisible(); // явно ждём, пока кнопка станет видимой
await expect(loginbtn).toBeEnabled(); // явно ждём, пока кнопка станет доступной
await expect(loginbtn).toHaveAttribute("type", "submit");
await loginbtn.click(); // и только потом кликаем

//? Example: Enter email + password + submit
await page.locator("#signinEmail1").fill(user.email);
await page.fill("#signinPassword1", user.password);
await page.locator('(//button[normalize-space()="Anmelden"])[1]').click();

//! Element EXACTLY matches text
await expect(page.getByRole("button", { name: "Login" }).toHaveText("Login"));
//! Element CONTAINS partialy text
await expect(
  page.getByRole("button", { name: "Register" }).toContainText()("Reg")
);
//! Input field is not empty and has value
await expect(locator).toHaveValue(value);

//! List of elements has given length (for selectors drop downs, how many options are avialable)
const options = await page.locator('select[(name = "season")] option'); //option - to select all options (currently have 4)
await expect(options).toHaveCount(4);

//! Checkbox and Radiobutton
await page.locator('//input[@value="option2"]').check();
await page.check('//input[@value="option2"]');
await expect(await page.locator('//input[@value="option2"]').toBeChecked());
await expect(
  await page.locator('//input[@value="option2"]').isChecked()
).toBeTruthy();
await expect(
  await page.locator('//input[@value="option1"]').isChecked()
).toBeFalsy();

//! Screenshot element
const element = page.locator("#sidebar");
await expect(element).toHaveScreenshot("sidebar-home.png");

//! By Image Text and image visible
await expect(page.locator("#header-logo")).toBeVisible();

const logo = await page.getByAltText("company logo"); //to locate an element, usually image, by its text alternative
await expect(logo).toBeVisible(); // image is on the page
