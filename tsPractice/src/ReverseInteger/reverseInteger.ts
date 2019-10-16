export function reverseInteger(inputNumber: number): number {
    const numberAsString: string = inputNumber.toString();
    const modifiedString = [];

    for (let i = numberAsString.length; i >= 0; i--) {
        modifiedString.push(numberAsString[i]);
    }

    const lastIndex = modifiedString.length - 1;

    if (modifiedString[lastIndex] === "-")  {
        modifiedString.pop();
        modifiedString.unshift("-");
    }

    return Number(modifiedString.join(""));
}
