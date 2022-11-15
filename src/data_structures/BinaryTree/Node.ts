export class Node<T> {

    constructor(
        private _value: T,
        private _leftChild: Node<T> | null = null,
        private _rightChild: Node<T> | null = null,
    ) {
    }

    get value(): T {
        return this._value;
    }

    get leftChild(): Node<T> | null {
        return this._leftChild;
    }

    get rightChild(): Node<T> | null {
        return this._rightChild;
    }
}
