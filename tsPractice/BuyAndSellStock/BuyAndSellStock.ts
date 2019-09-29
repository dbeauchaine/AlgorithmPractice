export function buyAndSellStocks(array: number[]) {

    let profit = 0;
    let purchased: number = null;

    if (array.length >= 2) {
        for (let i = 1; i < array.length; i++) {
            if (array[i - 1] < array[i]) {
                if (!purchased) {
                    purchased = array[i - 1];
                }

            } else if(array[i-1] > array[i]) {
                if (purchased) {
                    profit += array[i - 1] - purchased;
                    purchased = null;
                } else {
                    purchased = array[i];
                }
            }
            if (i + 1 === array.length && purchased) {
                profit += array[i] - purchased;
            }
        }
    }
    return profit;
}