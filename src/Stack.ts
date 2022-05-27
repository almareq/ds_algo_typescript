import { LinkedList } from "./LinkedList"

export class Stack<T> {

    private list: LinkedList<T>

    constructor() {
        this.list = new LinkedList()
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