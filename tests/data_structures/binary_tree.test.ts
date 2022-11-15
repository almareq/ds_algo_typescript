import {Node} from "../../src/data_structures/BinaryTree/Node";

const printTree = (node: Node<unknown> | null) => {
    if (node === null) return
    console.log(node.value)
    printTree(node.leftChild)
    printTree(node.rightChild)
}

describe('test binary tree', () => {
    it('', () => {
        const left = new Node("left")
        const right = new Node("right")
        const root = new Node("root", left, right)

        printTree(root)
    })
})