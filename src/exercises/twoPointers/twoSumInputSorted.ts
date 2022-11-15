/**
 * igual que twoSum pero en vez de usar un hashmap se usan dos punteros
 * time complexity sigue siendo O(n) pero la complejidad espacial (space complexity) permanece constante
 */
export const twoSumInputSorted = (numbers: number[], target: number): [number, number] => {
    if (numbers.length < 2) {
        throw new Error('the array must contain at least 2 numbers')
    }

    let i = 0
    let j = numbers.length - 1

    while (i !== j) {

        const sum = numbers[i] + numbers[j]

        if (sum === target) {
            return [i, j]
        }

        sum > target ? j-- : i++
    }

    throw new Error(`no possible sum between numbers ${numbers} for target ${target}`)
}
