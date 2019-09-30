import { rotateArray } from "./RotateArray";

describe('rotateArrayTests', ()=> {
    let testCases: TestCase[] = [
        { arrayToRotate: [1], arraySolution: [1], k: 0, description: "No rotation." },
        { arrayToRotate: [1, 2], arraySolution: [2, 1], k: 1, description: "rotate 1 with 2 elements, essentially a swap."}
        ];
    testCases.forEach((testCases: TestCase) => {
        it(`Returns void, rotates the passed array. ${testCases.description}`, function () {
            rotateArray(testCases.arrayToRotate, testCases.k);
            expect(verifyArray(testCases.arraySolution, testCases.arrayToRotate)).toBeTruthy();
        });

    })

    interface TestCase {
        arrayToRotate: number[];
        arraySolution: number[];
        k: number;
        description: string;
    }

    function verifyArray(modifiedArray: number[], expectedArray: number[]) {
        let areEqual = true;

        for (let i = 0; i < expectedArray.length; i++) {
            if (expectedArray[i] !== modifiedArray[i]) {
                areEqual = false;
            }
        }

        return areEqual;
    }
});
