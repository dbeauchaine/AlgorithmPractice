export function rotateImage(matrix: number[][]): void {
    let lastIndex = matrix.length - 1;

    let currentRow = 0;
    let currentColumn = 0;
    let temp = matrix[0][0];
  
    do {
        let nextRow = lastIndex - currentColumn;
        let nextColumn = currentRow;

        if (nextRow === 0 && nextColumn === 0) {
            matrix[currentRow][currentColumn] = temp;
        } else {
            matrix[currentRow][currentColumn] = matrix[nextRow][nextColumn];
        }

        currentRow = nextRow;
        currentColumn = nextColumn;
        console.log(matrix);
    } while (!(currentRow === 0 && currentColumn === 0))


    console.log(matrix);

}
