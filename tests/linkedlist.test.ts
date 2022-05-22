import { LinkedList } from "../src/LinkedList";

describe('linked list test', () => {
    let linkedList: LinkedList<string>

    beforeEach(() => {
        linkedList = new LinkedList();
    })

    it('should add an item last', () => {
        linkedList.addFirst("potatos")
        expect(linkedList.head).toBe("potatos")
        linkedList.addFirst("salmons")
        expect(linkedList.head).toBe("salmons")
    })
    
    it('should remove last item', () => {
        linkedList.addFirst("potatos")
        linkedList.addFirst("salmons")
        linkedList.addFirst("pin")
        expect(linkedList.removeFirst()).toBe("pin")
        expect(linkedList.removeFirst()).toBe("salmons")
        expect(linkedList.removeFirst()).toBe("potatos")
    })
})