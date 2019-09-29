export function buyAndSellStocks(stockPrices: number[]) {

    let totalProfit = 0;
    let purchasePrice: number = null;

    if (stockPrices.length >= 2) {
        for (let currentDay = 0; currentDay < stockPrices.length; currentDay++) {
            let nextPrice = stockPrices[currentDay + 1];
            let currentPrice = stockPrices[currentDay];
            let shouldSell = nextPrice < currentPrice;
            let shouldBuy = nextPrice > currentPrice;
            let isFinalDay = currentDay + 1 === stockPrices.length;

            if (shouldBuy && !purchasePrice) {
                purchasePrice = currentPrice;
            }
            if ((shouldSell || isFinalDay) && purchasePrice) {
                totalProfit += currentPrice - purchasePrice;
                purchasePrice = null;
            }
        }
    }

    return totalProfit;
}