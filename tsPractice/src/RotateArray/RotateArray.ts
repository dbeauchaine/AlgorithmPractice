export function rotateArray(arrayToRotate: number[], steps: number) {
    if (steps > 0) {
        for (let i = steps; i > 0; i--) {
            rotate(arrayToRotate);
        }
    }
}

function rotate(arrayToRotate: number[]) {
    const lastIndex = arrayToRotate.length - 1;
    const lastElement = arrayToRotate[lastIndex];

    for (let currentIndex = lastIndex; currentIndex > 0; currentIndex--) {
        const previousIndex = currentIndex - 1;
        arrayToRotate[currentIndex] = arrayToRotate[previousIndex];
    }

    arrayToRotate[0] = lastElement;
}
