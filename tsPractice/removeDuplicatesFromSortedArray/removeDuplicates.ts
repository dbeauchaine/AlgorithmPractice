export function removeDuplicates(array: number[]) {

    let temp = array[0];
    let i = 1;

    while (i < array.length) {
        if (array[i] === temp) {
            array.splice(i, 1);
        } else {
            temp = array[i];
            i++;
        }
    };

    return array.length;
}