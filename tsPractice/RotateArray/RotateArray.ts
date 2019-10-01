export function rotateArray(arrayToRotate: number[], k: number) {
    if (k > 0) {
        for (let i = k; i > 0; i--) {
            rotate(arrayToRotate);
        }
    }
};

function rotate(arrayToRotate: number[]) {
    let lastIndex = arrayToRotate.length - 1;
    let lastElement = arrayToRotate[lastIndex];

    for (let currentIndex = lastIndex; currentIndex > 0; currentIndex--) {
        let previousIndex = currentIndex - 1;
        arrayToRotate[currentIndex] = arrayToRotate[previousIndex];
    }

    arrayToRotate[0] = lastElement;
};