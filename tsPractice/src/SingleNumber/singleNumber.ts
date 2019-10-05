export function singleNumber(inputArray: number[]) {
    const numberMap: Map<number, number> = new Map();

    for (let i = 0; i < inputArray.length; i++) {

        let count = numberMap.get(inputArray[i]);
        if (count) {
            count++;
            numberMap.set(inputArray[i], count);
        } else {
            numberMap.set(inputArray[i], 1);
        }
    }

    for (const [key, value] of numberMap.entries()) {
        if (value === 1) {
            return key;
        }
    }

    return null;
}
