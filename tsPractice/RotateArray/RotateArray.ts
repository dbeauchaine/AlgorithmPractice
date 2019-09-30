export function rotateArray(arrayToRotate: number[], k:number) {
    if (k > 0) {
        let temp = arrayToRotate[0];
        arrayToRotate[0] = arrayToRotate[1];
        arrayToRotate[1] = temp;
    }
}