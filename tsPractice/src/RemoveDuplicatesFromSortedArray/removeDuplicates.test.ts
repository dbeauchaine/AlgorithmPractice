import { removeDuplicates } from "./removeDuplicates";

describe("removeDuplicatesTests", () => {
    const testCases: TestCase[] = [
        { expectedLength: 0, inputArray: [], description: "Empty Array" },
        { expectedLength: 1, inputArray: [1], description: "Array length 1" },
        { expectedLength: 3, inputArray: [1, 4, 8], description: "Array length 3" },
        { expectedLength: 2, inputArray: [1, 1, 2], description: "Array length 3, 1 duplicate" },
        { expectedLength: 3, inputArray: [1, 1, 2, 2, 3], description: "Array length 5, 2 duplicates" },
        { expectedLength: 1, inputArray: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], description: "Array length 10, all duplicates" }
    ];
    testCases.forEach((testCase: TestCase) => {
        it(`Returns length of array after duplicates have been removed: ${testCase.description}`, () => {
            const arrayLength = removeDuplicates(testCase.inputArray);

            expect(arrayLength).toEqual(testCase.expectedLength);
        });

    });
    interface TestCase {
        expectedLength: number;
        inputArray: number[];
        description: string;
    }
});
