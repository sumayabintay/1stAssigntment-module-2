
function getLargestNumber (number1, number2) {
    return number1 >= number2 && number1 || number2
}

const largestNumber = getLargestNumber(100, 5000, 900)
console.log(largestNumber)