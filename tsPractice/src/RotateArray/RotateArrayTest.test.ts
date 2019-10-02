import { verifyArray } from "../TestHelpers/verifyArray";
import { rotateArray } from "./RotateArray";

describe("rotateArrayTests", () => {
    const testCases: TestCase[] = [
        { arrayToRotate: [1], arraySolution: [1], steps: 0, description: "No rotation." },
        { arrayToRotate: [1, 2], arraySolution: [2, 1], steps: 1, description: "rotate 1 with 2 elements, essentially a swap." },
        { arrayToRotate: [1, 2, 3], arraySolution: [3, 1, 2], steps: 1, description: "rotate 1 with 3 elements." },
        { arrayToRotate: [1, 2, 3], arraySolution: [2, 3, 1], steps: 2, description: "rotate 2 with 3 elements." },
        { arrayToRotate: [3, 2, 5, 6, 7], arraySolution: [5, 6, 7, 3, 2], steps: 3, description: "rotate 3 with 5 elements." },
        { arrayToRotate: [1, 2, 3, 4, 5, 6, 7], arraySolution: [5, 6, 7, 1, 2, 3, 4], steps: 3, description: "rotate 3 with 7 elements. (From Exercise)" },
        { arrayToRotate: [-1, -100, 3, 99], arraySolution: [3, 99, -1, -100], steps: 2, description: "rotate 2 with 4 elements, including negatives. (from Exercise)"},
    ];

    testCases.forEach((testCase: TestCase) => {
        it(`Returns void, rotates the passed array. ${testCase.description}`, () => {
            rotateArray(testCase.arrayToRotate, testCase.steps);
            expect(verifyArray(testCase.arrayToRotate, testCase.arraySolution)).toBeTruthy();
        });

    });

    interface TestCase {
        arrayToRotate: number[];
        arraySolution: number[];
        steps: number;
        description: string;
    }

});
