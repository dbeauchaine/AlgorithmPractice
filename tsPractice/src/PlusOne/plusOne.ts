export function plusOne(inputArray: number[]): number[] {
    const modifiedArray: number[] = inputArray;
    const lastIndex: number = modifiedArray.length - 1;
    const lastValue: number = modifiedArray[lastIndex];

    modifiedArray[lastIndex] = lastValue + 1;

    for (let index = modifiedArray.length; index > 0; index--) {
        if (modifiedArray[index] === 10) {
            modifiedArray[index] = 0;
            modifiedArray[index - 1] = modifiedArray[index - 1] + 1;
        }
    }

    if (modifiedArray[0] === 10) {
        modifiedArray[0] = 0;
        modifiedArray.splice(0, 0, 1);
    }

    return modifiedArray;
}
