import { isThrowStatement } from "@babel/types";

export function validSudoku(inputArray: string[][]): boolean {
    let isValid = validateRows(inputArray);
    if (!isValid) {
        return false;
    }

    isValid = validateColumns(inputArray);
    if (!isValid) {
        return false;
    }

    return isValid;
}

function validateRows(inputArray: string[][]): boolean {
    for (let row = 0; row < inputArray.length; row++) {
        const rowSet: Set<string> = new Set();

        for (let column = 0; column < inputArray[row].length; column++) {
            const value = inputArray[row][column];
            if (value !== ".") {
                if (rowSet.has(value)) {
                    return false;
                } else {
                    rowSet.add(value);
                }
            }
        }
    }

    return true;
}

function validateColumns(inputArray: string[][]): boolean {
    for (let column = 0; column < inputArray[0].length; column++) {
        const columnSet: Set<string> = new Set();

        for (let row = 0; row < inputArray.length; row++) {
            const value = inputArray[row][column];
            if (value !== ".") {
                if (columnSet.has(value)) {
                    return false;
                } else {
                    columnSet.add(value);
                }
            }
        }
    }

    return true;
}
