

function filterEvenNumbers(numbers) {
    return numbers.filter(number => number % 2 === 0)
}

const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const result = filterEvenNumbers(number)
console.log(result)