import { twoSum } from "./twoSum";

describe("twoSumTests", () => {

    const testCases: TestCase[] = [
        { inputArray: [0, 1], target: 1, expectedOutput: [0, 1], description: "Only one possible solution." },
        { inputArray: [0, 1, 2], target: 1, expectedOutput: [0, 1], description: "Solution: first two indexes." },
        { inputArray: [0, 1, 2], target: 3, expectedOutput: [1, 2], description: "Soluntion: final two indexes." },
        { inputArray: [2, 9, 4], target: 6, expectedOutput: [0, 2], description: "Solution: first and final indexes." },
        { inputArray: [3, 2, 3], target: 6, expectedOutput: [0, 2], description: "Solution: 2 seperate instances of the same number." },
        { inputArray: [3, 2, 4], target: 6, expectedOutput: [1, 2], description: "Solution: doesn't use the first index twice." }
    ];

    testCases.forEach((testCase: TestCase) => {
        it(`Takes an array of numbers and a target number. Finds the combination of integers from the array that add to the target number. ${testCase.description}`, () => {
            expect(twoSum(testCase.inputArray, testCase.target)).toEqual(testCase.expectedOutput);
        });
    });

    interface TestCase {
        inputArray: number[];
        expectedOutput: number[];
        target: number;
        description: string;
    }
});
