const even = [];
const odd = [];
const numbersMultipliedBy5 = [];
const primeNumbers = [];
const primeNumbersLessThan100 = [];

isPrime = number => {
  for (let i = 2; i < number; i++) {
    if (number % i === 0) return false;
  }
  return number > 1;
};

for (let number = 1; number < 1000; number++) {
  if (isPrime(number)) primeNumbers.push(number);
  if (isPrime(number) && number < 100) primeNumbersLessThan100.push(number);
  if (number % 5 === 0) numbersMultipliedBy5.push(number);
  if (number % 2 === 0) even.push(number);
  if (number % 2 !== 0) odd.push(number);
}

console.log('Even Numbers:', even);
console.log('Odd Numbers:', odd);
console.log('Numbers Multiplied by 5:', numbersMultipliedBy5);
console.log('Prime Numbers: ', primeNumbers);
console.log('Prime Numbers With Less Than 100:', primeNumbersLessThan100);
