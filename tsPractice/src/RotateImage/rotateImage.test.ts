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
        },
        {
            inputArray: [
                [1, 2, 3, 4],
                [5, 6, 7, 8],
                [9, 10, 11, 12],
                [13, 14, 15, 16]
            ],
            modifiedArray: [
                [13, 9, 5, 1],
                [14, 10, 6, 2],
                [15, 11, 7, 3],
                [16, 12, 8, 4]
            ],
            description: "9 element rotation. 3x3"
        },
        {
            inputArray: [
                [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
                [11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
                [21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
                [31, 32, 33, 34, 35, 36, 37, 38, 39, 40],
                [41, 42, 43, 44, 45, 46, 47, 48, 49, 50],
                [51, 52, 53, 54, 55, 56, 57, 58, 59, 60],
                [61, 62, 63, 64, 65, 66, 67, 68, 69, 70],
                [71, 72, 73, 74, 75, 76, 77, 78, 79, 80],
                [81, 82, 83, 84, 85, 86, 87, 88, 89, 90],
                [91, 92, 93, 94, 95, 96, 97, 98, 99, 100]
            ],
            modifiedArray: [
                [91, 81, 71, 61, 51, 41, 31, 21, 11, 1],
                [92, 82, 72, 62, 52, 42, 32, 22, 12, 2],
                [93, 83, 73, 63, 53, 43, 33, 23, 13, 3],
                [94, 84, 74, 64, 54, 44, 34, 24, 14, 4],
                [95, 85, 75, 65, 55, 45, 35, 25, 15, 5],
                [96, 86, 76, 66, 56, 46, 36, 26, 16, 6],
                [97, 87, 77, 67, 57, 47, 37, 27, 17, 7],
                [98, 88, 78, 68, 58, 48, 38, 28, 18, 8],
                [99, 89, 79, 69, 59, 49, 39, 29, 19, 9],
                [100, 90, 80, 70, 60, 50, 40, 30, 20, 10]
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
