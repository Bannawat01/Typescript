class HashTable {

    datas: any[]

    constructor(size: number) {
        this.datas = new Array(size)
    }

    hashfn(key: string) {
        let hashValue = 0
        for (let index = 0; index < key.length; index++) {
            hashValue += (key.charCodeAt(index) * index + 1)
            hashValue = hashValue % this.datas.length
        }
        return hashValue
    }

    set(key: string, value: any) {
        let index = this.hashfn(key)
        if (this.datas[index] === undefined) {
            this.datas[index] = []
        }

        this.datas[index].push([key, value])
    }

    get(key: string) {
        let index = this.hashfn(key)
        const bucket = this.datas[index]
        if (bucket !== undefined) {
            for (let i = 0; i < bucket.length; i++) {
                const item = bucket[i]
                const item_key = item[0] // key
                if (key == item_key) {
                    const value = item[1]
                    return value
                }
            }
        }
        return undefined
    }

    delete(key: string) {
        let index = this.hashfn(key)
        const bucket = this.datas[index]
        if (bucket !== undefined) {
            for (let i = 0; i < bucket.length; i++) {
                const item = bucket[i]
                const item_key = item[0] // key
                if (key === item_key) {
                    bucket.splice(item, 1)
                }
            }
        }
    }

}
const hashTable = new HashTable(1)
hashTable.set('red', '#FF0000')
hashTable.set('green', '#00FF00')
console.log(hashTable.datas)
console.log("*********************************")
const green = hashTable.get('red')
console.log(hashTable.datas)
console.log("*********************************")
hashTable.delete('green')
console.log(hashTable.datas)