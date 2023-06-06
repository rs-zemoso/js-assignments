// Q1. Write a program to demonstrate how a function can be passed as a parameter to another function.

const a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sumArray = (a, callback) => {
  let sum = 0;
  for (let element of a) {
    sum += element;
  }
  callback(sum);
}
sumArray(a, (sum) => {
  console.log(sum)
})

// Q2. An arrow function takes two arguments firstName and lastName and returns a 2 letter string that represents the first letter of both the arguments. For the arguments  Roger and Waters, the function returns ‘RW’. Write this function. Submit the github link to the code

const firstChars = (a, b) => a.charAt(0) + b.charAt(0)

console.log(firstChars('Roger', 'Waters'));