export function twoSum(numbers: number[], target: number): [number, number] {

    if (numbers.length < 2) {
        throw new Error('the array must contain at least 2 numbers')
    }

    const previousIndexes = new Map<number, number>()

    for (let i = 0; i < numbers.length; i++) {

        if (numbers[i] >= target) {
            continue
        }

        const targetMinusCurrentElementIndex = previousIndexes.get(target - numbers[i])
        if (targetMinusCurrentElementIndex !== undefined) {
            return [targetMinusCurrentElementIndex, i]
        }
        previousIndexes.set(numbers[i], i)
    }

    throw new Error(`target ${target} wast not found as a sum of any 2 elements of the input ${numbers}`)
}
