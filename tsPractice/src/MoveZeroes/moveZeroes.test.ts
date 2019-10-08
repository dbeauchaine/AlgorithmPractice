import { moveZeroes } from "./moveZeroes";

describe("moveZeroesTests", () => {
    const testCases: TestCase[] = [
        { inputArray: [], expectedOutput: [], description: "Array length zero, no zeroes." },
        { inputArray: [0], expectedOutput: [0], description: "Array length one with one zero. Array with only Zeroes." },
        { inputArray: [1, 0], expectedOutput: [1, 0], description: "Array length 2 with one zero. No change required." },
        { inputArray: [0, 1], expectedOutput: [1, 0], description: "Array length 2, one zero." },
        { inputArray: [0, 0, 1], expectedOutput: [1, 0, 0], description: "Array length 3, 2 zeroes." },
        { inputArray: [1, 0, 0, 2, 0], expectedOutput: [1, 2, 0, 0, 0], description: "array length 5, 3 zeroes." },
        { inputArray: [1, 1, 2, 3], expectedOutput: [1, 1, 2, 3], description: "Array length 4. No zeroes." }
    ];

    testCases.forEach((testCase: TestCase) => {
        it(`Takes an array of numbers and moves all zeroes to the end of the array. ${testCase.description}`, () => {
            const returnArray: number[] = moveZeroes(testCase.inputArray);
            expect(returnArray).toEqual(testCase.expectedOutput);
        });
    });
});

interface TestCase {
    inputArray: number[];
    expectedOutput: number[];
    description: string;
}
