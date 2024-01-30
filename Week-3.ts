class MyArray {
    length: number
    data: any

    constructor() {
        this.length = 0
        this.data = {}
    }

    get(_index: number) { //o(1)
        return this.data[_index] //o(1)
    }

    push(_item: any) { //o(1)
        this.data[this.length] = _item
        this.length++
        return this.length
    }

    pop() {
        this.length-- //o(1)
        const lastItem = this.data[this.length]
        delete this.data[this.length]
        return lastItem
    }

    delete(_index: number) { //o(n)
        const lastItem = this.data[_index]
        this.shift(_index)
        this.pop()
        return lastItem
    }
    shift(_index: number) { //o(n)
        for (let index = _index/*0 ผิด*/; /*_ ขีดอีกแล้ว*/index < this.length - 1; index++) {
            this.data[index] = this.data[index + 1]

        }
    }

    insert(_index: number, _item: number) { //o(n)
        this.push(_item)
        for (let index = this.length - 1; index > _index; index--) {
            const item = this.data[index]
            this.data[index] = this.data[index - 1]
            this.data[index - 1] = item
        }
        return this.length
    }

}

const arr = new MyArray()
console.log(arr)
console.log("------------------------------- ")
arr.push(20)
arr.push(30)
arr.push(40)
console.log(arr)
console.log("-------------------------------")
arr.pop()
console.log(arr)
console.log("-------------------------------")
arr.delete(0)
console.log(arr)
console.log("-------------------------------")
arr.insert(1, 50)
console.log(arr)