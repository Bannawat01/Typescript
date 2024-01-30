class QueueNode {
    value: any
    next: QueueNode | null
    constructor(value: any) {
        this.value = value
        this.next = null
    }
}

class Queue {
    first: QueueNode | null = null
    last: QueueNode | null = null
    length: number = 0

    peek() {
        return this.first?.value
    }

    enqueue(value: any) {
        const newNode = new QueueNode(value)
        if (this.first === null) {
            this.first = newNode //step-1
            this.last = newNode //step-1
        } else {
            this.last!.next = newNode //step-2
            this.last = newNode //step-3
        }
        this.length++
        return this
    }

    dequeue(value: any) {
        const newNode = new QueueNode(value)
        if (this.first === null) {
            this.first = newNode //step-1
            this.last = newNode //step-1
        } else {
            this.last!.next = newNode //step-2
            this.last = newNode //step-3
        }
        this.length++
        return this
    }
}