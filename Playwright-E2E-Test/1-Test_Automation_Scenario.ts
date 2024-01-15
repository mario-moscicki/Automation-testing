import { test, expect } from "@playwright/test";

test.describe("payment", () => {
  test("should allow to order consultation with prescription", async ({
    page,
  }) => {
    await page.goto("%URL_SITE%");

    await expect(page).toHaveTitle(
      "Lekarz Online: Szybkie Porady Lekarskie, Recepty Online I Zwolnienia (L4) Przez Internet"
    );
    // dodatkowy krok na zaakceptowanie cookies
    await page.getByRole("button", { name: "Zezwól na wszystkie" }).click();
    await page.getByRole("link", { name: "Zaloguj się" }).click();
    await page
      .getByPlaceholder("E-mail, PESEL lub identyfikator")
      .fill("%E-MAIL%);
    await page.getByPlaceholder("Hasło").fill("%PASSWORD%");
    await page.locator("button").locator("nth=3").click();
    await page.getByRole("button", { name: "Umów się" }).click();
    // czekam na załadowanie całego elementu: id="%CONFIDENTIAL%co-widget"
    await page.waitForTimeout(4000);
    await page.getByRole("button", { name: "Recepta" }).click();
    await page.locator("#react-select-2-input").click();
    await page.locator("#react-select-2-input").fill("Afastural");
    await page.locator(':nth-match(:text("Afastural"), 3)').click();
    await page.locator(".fk-input__label").click();
    await page.click('text="1 sasz. 8 g"');
    await page.locator(".fk-checkbox__label").click();
    await page.getByRole("button", { name: "Wybierz" }).click();
    await page.click(
      'text="Korzystam z pakietu %CONFIDENTIAL% i zniżki 50% przez cały rok na wszystkie konsultacje z lekarzem ogólnym z opcją wystawienia e-recepty i e-zwolnienia."'
    );
    await page.click('text="Zaznacz wszystkie"');
    await page.getByRole("button", { name: "Umów za 59.00 PLN" }).click();
    //
    await page.waitForTimeout(60000);
    await expect(page).toHaveURL(/^https:\/\/secure.\payu\.com\/pay/);
  });
});
