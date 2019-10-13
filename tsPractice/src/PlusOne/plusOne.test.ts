import { plusOne } from "./plusOne";

describe("plusOneTests", () => {
    const testCases: TestCase[] = [
        { inputArray: [0], expectedOutput: [1], description: "Add one to zero." },
        { inputArray: [1, 0], expectedOutput: [1, 1], description: "Add one to 10." },
        { inputArray: [1, 3, 4], expectedOutput: [1, 3, 5], description: "Add one to 134." },
        { inputArray: [1, 9], expectedOutput: [2, 0], description: "Add one to 19. Carry-over digit." },
        { inputArray: [1, 9, 9], expectedOutput: [2, 0, 0], description: "Add one to 199. Carry-over two digits." },
        { inputArray: [9], expectedOutput: [1, 0], description: "Add one to 9, expands array." },
        { inputArray: [9, 9, 9], expectedOutput: [1, 0, 0, 0], description: "Add one to 999, expands array and 3 carry-overs." }
    ];

    testCases.forEach((testCase: TestCase) => {
        it(`Takes an array of numbers representing an integer. Adds one and returns the new value as an array of numbers. ${testCase.description}`, () => {
            const returnArray: number[] = plusOne(testCase.inputArray);
            expect(returnArray).toEqual(testCase.expectedOutput);
        });
    });
});

interface TestCase {
    inputArray: number[];
    expectedOutput: number[];
    description: string;
}
