/* HW 5
   Example 2 JavaScript code
*/
console.log("Torres Output from HW 5 Example 2");

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//filter array for odd numbers 
const oddNumbers = numbers.filter(num => num % 2 !== 0);
console.log(oddNumbers);

//filter array for numbers divisible by 2 or 5
const divisibleBy2or5 = numbers.filter(num => num % 2 === 0 || num % 5 === 0);
console.log(divisibleBy2or5);

//filter array for numbers divisble by 3 squared
const divisibleBy3Squared = numbers.filter(num => num % 3 === 0).map(num => num * num);
console.log(divisibleBy3Squared);

//filter array for numbers divisible by 5 squared and sum these numbers
const sumOfDivisibleBy5Squared = numbers.filter(num => num % 5 === 0).map(num => num * num).reduce((acc, val) => acc + val);
console.log(sumOfDivisibleBy5Squared);
