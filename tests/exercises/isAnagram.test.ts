import {isAnagram} from "../../src/exercises/isAnagram";

describe('test is anagram', () => {
    it('should return true for an anagram', () => {
        const word = "a gentleman"
        const anagram = "elegant man"
        expect(isAnagram(word, anagram)).toBe(true)
    })

    it('should return false for a word not an anagram', () => {
        const word = "vice"
        const anagram = "vile"
        expect(isAnagram(word, anagram)).toBe(false)
    })

    it('should return false words with different length', () => {
        const word = "vices"
        const anagram = "vile"
        expect(isAnagram(word, anagram)).toBe(false)
    })
})

