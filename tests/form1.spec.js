import { test, expect } from "@playwright/test";

test("Student Registration Form - E2E with Assertions", async ({ page }) => {
  await page.goto("https://demoqa.com/automation-practice-form");
  await expect(page).toHaveTitle(/demosite/);
  await expect(page.getByText("Student Registration Form")).toBeVisible();
  await page.getByPlaceholder("First Name").fill("Ashish");
  await page.getByPlaceholder("Last Name").fill("Singh");
  await expect(page.getByPlaceholder("First Name")).toHaveValue("Ashish");
  await page.getByPlaceholder("name@example.com").fill("ashish@gmail.com");
  await expect(page.getByPlaceholder("name@example.com")).toHaveValue(
    "ashish@gmail.com",
  );
  await page.locator('//label[@for="gender-radio-1"]').click();
  await expect(page.locator('//label[@for="gender-radio-1"]')).toBeChecked();
  await page.locator("#userNumber").fill("9876543210");
  await page
    .locator('//input[@class="subjects-auto-complete__input"]')
    .fill("English");
  await page
    .locator('//input[@class="subjects-auto-complete__input"]')
    .press("Enter");
  await expect(page.locator("#userNumber")).toHaveValue("9876543210");
  await page.getByPlaceholder("Current Address").fill("Punjab, India");
  await page.locator('//label[@for="hobbies-checkbox-1"]').click();
  await expect(
    page.locator('//label[@for="hobbies-checkbox-1"]'),
  ).toBeChecked();
  await page
    .locator('(//div[@class="css-1xc3v61-indicatorContainer"])[1]')
    .click();
  await page.keyboard.press("ArrowDown");
  await page.keyboard.press("Enter");
  await page.locator("#react-select-4-input").click();
  await page.keyboard.press("ArrowDown");
  await page.keyboard.press("Enter");

  await page.locator('//button[@class="btn btn-primary"]').click();
  await page.screenshot({
    path: "tests/form1/img1.png",
  });
  // await expect(page).toHaveScreenshot("tests/form1/img1.png");
});
