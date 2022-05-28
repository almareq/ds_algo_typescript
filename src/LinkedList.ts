interface Node<T> {
    element: T | null,
    next: Node<T> | null,
}

export class LinkedList<T> {

    private readonly header: Node<T>
    private _size: number

    constructor() {
        this.header = {
            element: null,
            next: null
        }
        this._size = 0
    }

    get first(): T | null {
        if (this.header.next === null) {
            return null
        }
        return this.header.next.element
    }

    get last(): T | null {
        let current = this.header
        for (; current.next !== null; current = current.next) {
        }
        return current.element
    }

    get size() {
        return this._size
    }

    isEmpty(): boolean {
        return this._size === 0
    }

    addFirst(element: T): void {
        this.header.next = {
            element,
            next: this.header.next
        }
        this._size++
    }

    addLast(element: T): void {
        const newNode = {
            element,
            next: null
        }
        let current = this.header
        for (; current.next !== null; current = current.next) {
        }
        current.next = newNode
    }

    removeFirst(): T | null {
        if (this.header.next === null) {
            throw new Error("list is empty")
        }
        const head = this.header.next
        this.header.next = head.next
        this._size--
        return head.element
    }
}
