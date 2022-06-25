import {sort} from "../algorithms/insertionSort";

export function containsDuplicate(numbers: number[]): boolean {

    const repeatedNumbers = new Set()

    for (const number of numbers) {
        if (repeatedNumbers.has(number)) {
            return true
        }
        repeatedNumbers.add(number)
    }
    return false
}

export function containsDuplicateSorting(numbers: number[]): boolean {

    const orderedNumbers = sort(numbers)

    for (let i = 0, j = 1; j < orderedNumbers.length; i++, j++) {
        if (orderedNumbers[i] === orderedNumbers[j]) {
            return true
        }
    }
    return false
}
