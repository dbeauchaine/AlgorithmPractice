export function plusOne(inputArray: number[]): number[] {
    let modifiedArray: number[] = inputArray.slice();
    const lastIndex: number = modifiedArray.length - 1;
    const lastValue: number = modifiedArray[lastIndex];

    modifiedArray[lastIndex] = lastValue + 1;

    modifiedArray = carryOverDigits(modifiedArray);

    return modifiedArray;
}

function carryOverDigits(array: number[]): number[] {
    for (let index = array.length; index > 0; index--) {
        if (array[index] === 10) {
            array[index] = 0;
            array[index - 1] = array[index - 1] + 1;
        }
    }

    if (array[0] === 10) {
        carryOverAndExpand(array);
    }

    return array;
}

function carryOverAndExpand(array: number[]): number[] {
    array[0] = 0;
    array.splice(0, 0, 1);

    return array;
}
