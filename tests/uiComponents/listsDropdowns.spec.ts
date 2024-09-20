import { test, expect } from "@playwright/test";

test.beforeEach("start beforeEach test", async ({ page }) => {
  await page.goto("http://localhost:4200/");
});

test.describe("listsAndDropdowns", () => {
  test("lists and dropdowns", async ({ page }) => {
    const dropDownMenu = page.locator("ngx-header nb-select");
    await dropDownMenu.click();

    page.getByRole("list"); //when the list has a UL tag
    page.getByRole("listitem"); //when the list has LI tag

    const optionList = page.getByRole("list").locator("nb-option");
    const optionList2 = page.locator("nb-option-list nb-option");
    await expect(optionList2).toHaveText([
      "Light",
      "Dark",
      "Cosmic",
      "Corporate",
    ]);
    await optionList.filter({ hasText: "Cosmic" }).click();
    const header = page.locator("nb-layout-header");
    await expect(header).toHaveCSS("background-color", "rgb(50, 50, 89)");

    const colors = {
      Light: "rgb(255, 255, 255)",
      Dark: "rgb(34, 43, 69)",
      Cosmic: "rgb(50, 50, 89)",
      Corporate: "rgb(255, 255, 255)",
    };

    await dropDownMenu.click();
    for (const color in colors) {
      await optionList.filter({ hasText: color }).click();
      await expect(header).toHaveCSS("background-color", colors[color]);
      if (color != "Corporate") await dropDownMenu.click();
    }
  });
});





// const allOfThem = page.locator('nb-option-list nb-option');
// await expect(allOfThem).toHaveText(['Light', 'Dark', 'Cosmic', 'Corporate']);

// const options = await allOfThem.allTextContents();
// options.forEach(async (option, index) => {
// if (option === 'Corporate') {
// await allOfThem.nth(index).click();
// }
// });

// Конечно! Давайте разберем эту строку:

// const options = await allOfThem.allTextContents();

// •  const options: Создает константу options, которая
//  будет хранить результат выполнения следующей команды.

// •  await: Ожидает завершения асинхронной операции перед тем, 
// как продолжить выполнение кода. Это необходимо, 
// потому что allTextContents() возвращает промис.

// •  allOfThem.allTextContents(): Этот метод возвращает массив 
// всех текстовых содержимых элементов, найденных локатором allOfThem.

// В итоге, options будет массивом строк, каждая из которых
//  представляет текст одного из элементов, найденных локатором allOfThem.

// Если у вас есть еще вопросы или нужно что-то уточнить, дайте знать!