export function verifyArray(modifiedArray: number[], expectedArray: number[]) {
    let areEqual = true;

    for (let i = 0; i < expectedArray.length; i++) {
        if (expectedArray[i] !== modifiedArray[i]) {
            areEqual = false;
        }
    }

    return areEqual;
}
