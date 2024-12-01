import { test, expect } from "@playwright/test";

test.beforeEach("start beforeEach test", async ({ page }) => {
  await page.goto("http://localhost:4200/");
});

test.describe("Form Modal & Overlays => Checkboxe", () => {
  test.beforeEach(async ({ page }) => {
    await page.getByText('Modal & Overlays').click()
    await page.getByText('Toastr').click()
  });
  test('Checkboxe', async({page}) => {
  
    await page.getByRole('checkbox', {name: "Hide on click"}).uncheck({force: true})
    const box = await page.getByRole("checkbox", { name: "Hide on click" });
    expect(await box.isChecked()).toBeFalsy();
   
    await page.getByRole('checkbox', {name: "Prevent arising of duplicate toast"}).check({force: true})
    const boxTwo = await page.getByRole("checkbox", { name: "Prevent arising of duplicate toast" });
    expect(await boxTwo.isChecked()).toBeTruthy();

    const allBoxes = page.getByRole('checkbox')
    for(const box of await allBoxes.all()){
        await box.uncheck({force: true})
        expect(await box.isChecked()).toBeFalsy()
    }

    
})
});

test.describe("Form Modal & Overlays => Checkboxe two", () => {
  test.beforeEach(async ({ page }) => {
    await page.getByText('Modal & Overlays').click()
    await page.getByText('Toastr').click()
  });
  test('Checkboxe', async({page}) => {
  
    await page.getByLabel("Hide on click").uncheck({ force: true })
    await page.getByLabel("Prevent arising of duplicate toast").check({ force: true })
    const allCheckBoxes = page.getByRole('checkbox')
    for(const box of await allCheckBoxes.all()){
      await box.check({force:true})
      expect(await box.isChecked()).toBeTruthy()
    }
    
})
});




// 1. 
// const allBoxes = this.page.getByRole('checkbox'); - цей рядок оголошує константу allBoxes,
//  яка отримує всі елементи на сторінці з роллю checkbox. Метод getByRole використовується 
//  для пошуку елементів за їхньою роллю в DOM.
// 2. 
// for (const box of await allBoxes.all()) { ... } - це цикл for...of, який проходить 
// через всі чекбокси, отримані в попередньому кроці. Метод all() повертає проміс,
//  який розв'язується в масив усіх елементів, що відповідають запиту. 
//  Використання await перед allBoxes.all() означає, що виконання коду буде призупинено,
//   поки проміс не буде виконано.
// 3. 
// await box.uncheck({force: true}); - в цьому рядку кожен чекбокс буде знято з вибору.
//  Опція {force: true} вказує, що дія має бути виконана незалежно від того, чи є елемент 
//  видимим чи доступним для користувача.
// 4. 
// expect(await box.isChecked()).toBeFalsy(); - після зняття вибору з чекбокса, цей рядок 
// перевіряє, що чекбокс дійсно не вибраний. Метод isChecked() повертає проміс, який розв'
// язується в булеве значення, що вказує, чи є чекбокс вибраним. toBeFalsy() є методом Jest,
//  який перевіряє, що значення є false або може бути приведено до false