export function rotateImage(matrix: number[][]): void {
    let lastIndex = calculateLastIndex(matrix);

    for (let row = 0; row < lastIndex; row++) {
        for (let column = row; column < lastIndex; column++) {
            rotateFourElements(matrix, row, column);
        }

        lastIndex--;
    }
}

function rotateFourElements(matrix: number[][], row: number, column: number): void {
    const lastIndex = calculateLastIndex(matrix);
    let currentRow = row;
    let currentColumn = column;
    const temp = matrix[row][column];

    do {
        const nextRow = lastIndex - currentColumn;
        const nextColumn = currentRow;

        if (nextRow === row && nextColumn === column) {
            matrix[currentRow][currentColumn] = temp;
        } else {
            matrix[currentRow][currentColumn] = matrix[nextRow][nextColumn];
        }

        currentRow = nextRow;
        currentColumn = nextColumn;
    } while (!(currentRow === row && currentColumn === column));
}

function calculateLastIndex(matrix: number[][]): number {
    return matrix.length - 1;
}
