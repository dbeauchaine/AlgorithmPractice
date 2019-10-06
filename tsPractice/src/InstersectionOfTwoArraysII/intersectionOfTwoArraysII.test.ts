import { verifyArray } from "../TestHelpers/verifyArray";
import { intersectionOfTwoArraysII } from "./intersectionOfTwoArraysII";

describe("intersectionOfTwoArraysII", () => {
    const testCases: TestCase[] = [
        { firstArray: [1], secondArray: [0], expectedOutput: [], description: "No intersection. Returns empty array." },
        { firstArray: [1], secondArray: [1], expectedOutput: [1], description: "Identical argument arrays." },
        { firstArray: [1, 2], secondArray: [1], expectedOutput: [1], description: "One element intersection." },
        { firstArray: [1], secondArray: [1, 2], expectedOutput: [1], description: "One element intersection, reversed input order." },
        { firstArray: [1, 2], secondArray: [1, 2], expectedOutput: [1, 2], description: "2 element intersection." },
        { firstArray: [3, 1], secondArray: [1, 3], expectedOutput: [1, 3], description: "2 element intersection. Out of order." },
        { firstArray: [1, 3, 5], secondArray: [5, 2, 1], expectedOutput: [1, 5], description: "2 element intersection. Out of order, arrays each containing a unique value." },
        { firstArray: [1, 1, 3, 5], secondArray: [3, 5, 1, 1], expectedOutput: [1, 1, 3, 5], description: "4 element intersection. Duplicate intersections." }
    ];
    testCases.forEach((testCase: TestCase) => {
        it(`Returns an array which represents the intersection of two arrays. ${testCase.description}`, () => {
            const outputArray = intersectionOfTwoArraysII(testCase.firstArray, testCase.secondArray);
            expect(outputArray).toIncludeSameMembers(testCase.expectedOutput);
        });
    });
});

interface TestCase {
    firstArray: number[];
    secondArray: number[];
    expectedOutput: number[];
    description: string;
}
