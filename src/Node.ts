export interface Node<T> {
    element: T,
    next: Node<T> | null,
}