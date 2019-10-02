import { containsDuplicate } from "./containsDuplicates";

describe('containsDuplicates', () => {
    const testCases: TestCase[] = [
        { inputArray: [1], expectedValue: false, description: "Array length 1, contains no duplicates." },
        { inputArray: [1, 1], expectedValue: true, description: "Array length 2, contains duplicates." },
        { inputArray: [1, 2], expectedValue: false, description: "Array length 2, contains no duplicates." },
        { inputArray: [1, 2, 1, 3], expectedValue: true, description: "Array length 4, contains duplicates. Not on first and last elements." },
        { inputArray: [1, 2, 5, 0], expectedValue: false, description: "Array length 4, contains no duplicates. Zero as an element." },
        { inputArray: [1, 1, 2, 4, 5], expectedValue: true, description: "Array length 5, contains duplicates. First two elements are duplicate." },
        { inputArray: [1, 5, 3, 2, 2], expectedValue: true, description: "Array length 5, contains duplicates. Last two elements are duplicate." },
        { inputArray: [1, 1, 2, 2, 3, 3], expectedValue: true, description: "Array length 6, contains 3 different duplicates." }

    ];

    testCases.forEach((testCase: TestCase) => {
        it(`Returns false if array contains no duplicates, returns true if array contains duplicates. ${testCase.description}`, () => {
            expect(containsDuplicate(testCase.inputArray)).toEqual(testCase.expectedValue);
        });
    });
});

interface TestCase {
    inputArray: number[];
    expectedValue: boolean;
    description: string;
}
