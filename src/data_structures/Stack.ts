import {CircularLinkedList} from "./CircularLinkedList"

export class Stack<T> {

    private list: CircularLinkedList<T>

    constructor() {
        this.list = new CircularLinkedList()
    }

    top() {
        return this.list.first
    }

    push(element: T) {
        this.list.addFirst(element)
    }

    pop() {
        return this.list.removeFirst()
    }

    size() {
        return this.list.size
    }
}