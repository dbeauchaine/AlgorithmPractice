import { verifyArray } from "../TestHelpers/verifyArray";

export function intersectionOfTwoArraysII(firstArray: number[], secondArray: number[]): number[] {
    const firstMap: Map<number, number> = countInstancesOfValue(firstArray);
    const secondMap: Map<number, number> = countInstancesOfValue(secondArray);
    const intersection: number[] = [];

    for (const [key, firstValue] of firstMap) {
        const secondValue = secondMap.get(key);

        if (secondValue) {
            if (firstValue <= secondValue) {
                for (let i = 0; i < firstValue; i++) {
                    intersection.push(key);
                }
            } else {
                for (let i = 0; i < secondValue; i++) {
                    intersection.push(key);
                }
            }
        }
    }

    return intersection;
}

function countInstancesOfValue(inputArray: number[]): Map<number, number> {
    const numberMap: Map<number, number> = new Map();

    for (const value of inputArray) {
        const instancesOfValue = numberMap.get(value);

        if (instancesOfValue) {
            numberMap.set(value, instancesOfValue + 1);
        } else {
            numberMap.set(value, 1);
        }
    }

    return numberMap;
}
