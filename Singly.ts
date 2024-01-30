class SinglyNode {
    data: any //data
    next: SinglyNode | null
    constructor(data: any) {
        this.data = data
        this.next = null
    }


}
class SinglyLinkedList {
    head: SinglyNode | null
    tail: SinglyNode | null
    length: number = 0
    constructor() {
        this.head = null
        this.tail = null
    }

    append(data: any) {
        const newNode = new SinglyNode(data)
        if (this.head === null) {
            this.head = newNode
            this.tail = this.head
        } else {
            this.tail!.next = newNode
            this.tail = newNode
        }
        this.length++
    }

    appendLeft(data: any) {
        const newNode = new SinglyNode(data)
        if (this.head === null) {
            this.append(data)
            this.length--
        } else {
            newNode.next = this.head
            this.head = newNode
        }
        this.length++
    }

    toArray() {
        const array: any[] = []
        let node = this.head
        while (node !== null) {
            array.push(node?.data)
            node = node?.next
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

    insert(index: number, data: any) {
        if (index >= this.length)
            return this.append(data)
        if (index === 0)
            return this.appendLeft(data)
        const newNode = new SinglyNode(data)
        const leftNode = this.traverseToIndex(index - 1)
        const holdingPointer = leftNode!.next
        leftNode!.next = newNode
        newNode.next = holdingPointer
        this.length++
        return this
    }

    remove(index: number) {
        if (this.head === null)
            return
        if (index > this.length)
            index = this.length - 1
        if (index < 1) {
            this.head = this.head?.next
        } else {
            const leftNode = this.traverseToIndex(index - 1)
            const deleteNode = leftNode!.next
            leftNode!.next = deleteNode!.next
        }
        this.length--
        return this
    }
}
let linkedList = new (SinglyLinkedList)
console.log(linkedList)
linkedList.appendLeft(1)
linkedList.appendLeft(3)
console.log(linkedList.toArray())
linkedList.insert(3, 5)
console.log(linkedList.toArray())
linkedList.remove(127)
console.log(linkedList.toArray())
