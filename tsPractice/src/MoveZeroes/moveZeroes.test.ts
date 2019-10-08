import { moveZeroes } from "./moveZeroes";

describe("moveZeroesTests", () => {
    const testCases: TestCase[] = [
        { inputArray: [], expectedOutput: [], description: "Array length zero, no zeroes." },
        { inputArray: [0], expectedOutput: [0], description: "Array length one with one zero." },
        { inputArray: [1, 0], expectedOutput: [1, 0], description: "Array length 2 with one zero. No change required." },
        { inputArray: [0, 1], expectedOutput: [1, 0], description: "Array length 2, one zero." },
        { inputArray: [0, 0, 1], expectedOutput: [1, 0, 0], description: "Array length 3, 2 zeroes." }
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
