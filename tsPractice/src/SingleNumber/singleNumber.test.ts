import { singleNumber } from "./singleNumber";

describe("singleNumberTests", () => {

    const testCases: TestCase[] = [
        {inputArray: [1], expectedOutput: 1, description: "Array length 1, No duplicates, only one single number"}
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
