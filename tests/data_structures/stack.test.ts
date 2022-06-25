import {Stack} from "../../src/data_structures/Stack";

describe('stack test', () => {
    let stack: Stack<number>

    beforeEach(() => {
        stack = new Stack();
    })

    it('should push an item', () => {
        expect(stack.top()).toBeNull()
        stack.push(55)
        expect(stack.top()).toBe(55)
        stack.push(12)
        expect(stack.top()).toBe(12)
    })

    it('should pop an item', () => {
        stack.push(55)
        const e = stack.pop()
        expect(e).toBe(55)
    })

    it('should throw an error when popping empty', () => {
        expect(stack.pop).toThrow()
    })

    it('should return the correct size', () => {
        expect(stack.size()).toBe(0)
        stack.push(11)
        expect(stack.size()).toBe(1)
        stack.push(11)
        expect(stack.size()).toBe(2)
        stack.pop()
        expect(stack.size()).toBe(1)
        stack.pop()
        expect(stack.size()).toBe(0)
    })
})