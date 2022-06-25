export function sort<T extends number | string>(input: T[]): T[] {

    input = [...input]

    for (let i = 1; i < input.length; i++) {

        const current = input[i]
        let j = i
        for (; j > 0 && input[j - 1] > current; j--) {
            input[j] = input[j - 1]
        }
        input[j] = current
    }

    return input
}
