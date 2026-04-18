import { test, expect } from "@playwright/test";

test("Vinoth Registration Form - E2E", async ({ page }) => {
  await page.goto("https://vinothqaacademy.com/demo-site/");

  await expect(page).toHaveTitle(/Demo Site/);

  await expect(page.getByLabel("First Name")).toBeVisible();

  await page.getByLabel("First Name").fill("Ashish");
  await page.getByLabel("Last Name").fill("Singh");

  await expect(page.getByLabel("First Name")).toHaveValue("Ashish");

  await page.getByLabel("Male", { exact: true }).check();

  await page.getByLabel("TestNG").check();

  await expect(page.getByLabel("TestNG")).toBeChecked();

  await page.getByLabel("Street Address").fill("Punjab");
  await page.getByLabel("City").fill("Kharar");

  await expect(page.getByLabel("City")).toHaveValue("Kharar");
  await page.locator('//input[@name="vfb-13[address-2]"]').fill("abcd");
  await page
    .locator(
      '(//span[@class="select2-selection select2-selection--single"])[1]',
    )
    .click();
  await page.locator('//input[@class="select2-search__field"]').fill("India");
  await page.keyboard.press("Enter");

  await page.locator('//input[@name="vfb-13[zip]"]').fill("abcd");
  await page.locator('//input[@id="vfb-18"]').fill("11/10/2000");

  await page.getByLabel("Email").fill("ashish@gmail.com");

  await expect(page.getByLabel("Email")).toHaveValue("ashish@gmail.com");

  await page
    .locator(
      '(//span[@class="select2-selection select2-selection--single"])[2]',
    )
    .click();
  await page.locator('//input[@class="select2-search__field"]').fill("12");
  await page.keyboard.press("Enter");
  await page
    .locator(
      '(//span[@class="select2-selection select2-selection--single"])[3]',
    )
    .click();
  await page.locator('//input[@class="select2-search__field"]').fill("10");
  await page.keyboard.press("Enter");

  await page.getByLabel("Mobile Number").fill("9876543210");

  await expect(page.getByLabel("Mobile Number")).toHaveValue("9876543210");

  await page.locator('//input[@name="vfb-3"]').fill("33");

  await expect(page.locator('//input[@name="vfb-3"]')).toHaveValue("33");

  await page.locator('//textarea[@id="vfb-23"]').fill("abcd");
  await page.getByRole("button", { name: /submit/i }).click();

  await page.screenshot({
    path: "tests/form2/img2.png",
  });
  // await expect(page).toHaveScreenshot("tests/form2/img2.png");
});
