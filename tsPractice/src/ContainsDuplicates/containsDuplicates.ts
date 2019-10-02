export function containsDuplicate(inputArray: number[]) {
    const numberSet = new Set();

    for (let i = 0; i < inputArray.length; i++) {
        if (numberSet.has(inputArray[i])) {
            return true;
        } else {
            numberSet.add(inputArray[i]);
        }
    }

    return false;
}