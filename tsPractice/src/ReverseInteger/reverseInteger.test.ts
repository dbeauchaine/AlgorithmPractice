import { reverseInteger } from "./reverseInteger";

describe("reverseIntegerTests", () => {
    const testCases: TestCase[] = [
        { inputNumber: 1, expecteOutputNumber: 1, description: "Empty String, do nothing." },
        { inputNumber: 21, expecteOutputNumber: 12, description: "Reverse 2 numbers." },
        { inputNumber: 342, expecteOutputNumber: 243, description: "Reverse 3 numbers." },
        { inputNumber: 4212, expecteOutputNumber: 2124, description: "Reverse 4 numbers, one duplicate." },
        { inputNumber: -241, expecteOutputNumber: -142, description: "Reverse 3 numbers with a negative." },
        { inputNumber: 230, expecteOutputNumber: 32, description: "Reverse 2 with leading zero." }
    ];

    testCases.forEach((testCase: TestCase) => {
        it(`Reverses the order of the characters in a number, maintaining negative. ${testCase.description}`, () => {
            expect(reverseInteger(testCase.inputNumber)).toEqual(testCase.expecteOutputNumber);
        });

    });
    interface TestCase {
        inputNumber: number;
        expecteOutputNumber: number;
        description: string;
    }
});
