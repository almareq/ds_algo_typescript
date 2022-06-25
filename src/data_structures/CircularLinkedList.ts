interface Node<T> {
    element: T | null,
    next: Node<T> | null,
}

export class CircularLinkedList<T> {

    private tail: Node<T> | null = null
    private _size: number = 0

    constructor() {
        this.tail = null
        this._size = 0
    }

    get first(): T | null {
        if (this.tail === null || this.tail.next === null) {
            return null
        }
        return this.tail.next.element
    }

    get last(): T | null {
        if (this.tail === null) {
            return null
        }
        return this.tail.element
    }

    get size(): number {
        return this._size
    }

    isEmpty(): boolean {
        return this._size === 0
    }

    addFirst(element: T): void {
        this._size++
        if (this.tail === null) {
            this.tail = {
                element,
                next: null
            }
            this.tail.next = this.tail
            return
        }
        this.tail.next = {
            element,
            next: this.tail.next
        }
    }

    addLast(element: T): void {
        this.addFirst(element)
        if (this.tail === null) {
            return
        }
        this.tail = this.tail.next
    }

    removeFirst(): T | null {
        if (this.tail === null || this.tail.next === null) {
            throw new Error("list is empty")
        }
        this._size--
        const first = this.tail.next
        if (first === this.tail) {
            this.tail = null
            return first.element
        }
        this.tail.next = this.tail.next.next
        return first.element
    }

    rotate(): void {
        if (this.tail !== null) {
            this.tail = this.tail.next
        }
    }
}
