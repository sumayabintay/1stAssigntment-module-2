
function sortNumbers(numbers) {
    return numbers.sort((num1, num2) => num1 - num2)
}
const number = [5, 2, 8, 1, 4]
const result = sortNumbers(number)
console.log(result)