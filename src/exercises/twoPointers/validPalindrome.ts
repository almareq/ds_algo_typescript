export const validPalindrome = (textToCheck: string): boolean => {

    if (textToCheck.length === 0) {
        return false
    }

    if (textToCheck.length === 1) {
        return true
    }

    const middle = Math.floor(textToCheck.length / 2) - 1

    for (let forward = 0, backward = textToCheck.length - 1; forward <= middle; forward++, backward--) {
        if (textToCheck[forward] !== textToCheck[backward]) {
            return false
        }
    }

    return true
}
