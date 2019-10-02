import { verifyArray } from "./verifyArray";

describe("verifyArrayTests", () => {
    it("Test of verifyArray, returns true when two arrays contain the same elements.", () => {
        expect(verifyArray([1, 2, 3], [1, 2, 3])).toEqual(true);
    });

    it("Test of verifyArray, returns false when two arrays do not contain the same elements.", () => {
        expect(verifyArray([1, 2, 3], [2, 1, 3])).toEqual(false);
    });

});
