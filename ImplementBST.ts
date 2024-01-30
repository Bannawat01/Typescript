class BT_Node {
    value: any //data
    left: null | BT_Node = null
    right: null | BT_Node = null

    constructor(value: any) {
        this.value = value
    }
}

class BinarySearchTree {
    root: null | BT_Node = null
    insert(value: any) {
        const newNode = new BT_Node(value)
        if (this.root === null)
            this.root = newNode
        else
            this.insertNode(this.root, newNode)
    }

    public insertNode(currentNode: BT_Node, newNode: BT_Node) {
        if (newNode.value < currentNode.value) {
            if (currentNode.left === null)
                currentNode.left = newNode
            else
                this.insertNode(currentNode.left, newNode)
        } else {
            if (currentNode.right === null)
                currentNode.right = newNode
            else
                this.insertNode(currentNode.right, newNode)
        }
    }

    remove(value: any) {
        if (this.root === null)
            return null
        const [deleteNode, parentNode] = this.#searchDeleteNode(value, this.root, null)
        if (deleteNode === null)
            return null
        return this.#removeNode(deleteNode, parentNode)
    }

    #searchDeleteNode(value: any, currentNode: BT_Node, parentNode: BT_Node | null): [null | BT_Node, null | BT_Node] {
        if (value < currentNode.value && currentNode.left !== null) {
            parentNode = currentNode
            currentNode = currentNode.left
            return this.#searchDeleteNode(value, currentNode, parentNode)
        } else if (value > currentNode.value && currentNode.right !== null) {
            parentNode = currentNode
            currentNode = currentNode.right
            return this.#searchDeleteNode(value, currentNode, parentNode)
        } else if (value === currentNode.value)
            return [currentNode, parentNode]
        return [null, null]
    }

    #removeNode(deleteNode: BT_Node, parentNode: BT_Node | null) {
        //Option 1 ไม่มีด้านขวา
        if (deleteNode.right === null) {
            if (parentNode === null)
                this.root = deleteNode.left
            else {
                if (parentNode.value > deleteNode.value)
                    parentNode.left = deleteNode.left
                if (parentNode.value < deleteNode.value)
                    parentNode.right = deleteNode.left
            }
        }
        //Option 2 ด้านขวาของตัวที่เราจะลบ ไม่มีลูกด้านซ้าย
        else if (deleteNode.right.left === null) {
            deleteNode.right.left = deleteNode.left
            if (parentNode === null)
                this.root = deleteNode.right
            else {
                if (parentNode.value > deleteNode.value)
                    parentNode.left = deleteNode.right
                if (parentNode.value < deleteNode.value)
                    parentNode.right = deleteNode.right
            }
        }
        // option 3 ด้านขวาของตัวที่เราจะลบ มี ลูกด้านซ้าย
        else {
            let leftmost = deleteNode.right.left
            let leftmostParent = deleteNode.right
            while (leftmost.left !== null) {
                leftmostParent = leftmost
                leftmost = leftmost.left
            }
            leftmostParent.left = leftmost.right
            leftmost.left = deleteNode.left
            leftmost.right = deleteNode.right
            if (parentNode === null)
                this.root = leftmost
            else {
                if (parentNode.value > deleteNode.value)
                    parentNode.left = leftmost
                if (parentNode.value < deleteNode.value)
                    parentNode.right = leftmost
            }
        }

    }

    search(value: any) {
        if (this.root === null)
            return null
        else
            return this.#searchNode(this.root, value)
    }

    #searchNode(currentNode: BT_Node, value: any): BT_Node | null {
        if (value < currentNode.value && currentNode.left !== null) {
            return this.#searchNode(currentNode.left, value)
        } else if (value > currentNode.value && currentNode.right !== null) {
            return this.#searchNode(currentNode.right, value)
        } else if (value === currentNode.value) {
            return currentNode
        }
        return null
    }
}


const bst = new BinarySearchTree()
bst.insert(40)
bst.insert(50)
bst.insert(30)
bst.insert(25)
bst.insert(35)
bst.insert(45)
bst.insert(60)
bst.insert(55)
const bst_text = JSON.stringify(bst)
console.log(bst_text)
console.log('--------------')
bst.remove(50)
const bst_remove50_text = JSON.stringify(bst)
console.log(bst_remove50_text)  