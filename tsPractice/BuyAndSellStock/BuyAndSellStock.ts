export function buyAndSellStocks(stockPrices: number[]) {

    let totalProfit = 0;
    let purchasePrice: number = null;

    if (stockPrices.length >= 2) {
        for (let currentDay = 0; currentDay < stockPrices.length; currentDay++) {
            let nextPrice = stockPrices[currentDay + 1];
            let currentPrice = stockPrices[currentDay];

            let shouldBuy = nextPrice > currentPrice;
            if (shouldBuy && purchasePrice === null) {
                purchasePrice = currentPrice;
            }

            let shouldSell = nextPrice < currentPrice;
            let isFinalDay = currentDay + 1 === stockPrices.length;
            if ((shouldSell || isFinalDay) && purchasePrice !== null) {
                totalProfit += currentPrice - purchasePrice;
                purchasePrice = null;
            }
        }
    }

    return totalProfit;
}