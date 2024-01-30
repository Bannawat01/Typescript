class StackNode {
    value: any
    next: StackNode | null
    constructor(value: any) {
        this.value = value
        this.next = null
    }
}

class Stack {
    top: StackNode | null = null
    bottom: StackNode | null = null
    length: number = 0

    push(value: any) {
        const newNode = new StackNode(value)
        if (this.top === null) {
            this.top = newNode
            this.bottom = newNode
        } else {
            const holding = this.top
            this.top = newNode
            this.top.next = holding
        }
        this.length++
        return this
    }

    pop() {
        if (this.top === null) {
            return null
        }
        if (this.top === this.bottom) {
            this.bottom = null
        }
        this.top = this.top!.next //step-2
        this.length--
        return this
    }

    peek() {
        return this.top
    }
}

class StackArray {
    array = new Array
    peek() {
        return this.array[this.array.length - 1]
    }
    push(value: any) {
        this.array.push(value)
        return this
    }
    pop() {
        this.array.pop()
        return this
    }
}

const stack = new StackArray()
stack.push("Hello")
stack.push("Prayuth")
console.log(stack)
console.log(stack.peek())
stack.pop()
console.log(stack)
console.log(stack.peek())
