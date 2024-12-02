import { test, expect } from "@playwright/test";

test.beforeEach("start beforeEach test", async ({ page }) => {
  await page.goto("http://localhost:4200/");
});

test.describe("listsAndDropdowns => lists and dropdowns", () => {
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

test.describe("listsAndDropdowns => lists and dropdowns two", () => {
  test("lists and dropdowns two", async ({ page }) => {
    const dropDownMenu = page.locator("ngx-header nb-select");
    await dropDownMenu.click();

    // page.getByRole("list"); //when the list has a UL tag
    // page.getByRole("listitem"); //when the list has LI tag

    // const optionList = page.getByRole("list").locator("nb-option");
    // console.log(optionList)

    const optionListOne = page.getByRole("list").locator("nb-option");
    const count = await optionListOne.count();

    for (let i = 0; i < count; i++) {
      const optionText = await optionListOne.nth(i).innerText();
      console.log(`Option ${i + 1}: ${optionText}`);
    }

    const optionListTwo = await page
      .getByRole("list")
      .locator("nb-option")
      .evaluateAll((options) => {
        return options.map((option) => option.textContent);
      });

    console.log(optionListTwo);

    // /array/
    const optionListThree = await page
    .getByRole('list')
    .locator('nb-option');
    
    const texts = await optionListThree.allTextContents();
    console.log(texts);
    
    for (let i = 0; i < texts.length; i++) {
    if (texts[i].includes('Dark')) {
    await optionListThree.nth(i).click();
    break; 
    }
    }
    
    // const optionListFour = page.locator("nb-option-list nb-option");
    // await expect(optionListFour).toHaveText([
    //   "Light",
    //   "Dark",
    //   "Cosmic",
    //   "Corporate",
    // ]);
    // await optionListFour.filter({ hasText: "Cosmic" }).click();
    // const header = page.locator("nb-layout-header");
    // await expect(header).toHaveCSS("background-color", "rgb(50, 50, 89)");

    // const colors = {
    //   Light: "rgb(255, 255, 255)",
    //   Dark: "rgb(34, 43, 69)",
    //   Cosmic: "rgb(50, 50, 89)",
    //   Corporate: "rgb(255, 255, 255)",
    // };

    // await dropDownMenu.click();
    // for (const color in colors) {
    //   await optionList.filter({ hasText: color }).click();
    //   await expect(header).toHaveCSS("background-color", colors[color]);
    //   if (color != "Corporate") await dropDownMenu.click();
    // }
  });
});

















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


// optionListFour не является массивом. Это локатор Playwright,
//  который представляет собой набор элементов, соответствующих 
//  селектору "nb-option-list nb-option". Локаторы в Playwright 
//  позволяют вам взаимодействовать с элементами на странице, 
//  но они не являются массивами в традиционном смысле.

// Когда вы используете метод toHaveText с локатором, 
// Playwright проверяет, что текстовое содержимое всех 
// элементов, найденных этим локатором, соответствует 
// ожидаемым значениям. В данном случае, optionListFour
//  проверяется на наличие текстов "Light", "Dark", "Cosmic" и "Corporate".

// const optionListFour = page.locator("nb-option-list nb-option");
// await expect(optionListFour).toHaveText([
//   "Light",
//   "Dark",
//   "Cosmic",
//   "Corporate",
// ]);
// await optionListFour.filter({ hasText: "Cosmic" }).click();


// метод nth(i) относится к методам Playwright.
//  Он используется для выбора элемента с определенным индексом из набора элементов,
//  найденных локатором. Вот как это работает:

// •  locator.nth(i): Этот метод возвращает новый локатор, 
// который указывает на элемент с индексом i в наборе элементов,
//  найденных исходным локатором. Индексация начинается с 0, 
//  поэтому nth(0) выбирает первый элемент, nth(1) — второй и так далее.

// Пример использования:

// const optionList = page.locator('nb-option');
// const secondOption = optionList.nth(1); // Выбирает второй элемент из набора
// await secondOption.click(); // Выполняет клик по второму элементу
