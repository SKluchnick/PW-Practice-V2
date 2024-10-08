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





// Конечно, вот объяснение кода на русском под каждой строчкой:

// test("test", async ({ page }) => { 
// Описываем тест с именем "test" и делаем его асинхронным, передавая объект page

// const res = page.locator("ngx-header nb-select");
// Находим элемент с селектором "ngx-header nb-select" и сохраняем его в переменную res

// await res.click();
// Ожидаем, пока элемент res будет нажат

// const list = page.getByRole("list").locator("nb-option");
// Находим элемент списка с ролью "list" и внутри него элементы с селектором "nb-option"

// const list2 = page.locator("nb-option-list nb-option");
// Находим элементы с селектором "nb-option-list nb-option" и сохраняем их в переменную list2

// await expect(list2).toHaveText(["Light", "Dark", "Cosmic", "Corporate"]);
// Ожидаем, что элементы list2 будут содержать текст "Light", "Dark", "Cosmic", "Corporate"

// const options = await list2.allTextContents();
// Получаем все текстовые содержимое элементов list2 и сохраняем их в переменную options

// await Promise.all(
// options.map(async (option, index) => {
// Используем метод map для создания массива промисов, которые будут выполнены параллельно

// if (option.trim() === "Dark") {
// Если текст элемента равен "Dark" (с удалением пробелов в начале и конце)

// await list2.nth(index).click();
// Ожидаем, пока будет нажат элемент с индексом index в list2
// }
// })
// );
// Ожидаем выполнения всех промисов, созданных в map
// });