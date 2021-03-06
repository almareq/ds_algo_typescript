import {CircularLinkedList} from "../../src/data_structures/CircularLinkedList";

describe('circular linked list test', () => {
    let linkedList: CircularLinkedList<string>

    beforeEach(() => {
        linkedList = new CircularLinkedList();
    })

    it('should add an item first', () => {
        linkedList.addFirst("potatos")
        expect(linkedList.first).toBe("potatos")
        linkedList.addFirst("salmons")
        expect(linkedList.first).toBe("salmons")
    })

    it('should remove the first item', () => {
        linkedList.addFirst("potatos")
        linkedList.addFirst("salmons")
        linkedList.addFirst("pin")
        expect(linkedList.removeFirst()).toBe("pin")
        expect(linkedList.removeFirst()).toBe("salmons")
        expect(linkedList.removeFirst()).toBe("potatos")
    })

    it('should give me the first element', () => {
        linkedList.addFirst("potato")
        expect(linkedList.first).toBe("potato")
    })

    it('should give me the last element', () => {
        linkedList.addFirst("potatos")
        linkedList.addFirst("salmon")
        linkedList.addFirst("tuna")
        expect(linkedList.last).toBe("potatos")
    })

    it('should give the same element for last and first with just 1 element', () => {
        linkedList.addFirst("potatos")
        expect(linkedList.last).toBe("potatos")
        expect(linkedList.last).toBe(linkedList.first)
    })

    it('should add an element last', () => {
        linkedList.addLast("salmon")
        linkedList.addLast("potato")
        expect(linkedList.last).toBe("potato")
    })
})