import {containsDuplicate, containsDuplicateSorting} from "../../src/exercises/containsDuplicate";

describe('test contains duplicate', () => {
    it('should return true for an array with repeated number', () => {
        const numbers = [1, 1, 2, 3]
        const result = containsDuplicate(numbers)
        const resultUsingSorting = containsDuplicateSorting(numbers)
        expect(result).toBe(true)
        expect(resultUsingSorting).toBe(true)
    })

    it('should return false for an array without repeated number', () => {
        const numbers = [1, 12, 2, 3]
        const result = containsDuplicate(numbers)
        const resultUsingSorting = containsDuplicateSorting(numbers)
        expect(result).toBe(false)
        expect(resultUsingSorting).toBe(false)
    })

    it('should return false for an array with just 1 number', () => {
        const numbers = [2]
        const result = containsDuplicate(numbers)
        const resultUsingSorting = containsDuplicateSorting(numbers)
        expect(result).toBe(false)
        expect(resultUsingSorting).toBe(false)
    })
})

