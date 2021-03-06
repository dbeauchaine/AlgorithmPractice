import { singleNumber } from "./singleNumber";

describe("singleNumberTests", () => {

    const testCases: TestCase[] = [
        { inputArray: [1], expectedOutput: 1, description: "Array length 1, No duplicates, only one single number" },
        { inputArray: [1, 1], expectedOutput: null, description: "Array length 2, one duplicate pair. No single number." },
        { inputArray: [1, 1, 2], expectedOutput: 2, description: "Array length 3, one duplicate pair. One single number." },
        { inputArray: [1, 1, 2, 2, 3], expectedOutput: 3, description: "Array length 5, two duplicate pairs. One single number in final index." },
        { inputArray: [1, 2, 2, 3, 3], expectedOutput: 1, description: "Array length 5, two duplicate pairs. One single number in first index. " },
        { inputArray: [0, -1, -1, 1, 1], expectedOutput: 0, description: "Array length 5, two duplicate pairs. One single number, return is 0." },
        { inputArray: [1, 3, 2, 1, 2], expectedOutput: 3, description: "Array length 5, two duplicate pairs, unsorted. One single number." },
        { inputArray: [], expectedOutput: null, description: "Empty array."}
    ];

    testCases.forEach((testCase: TestCase) => {
        it(`Returns the value of the single number in an array of duplicate numbers. ${testCase.description}`, () => {
            expect(singleNumber(testCase.inputArray)).toEqual(testCase.expectedOutput);
        });
    });

    interface TestCase {
        inputArray: number[];
        expectedOutput: number;
        description: string;
    }
});
