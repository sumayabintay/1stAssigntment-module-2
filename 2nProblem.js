
function sumNumbers(...numbers) {
    return numbers.reduce((num1, num2) => num1 + num2)
}

const totalNumber = sumNumbers(1, 2, 3, 4, 5)
console.log(totalNumber) 