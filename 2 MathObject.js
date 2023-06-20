// a. Write a JavaScript function that takes an array of numbers as input and returns the square root of the sum of squares of all the numbers. Use the Math object to perform the necessary calculations.

function sqrtSumOfSquares(numbers) {
  let sumOfSquares = numbers.reduce((sum, num) => sum + Math.pow(num, 2), 0);
  const sqrtOfSumOfSquares = Math.sqrt(sumOfSquares);
  return sqrtOfSumOfSquares;
}

// b. Implement the function to display the square root of the sum of squares for an array of numbers.

const numbers = [1, 2, 3];
console.log(sqrtSumOfSquares(numbers));
