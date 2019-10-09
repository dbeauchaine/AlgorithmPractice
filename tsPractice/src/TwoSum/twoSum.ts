export function twoSum(inputArray: number[], target: number) {
    for (let firstIndex = 0; firstIndex < inputArray.length; firstIndex++) {
        const firstValue = inputArray[firstIndex];

        for (let secondIndex = firstIndex + 1; secondIndex < inputArray.length; secondIndex++) {
            const secondValue = inputArray[secondIndex];
            const totalValue = firstValue + secondValue;

            if (totalValue === target) {
                return [firstIndex, secondIndex];
            }
        }
    }
}
