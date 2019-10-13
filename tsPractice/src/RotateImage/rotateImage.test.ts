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
        },
        {
            inputArray: [
                [1, 0],
                [0, 0]
            ],
            modifiedArray: [
                [0, 1],
                [0, 0]
            ],
            description: "One element rotation."
        },
        {
            inputArray: [
                [1, 2],
                [3, 4]
            ],
            modifiedArray: [
                [3, 1],
                [4, 2]
            ],
            description: "Four element rotation."
        },
        {
            inputArray: [
                [1, 0, 2],
                [0, 0, 0],
                [3, 0, 4]
            ],
            modifiedArray: [
                [3, 0, 1],
                [0, 0, 0],
                [4, 0, 2]
            ],
            description: "4 element rotation. 3x3"
        },
        {
            inputArray: [
                [1, 2, 3],
                [4, 5, 6],
                [7, 8, 9]
            ],
            modifiedArray: [
                [7, 4, 1],
                [8, 5, 2],
                [9, 6, 3]
            ],
            description: "9 element rotation. 3x3"
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
