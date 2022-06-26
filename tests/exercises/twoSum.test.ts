import {twoSum} from "../../src/exercises/twoSum";

describe('test two sum', () => {
    it('should return the indices for non adjacent numbers', () => {
        const target = 35
        const numbers = [20, 7, 41, 15, 1]
        const indices = twoSum(numbers, target)
        expect(indices).toEqual([0, 3])
    });

    it('should return the indices for adjacent numbers', () => {
        const target = 6
        const numbers = [3, 2, 4]
        const indices = twoSum(numbers, target)
        expect(indices).toEqual([1, 2])
    });

    it('should return the indices for an array of just 2 numbers', () => {
        const target = 6
        const numbers = [3, 3]
        const indices = twoSum(numbers, target)
        expect(indices).toEqual([0, 1])
    });

    it('should return an error for an array with less than 2 numbers', () => {
        const target = 6
        const numbers = [3]
        expect(() => {
            twoSum(numbers, target)
        }).toThrowError('the array must contain at least 2 numbers')
    });

    it('should return an error for a target with no matching array 2 elements sum', () => {
        const target = 7
        const numbers = [3, 41, 7]
        expect(() => {
            twoSum(numbers, target)
        }).toThrowError('target 7 wast not found as a sum of any 2 elements of the input 3,41,7')
    });
})