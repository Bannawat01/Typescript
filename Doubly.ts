class DoublyNode {
    value: any
    next: DoublyNode | null
    prev: DoublyNode | null
    constructor(value: any) {
        this.value = value
        this.next = null
        this.prev = null
    }
}

class DoublyLinkedList {
    head: DoublyNode | null
    tail: DoublyNode | null
    length: number = 0
    constructor() {
        this.head = null
        this.tail = null
    }
    append(intdex: any) {
        const newNode = new DoublyNode(intdex)
        if (this.head === null) {
            this.head = newNode
            this.tail = this.head
        } else {
            newNode.prev = this.tail
            this.tail!.next = newNode
            this.tail = newNode
        }
        this.length++
    }
    appendLeft(intdex: any) {
        const newNode = new DoublyNode(intdex)
        if (this.head === null) {
            this.head = newNode
            this.tail = this.head
        } else {
            newNode.next = this.head
            this.head.prev = newNode
            this.head = newNode
        }
        this.length++
    }
    toArray() {
        const array: any[] = []
        let node = this.head
        while (node !== null) { //time complexity = O(n)
            array.push(node?.value)
            node = node!.next
        }
        return array
    }
    traverseToIndex(index: number) {
        let counter = 0
        let currentNode = this.head
        while (counter < index) {
            currentNode = currentNode!.next
            counter++
        }
        return currentNode
    }
    insert(index: number, value: any) {
        if (index >= this.length) {
            return this.append(value)
        }
        if (index <= 0) {
            return this.appendLeft(value)
        }
        const newNode = new DoublyNode(value)
        const leftNode = this.traverseToIndex(index - 1)
        const rightNode = leftNode!.next
        leftNode!.next = newNode.prev
        rightNode!.prev = newNode
        this.length++
        return this
    }
    Remove(index: number) {
        if (this.head === null) {
            return
        }
        if (index > this.length) {
            index = this.length - 1
        }
        if (index < 1) {
            this.head = this.head.next
            this.head!.prev = null
        } else {
            const delNode = this.traverseToIndex(index)
            if (delNode !== null) {

                if (delNode.prev !== null) {
                    delNode.prev.next = delNode.next
                }

                if (delNode.next !== null) {
                    delNode.next.prev = delNode.prev
                }
            }
        }
    }
}

const ddr = new DoublyLinkedList()
ddr.append(2)
console.log(ddr.toArray())
console.log("***********************")
ddr.insert(2, 7)
ddr.append(4)
ddr.append(5)
console.log(ddr.toArray())
console.log("***********************")
// ddr.appendLeft(10)
ddr.Remove(6)
console.log(ddr.toArray())
console.log("***********************")
ddr.traverseToIndex(1)
console.log(ddr.toArray())
