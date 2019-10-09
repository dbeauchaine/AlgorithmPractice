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

function subBoxIsValid(inputArray: string[][], rowStart: number, columnStart: number): boolean {
    const subBoxSet: Set<string> = new Set();
    const rowEnd = rowStart + 3;
    const columnEnd = columnStart + 3;

    for (let row = rowStart; row < rowEnd; row++) {
        for (let column = columnStart; column < columnEnd; column++) {
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

function subBoxesAreValid(inputArray: string[][]): boolean {
    for (let row = 0; row < 9; row += 3) {
        for (let column = 0; column < 9; column += 3) {
            if (!subBoxIsValid(inputArray, row, column)) {
                return false;
            }
        }
    }

    return true;
}
