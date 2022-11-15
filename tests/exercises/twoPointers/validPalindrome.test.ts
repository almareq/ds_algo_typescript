import {validPalindrome} from "../../../src/exercises/twoPointers/validPalindrome";

describe('test valid palindrome', () => {

    it('invalidates an empty phrase', () => {
        expect(validPalindrome('')).toBe(false)
    })

    it('validates a single character', () => {
        expect(validPalindrome('a')).toBe(true)
    })

    it('detects a valid palindrome', () => {
        expect(validPalindrome('aa')).toBe(true)
        expect(validPalindrome('aca')).toBe(true)
        expect(validPalindrome('alla')).toBe(true)
    })

    it('detects an invalid palindrome', () => {
        expect(validPalindrome('so')).toBe(false)
        expect(validPalindrome('ring')).toBe(false)
        expect(validPalindrome('flame')).toBe(false)
    })
})
