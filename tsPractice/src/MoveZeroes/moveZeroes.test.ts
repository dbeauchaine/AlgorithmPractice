import { moveZeroes } from "./moveZeroes";

describe("Test Suite 1", () => {
    const testCases: TestCase[] = [
        { inputArray: [], expectedOutput: [], description: "Array length zero, no zeroes." },
        { inputArray: [0], expectedOutput: [0], description: "Array length one with one zero." }
    ];

    testCases.forEach((testCase: TestCase) => {
        it(`Takes an array of numbers and moves all zeroes to the end of the array. ${testCase.description}`, () => {
            const returnArray: number[] = moveZeroes(testCase.inputArray);
            expect(returnArray).toIncludeAllMembers(testCase.expectedOutput);
        });
    });
});

interface TestCase {
    inputArray: number[];
    expectedOutput: number[];
    description: string;
}
