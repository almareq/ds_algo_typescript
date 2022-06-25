import {sort} from "../../src/exercises/insertionSort";

describe('test insertion sort', () => {
    it('should return the same array if it is already ordered', () => {
        const numbers = [1, 1, 2, 3]
        const result = sort(numbers)
        expect(result).toEqual(numbers)
    })

    it('should return an ordered array', () => {
        const numbers = [51, 12, 2, 3]
        const result = sort(numbers)
        expect(numbers).toEqual([51, 12, 2, 3])
        expect(result).toEqual([2, 3, 12, 51])
    })
})