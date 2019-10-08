export function moveZeroes(inputArray: number[]): number[] {
    let length = inputArray.length;
    for (let i = 0; i < length; i++) {
        if (inputArray[i] === 0) {
            inputArray.splice(i, 1);
            inputArray.push(0);
            length--;
            i--;
        }
    }

    return inputArray;
}
