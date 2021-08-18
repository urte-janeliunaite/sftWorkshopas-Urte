const { test, expect } = require('@playwright/test');
const { CalculatorStartPage } = require('../pages/calculatorStartPage');

test.describe('Test calculator', () => {
  let page;
  test.beforeAll(async ({ browser }) => {
    page = await browser.newPage();
    startPage = new CalculatorStartPage(page);
  });

  test.beforeEach(async () => {
    await page.goto('https://testsheepnz.github.io/BasicCalculator');
  });

  test('Test that page is loading', async () => {
    await startPage.goto();
      const name = await page.innerText('.intro-heading');
      expect(name).toBe('BASIC CALCULATOR');
    });

  const calculatorPrototypes = ['Prototype', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  calculatorPrototypes.forEach(calculatorPrototype => {
    test.only(`Check that build ${calculatorPrototype} has checked box of Integers Only`, async () => {
      await page.selectOption('select[name="selectBuild"]', calculatorPrototype);
      const checked = await page.isChecked('#integerSelect');
      expect(checked).toBe(true);
      });

    test.only(`Check that build ${calculatorPrototype} can successfully add numbers`, async () => {
      await page.selectOption('select[name="selectBuild"]', calculatorPrototype);
      await calculatorStartPage.fillFirstNumber('2');
      await calculatorStartPage.fillSecondNumber('3');
      await page.selectOption('select[name="selectOperation"]', '0');
      await page.click('input:has-text("Calculate")');
      const answerField = await page.getAttribute('#numberAnswerField', 'value');
      expect(answerField).toBe('5');
//      await page.click('text=Clear');
      });
    test(`Check that build ${calculatorPrototype} can successfully subtract`, async () => {
      await page.selectOption('select[name="selectBuild"]', calculatorPrototype);
      await calculatorStartPage.fillFirstNumber('2');
      await calculatorStartPage.fillSecondNumber('3');
      await page.selectOption('select[name="selectOperation"]', '1');
      await page.click('input:has-text("Calculate")');
      const answerField = await page.getAttribute('#numberAnswerField', 'value');
      expect(answerField).toBe('1');
//      await page.click('text=Clear');
    });
    test(`Check that build ${calculatorPrototype} can successfully multiply`, async () => {
      await page.selectOption('select[name="selectBuild"]', calculatorPrototype);
      await calculatorStartPage.fillFirstNumber('2');
      await calculatorStartPage.fillSecondNumber('3');
      await page.selectOption('select[name="selectOperation"]', '2');
      await page.click('input:has-text("Calculate")');
      const answerField = await page.getAttribute('#numberAnswerField', 'value');
      expect(answerField).toBe('4');
//      await page.click('text=Clear');
        });
        
    test(`Check that build ${calculatorPrototype} can successfully divide`, async () => {
      await page.selectOption('select[name="selectBuild"]', calculatorPrototype);
      await calculatorStartPage.fillFirstNumber('2');
      await calculatorStartPage.fillSecondNumber('3');
      await page.selectOption('select[name="selectOperation"]', '3');
      await page.click('input:has-text("Calculate")');
      const answerField = await page.getAttribute('#numberAnswerField', 'value');
      expect(answerField).toBe('3');
//      await page.click('text=Clear');
    });


    test(`Check that build ${calculatorPrototype} can successfully concatenate`, async () => {
      await page.selectOption('select[name="selectBuild"]', calculatorPrototype);
      await calculatorStartPage.fillFirstNumber('2');
      await calculatorStartPage.fillSecondNumber('3');
      await page.selectOption('select[name="selectOperation"]', '4');
      await page.click('input:has-text("Calculate")');
      const answerField = await page.getAttribute('#numberAnswerField', 'value');
      expect(answerField).toContain('52');
//      await page.click('text=Clear');
    });
 
      test.only(`Check that build ${calculatorPrototype} has all fields`, async () => {
        await page.selectOption('select[name="selectBuild"]', calculatorPrototype);
        const firstNumber = await page.isVisible('#number1Field');
        const secondNumber = await page.isVisible('#number2Field');
        const operation = await page.isVisible('#selectOperationDropdown');
        const calculateButton = await page.isVisible('#calculateButton');
        const answerField = await page.isVisible('#numberAnswerField');
        expect(firstNumber).toBe(true);
        expect(secondNumber).toBe(true);
        expect(operation).toBe(true);
        expect(calculateButton).toBe(true);
        expect(answerField).toBe(true);
    });
  });
});
