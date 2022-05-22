import { Node } from "./Node"

export class LinkedList<T> {

    private _head: Node<T> | null
    private _size: number

    constructor() {
        this._head = null
        this._size = 0
    }

    get head() {
        if (this._head === null) {
            return null
        }
        return this._head.element
    }

    get size() {
        return this._size
    }

    addFirst(element: T) {
        this._head = {
            element,
            next: this._head
        }
        this._size++
    }

    removeFirst() {
        if (this._head === null) {
            throw new Error("list is empty")
        }
        const head = this._head
        this._head = head.next
        this._size--
        return head.element
    }
}