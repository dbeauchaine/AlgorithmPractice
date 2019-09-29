import { buyAndSellStocks } from "./BuyAndSellStock";

describe('BuyAndSellStocksTests', () => {
    let testCases: TestCase[] = [
        { profit: 0, inputArray: [1], description: "Array length of 1 returns 0" },
        { profit: 1, inputArray: [1, 2], description: "Buy on day 1, sell on day 2. Profit = 1." },
        { profit: 2, inputArray: [1, 2, 3], description: "Buy on day 1, sell on day 3. Profit = 2. Array length 3." },
        { profit: 2, inputArray: [1, 2, 3, 1], description: "Buy on day 1, sell on day 3. Profit = 2. Array length 4." },
        { profit: 0, inputArray: [7,6,4,3,1], description: "Never buy, Profit = 0. Array length 5." }
    ]

    testCases.forEach((scenario: TestCase) => {

        it(`Returns the total profit from buying and selling stocks: ${scenario.description}`, function () {
            let profit = buyAndSellStocks(scenario.inputArray);

            expect(profit).toEqual(scenario.profit);
        });
    });

    interface TestCase {
        profit: number;
        inputArray: number[];
        description: string;
    }
});