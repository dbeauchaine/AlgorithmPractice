export function singleNumber(inputArray: number[]) {
    const numberMap = countInstancesOfValue(inputArray);

    return valueOfSingleInstance(numberMap);
}

function countInstancesOfValue(inputArray: number[]): Map<number, number> {
    const numberMap: Map<number, number> = new Map();

    for (const value of inputArray) {
        const instancesOfValue = numberMap.get(value);

        if (instancesOfValue) {
            numberMap.set(value, instancesOfValue + 1);
        } else {
            numberMap.set(value, 1);
        }
    }

    return numberMap;
}

function valueOfSingleInstance(numberMap: Map<number, number>): number {
    for (const [key, count] of numberMap.entries()) {
        if (count === 1) {
            return key;
        }
    }

    return null;
}
