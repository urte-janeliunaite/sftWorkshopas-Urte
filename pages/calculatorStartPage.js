exports.CalculatorStartPage = class CalculatorStartPage {
    constructor(page) {
        this.page = page;
    }

    async goto() {
        await this.page.goto('https://testsheepnz.github.io/BasicCalculator');
    }
    
    async fillFirstNumber(value) {
        const firstNumberSelector = "#number1Field";
        await this.page.fill(firstNumberSelector, value);
    }
    async fillSecondNumber(value) {
        const secondNumberSelector = "#number2Field";
        await this.page.fill(secondNumberSelector, value);
    }
}