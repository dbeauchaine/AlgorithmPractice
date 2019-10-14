export function rotateImage(matrix: number[][]): void {
    const lastIndex = matrix.length - 1;
    let index = lastIndex;

    for (let row = 0; row < lastIndex; row++) {
        for (let column = row; column < index; column++) {
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
        index--;
    }
}
