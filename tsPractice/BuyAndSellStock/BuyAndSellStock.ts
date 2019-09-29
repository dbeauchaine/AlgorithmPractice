export function buyAndSellStocks(stockPrices: number[]) {

    let totalProfit = 0;
    let purchasePrice: number = null;

    if (stockPrices.length >= 2) {
        for (let currentDay = 1; currentDay < stockPrices.length; currentDay++) {
            let previousPrice = stockPrices[currentDay - 1];
            let currentPrice = stockPrices[currentDay];

            if (previousPrice < currentPrice && !purchasePrice) {
                purchasePrice = previousPrice;
            } else if (previousPrice > currentPrice && purchasePrice) {
                totalProfit += previousPrice - purchasePrice;
                purchasePrice = null;
            }
            if (currentDay + 1 === stockPrices.length && purchasePrice) {
                totalProfit += currentPrice - purchasePrice;
            }
        }
    }

    return totalProfit;
}