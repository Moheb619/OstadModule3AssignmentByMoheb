// a. Write a JavaScript function that takes a positive integer as input and returns true if it is a prime number, otherwise returns false.

function isPrime(number) {
  if (number <= 1) return false;
  if (number <= 3) return true;
  if (number % 2 == 0 || number % 3 == 0) return false;

  for (let i = 5; i * i <= number; i = i + 6) if (number % i == 0 || number % (i + 2) == 0) return false;

  return true;
}

// b. Implement the function to check if a given positive integer is a prime number.

const number = 1986;
console.log(isPrime(number));
