function destructureExample(obj, arr) {
    const { name, age } = obj
    const [inx0, , inx2] = arr
    return { name, age, inx0, inx2 }
}

const obj = { name: 'Sumaya', age: '23' }
const arr = ['Rose', 'Sun Flower', 'Banana', 'Mango']
const result = destructureExample(obj, arr)
console.log(result);