//* In each file
import { test, expect } from "@playwright/test";
// --------------------------------------------------------------------- //

//! FILL INPUT FIELDS
await page.fill("#auth_email", user.email);
await page.locator("#signinEmail1").fill("blabla@mail.com"); // CLEAR and fill input field
await page.locator("#signinPassword1").type("Password"); // just typing without clear
// Type in textbox slowly:
await page.locator("#signinPassword1").type("some text", { delay: 1000 });

//! Ждем, пока все элементы .spinner-border исчезнут из DOM
await page.waitForFunction(
  () => {
    return document.querySelectorAll(".spinner-border").length === 0;
  },
  { timeout: 7000 }
);

//! LOCATE SINGLE ELEMENT
// Usual ways to find elent

await page.getByRole("button", { name: "Anmelden", exact: true }).click();
await page.getByRole("link", { name: "Forgot Your Password?" }).click();

await page.getByLabel("Email").fill(user.email_form);
await page.locator("#signinEmail1").fill("blabla@mail.com"); //CSS
await page.locator('//input[@value="option2"]'); //XPath

// Ways to find element on the page using text
await page.locator("text=Add to Cart");
await page.locator("h3:has-text(" + productName + ")");

// Wait for element:
await page
  .getByRole("button", { name: "Remove" })
  .waitFor({ state: "visible" }); // can be: visible, hidden, detached
await page.locator("div li").waitFor();

// Get first element from multiple elements
console.log(await page.locator(".card-body a").nth(0).textContent());
console.log(await page.locator(".card-body a").first().textContent());
// Get last element from multiple elements
await page.locator(".card-body a").last().textContent();
// Get text of all the elements found:
await title_products.allTextContents();

// Accept/Dismiss Alert/Popup/Dialog:
await page.on("dialog", (dialog) => dialog.accept());
await page.on("dialog", (dialog) => dialog.dismiss());

//! Checkbox and Radiobutton
await page.locator('//input[@value="option2"]').check();
await page.check('//input[@value="option2"]');
await page.locator("#checkbox").waitFor({ state: "attached" }); //can be: visible, hidden, detached
await expect(await page.locator('//input[@value="option2"]').toBeChecked());
await expect(
  await page.locator('//input[@value="option2"]').isChecked()
).toBeTruthy();

//! By Image Text
const logo = await page.getByAltText("company logo"); //to locate an element, usually image, by its text alternative
await expect(logo).toBeVisible(); // image is on the page

//! By placeholder or Text
await page.getByPlaceholder("Enter e-mail address").fill(user.email); //to locate an input by placeholder
await page.getByText("to locate by text content");

await page.getByLabel(); //to locate a form control by associated label's text
await page.getByTitle(); //to locate an element by its title attribute
await page.getByTestId(); //to locate an element based on its data-testid attribute (other attributes can be configured)

//!Locate multiple elements
const elements = await page.$$("locator");

//! Browser Navigation
//to page
await page.goto("https://google.com");
//  Go Back and Forward:
await page.goBack();
await page.goForward();

//! Frames:
const frame_courses = page.frameLocator("#courses-iframe");
//'#courses-iframe' -> This is the ID of this frame
