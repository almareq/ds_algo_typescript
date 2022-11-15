import {twoSumInputSorted} from "../../../src/exercises/twoPointers/twoSumInputSorted";

describe('test two sum', () => {
    it('should return the indices for non adjacent numbers', () => {
        const target = 22
        const numbers = [2, 7, 11, 15, 21]
        const indices = twoSumInputSorted(numbers, target)
        expect(indices).toEqual([1, 3])
    });

    it('should return the indices for adjacent numbers', () => {
        const target = 44
        const numbers = [2, 3, 41]
        const indices = twoSumInputSorted(numbers, target)
        expect(indices).toEqual([1, 2])
    });

    it('should return the indices for an array of just 2 numbers', () => {
        const target = 6
        const numbers = [3, 3]
        const indices = twoSumInputSorted(numbers, target)
        expect(indices).toEqual([0, 1])
    });

    it('should return an error for an array with less than 2 numbers', () => {
        const target = 6
        const numbers = [3]
        expect(() => {
            twoSumInputSorted(numbers, target)
        }).toThrowError('the array must contain at least 2 numbers')
    });

    it('should return an error for a target with no matching sum', () => {
        const target = 872
        const numbers = [3, 4, 13, 75]
        expect(() => {
            twoSumInputSorted(numbers, target)
        }).toThrowError('no possible sum between numbers 3,4,13,75 for target 872')
    });
})