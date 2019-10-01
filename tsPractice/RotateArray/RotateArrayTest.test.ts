import { rotateArray } from "./RotateArray";

describe('rotateArrayTests', () => {
    let testCases: TestCase[] = [
        { arrayToRotate: [1], arraySolution: [1], steps: 0, description: "No rotation." },
        { arrayToRotate: [1, 2], arraySolution: [2, 1], steps: 1, description: "rotate 1 with 2 elements, essentially a swap." },
        { arrayToRotate: [1, 2, 3], arraySolution: [3, 1, 2], steps: 1, description: "rotate 1 with 3 elements." },
        { arrayToRotate: [1, 2, 3], arraySolution: [2, 3, 1], steps: 2, description: "rotate 2 with 3 elements." },
        { arrayToRotate: [3, 2, 5, 6, 7], arraySolution: [5, 6, 7, 3, 2], steps: 3, description: "rotate 3 with 5 elements." },
        { arrayToRotate: [1, 2, 3, 4, 5, 6, 7], arraySolution: [5, 6, 7, 1, 2, 3, 4], steps: 3, description: "rotate 3 with 7 elements. (From Exercise)" },
        { arrayToRotate: [-1, -100, 3, 99], arraySolution: [3, 99, -1, -100], steps: 2, description: "rotate 2 with 4 elements, including negatives. (from Exercise)"}
    ];

    it('Test of verifyArray, returns true when two arrays contain the same elements.', () => {
        expect(verifyArray([1, 2, 3], [1, 2, 3])).toBeTruthy();
    })

    it('Test of verifyArray, returns false when two arrays do not contain the same elements.', () => {
        expect(verifyArray([1, 2, 3], [2, 1, 3])).toBeFalsy();
    })

    testCases.forEach((testCases: TestCase) => {
        it(`Returns void, rotates the passed array. ${testCases.description}`, () => {
            rotateArray(testCases.arrayToRotate, testCases.steps);
            expect(verifyArray(testCases.arrayToRotate, testCases.arraySolution)).toBeTruthy();
        });

    })

    interface TestCase {
        arrayToRotate: number[];
        arraySolution: number[];
        steps: number;
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

