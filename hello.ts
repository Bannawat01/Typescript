const nums = [20, 30, 45, 66.5, 999] //this is O(1)

function first_number(_numbers: number[]) {
    return _numbers[0]
}

console.log(first_number(nums))

const names = ['PHONTHAKRON', 'MANITA', 'PHIYADA'] //this is O(n)

function findPrayuth(_names: string[]) {
    for (let index = 0; index < _names.length; index++) {
        const element = _names[index]
        if (element === 'Prayuth') {
            console.log('Found Prayuth!')
        }
    }
}

function foo(_number1: number[]) { //this is O(n^2)
    for (let index = 0; index < _number1.length; index++) {
        let _num1 = _number1[index]
        for (let index = 0; index < _number1.length; index++) {
            let _num2 = _number1[index]
            console.log(`${_num1} x ${_num2} = ${_num1 * _num2}`)
        }
    }
}

foo([1, 3, 5])

function factorial(_n: number) { //this is O(n!)
    for (let index = 0; index < _n; index++) {
        factorial(_n - 1)
    }
}