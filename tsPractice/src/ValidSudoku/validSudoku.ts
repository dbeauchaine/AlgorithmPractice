import { isThrowStatement } from "@babel/types";

export function validSudoku(inputArray: string[][]): boolean {
    return rowsAreValid(inputArray)
        && columnsAreValid(inputArray)
        && subBoxesAreValid(inputArray);
}

function rowsAreValid(inputArray: string[][]): boolean {
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

function columnsAreValid(inputArray: string[][]): boolean {
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

function subBoxesAreValid(inputArray: string[][]): boolean {
    const subBoxSet: Set<string> = new Set();

    for (let row = 0; row < 3; row++) {
        for (let column = 0; column < 3; column++) {
            const value = inputArray[row][column];
            if (value !== ".") {
                if (subBoxSet.has(value)) {
                    return false;
                } else {
                    subBoxSet.add(value);
                }
            }
        }
    }

    return true;
}
