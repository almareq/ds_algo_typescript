interface Node<T> {
    element: T,
    next: Node<T> | null,
}

export class LinkedList<T> {

    private _head: Node<T> | null
    private _size: number

    constructor() {
        this._head = null
        this._size = 0
    }

    get first(): T | null {
        if (this._head === null) {
            return null
        }
        return this._head.element
    }

    get last(): T | null {
        let current = this._head
        if (current === null) {
            return null
        }
        for (; current.next !== null; current = current.next) {
        }
        return current.element
    }

    get size() {
        return this._size
    }

    isEmpty(): boolean {
        return this._head === null
    }

    addFirst(element: T): void {
        this._head = {
            element,
            next: this._head
        }
        this._size++
    }

    addLast(element: T): void {
        const newNode = {
            element,
            next: null
        }
        let current = this._head
        if (current === null) {
            this._head = newNode
            return
        }
        for (; current.next !== null; current = current.next) {
        }
        current.next = newNode
    }

    removeFirst(): T {
        if (this._head === null) {
            throw new Error("list is empty")
        }
        const head = this._head
        this._head = head.next
        this._size--
        return head.element
    }
}
