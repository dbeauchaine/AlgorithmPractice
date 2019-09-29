import { buyAndSellStocks } from "./BuyAndSellStock";

describe('BuyAndSellStocksTests', () => {
    let testCases: TestCase[] = [{ profit: 0, inputArray: [1], description: "Array length of 1 returns 0" }]

    testCases.forEach((scenario: TestCase) => {

        it(`Returns the total profit from buying and selling stocks: ${scenario.description}`, function () {
            let profit = buyAndSellStocks(scenario.inputArray);

            expect(profit === scenario.profit);
        });
    });

    interface TestCase {
        profit: number;
        inputArray: number[];
        description: string;
    }
});