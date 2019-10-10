import { rotateImage } from "./rotateImage";

describe("rotateImageTests", () => {

    const testCases: TestCase[] = [
        {
            inputArray: [
                [0, 0],
                [0, 0]
            ],
            modifiedArray: [
                [0, 0],
                [0, 0]
            ],
            description: "No rotation required."
        }
    ];

    testCases.forEach((testCase: TestCase) => {
        it(`Rotates elements in a square 2 dimensional array 90 degrees.  ${testCase.description}`, () => {
            rotateImage(testCase.inputArray);
            expect(testCase.inputArray).toIncludeAllMembers(testCase.modifiedArray);
        });
    });

    interface TestCase {
        modifiedArray: number[][];
        description: string;
        inputArray: number[][];
    }
});
