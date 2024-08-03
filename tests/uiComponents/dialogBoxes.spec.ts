import { test, expect } from "@playwright/test";

test.beforeEach("start beforeEach test", async ({ page }) => {
  await page.goto("http://localhost:4200/");
});

test.describe("DialogBoxes", () => {
  test.beforeEach(async ({ page }) => {
    await page.getByText('Tables & Data').click()
    await page.getByText('Smart Table').click()
  });

  test("dialogBoxes", async ({ page }) => {
   
    page.on('dialog', dialog => {
        expect(dialog.message()).toEqual('Are you sure you want to delete?')
        dialog.accept()
    })

    await page.getByRole('table').locator('tr', {hasText: "mdo@gmail.com"}).locator('.nb-trash').click()
    await expect(page.locator('table tr').first()).not.toHaveText('mdo@gmail.com')
    await expect(page.locator('table tr').nth(4)).toHaveText('mdo@gmail.com');
  });
});



// test.describe("DialogBoxes", () => {
  // Описывается набор тестов с названием "DialogBoxes".

  //   test.beforeEach(async ({ page }) => {
  // Перед каждым тестом в этом наборе будет выполняться следующий код.

  //   await page.getByText('Tables & Data').click()
  // Находит и кликает по элементу с текстом 'Tables & Data'.

  //   await page.getByText('Smart Table').click()
  // Находит и кликает по элементу с текстом 'Smart Table'.

  //   });
  
//   test("dialogBoxes", async ({ page }) => {
  // Описывается тест с названием "dialogBoxes".

  //   page.on('dialog', dialog => {
  // Устанавливается обработчик событий для всплывающих окон (диалогов).

  //   expect(dialog.message()).toEqual('Are you sure you want to delete?')
  // Проверяется, что сообщение в диалоговом окне соответствует ожидаемому.

  //   dialog.accept()
  // Принимает (нажимает "OK") в диалоговом окне.
//   })
  
//   await page.getByRole('table').locator('tr', {hasText: "mdo@gmail.com"}).locator('.nb-trash').click()
  // Находит строку в таблице, содержащую текст "mdo@gmail.com", и кликает по иконке удаления в этой строке.

  //   await expect(page.locator('table tr').first()).not.toHaveText('mdo@gmail.com')
  // Проверяет, что первая строка в таблице больше не содержит текст "mdo@gmail.com".

  //   });
//   });