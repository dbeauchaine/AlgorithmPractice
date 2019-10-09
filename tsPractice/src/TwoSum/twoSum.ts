export function twoSum(inputArray: number[], target: number) {
    for (let i = 0; i < inputArray.length; i++) {
        const firstValue = inputArray[i];

        for (let j = i + 1; j < inputArray.length; j++) {
            const secondValue = inputArray[j];
            const totalValue = firstValue + secondValue;

            if (totalValue === target) {
                return [i, j];
            }
        }
    }
}
