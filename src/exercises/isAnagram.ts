export function isAnagram(s: string, t: string): boolean {
    if (s.length !== t.length) {
        return false
    }

    const sMap = new Map<string, number>()
    const tMap = new Map<string, number>()

    for (let i = 0; i < s.length; i++) {
        const sRepetitions = sMap.get(s[i])
        sMap.set(s[i], sRepetitions ? sRepetitions + 1 : 1)
        const tRepetitions = tMap.get(t[i])
        tMap.set(t[i], tRepetitions ? tRepetitions + 1 : 1)
    }

    let isAnagram = true

    sMap.forEach((value, key) => {
        const tRepetitions = tMap.get(key)
        if (tRepetitions !== value) {
            isAnagram = false
            return
        }
    })
    return isAnagram
}
