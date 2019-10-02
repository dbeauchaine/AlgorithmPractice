export function buyAndSellStocks(stockPrices: number[]) {

    let totalProfit = 0;
    let purchasePrice: number = null;

    if (stockPrices.length >= 2) {
        for (let currentDay = 0; currentDay < stockPrices.length; currentDay++) {
            const nextPrice = stockPrices[currentDay + 1];
            const currentPrice = stockPrices[currentDay];

            const shouldBuy = nextPrice > currentPrice;
            if (shouldBuy && purchasePrice === null) {
                purchasePrice = currentPrice;
            }

            const shouldSell = nextPrice < currentPrice;
            const isFinalDay = currentDay + 1 === stockPrices.length;
            if ((shouldSell || isFinalDay) && purchasePrice !== null) {
                totalProfit += currentPrice - purchasePrice;
                purchasePrice = null;
            }
        }
    }

    return totalProfit;
}
