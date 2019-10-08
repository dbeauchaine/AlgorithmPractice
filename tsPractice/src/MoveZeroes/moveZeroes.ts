export function moveZeroes(inputArray: number[]): number[] {
    let lastUncheckedElement = inputArray.length;
    for (let lastCheckedElement = 0; lastCheckedElement < lastUncheckedElement; lastCheckedElement++) {
        if (inputArray[lastCheckedElement] === 0) {
            inputArray.splice(lastCheckedElement, 1);
            inputArray.push(0);
            lastUncheckedElement--;
            lastCheckedElement--;
        }
    }

    return inputArray;
}
