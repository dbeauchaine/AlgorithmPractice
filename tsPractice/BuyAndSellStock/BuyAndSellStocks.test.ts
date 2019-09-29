import { buyAndSellStocks } from "./BuyAndSellStock";

describe('BuyAndSellStocksTests', () => {
    let testCases: TestCase[] = [
        { profit: 0, inputArray: [1], description: "Array length of 1 returns 0" },
        { profit: 1, inputArray: [1, 2], description: "Buy on day 1, sell on day 2. Profit = 1." },
        { profit: 2, inputArray: [1, 2, 3], description: "Buy on day 1, sell on day 3. Profit = 2. Array length 3." },
        { profit: 2, inputArray: [1, 2, 3, 1], description: "Buy on day 1, sell on day 3. Profit = 2. Array length 4." },
        { profit: 0, inputArray: [7, 6, 4, 3, 1], description: "Never buy, Profit = 0. Array length 5." },
        { profit: 7, inputArray: [7, 1, 5, 3, 6, 4], description: "Buy on day 2, sell on day 3, buy on day 4, sell on day 5. Profit = 7. Array length 6." },
        { profit: 2, inputArray: [1, 2, 2, 3], description: "Buy on day one, sell on day 4. Profit = 2. Duplicate number." },
        { profit: 2, inputArray: [1, 2, 3, 3], description: "Buy on day one, sell on day 4. Profit = 2. Duplicate on selling day." },
        { profit: 0, inputArray: [1, 1, 1, 1, 1, 1], description: "Never buy, profit = 0. All duplicates." },
        { profit: 2, inputArray: [2, 1, 2, 0, 1], description: "Buy on one, sell on 2, buy on 4, sell on 5. Buying at zero is handled." }
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