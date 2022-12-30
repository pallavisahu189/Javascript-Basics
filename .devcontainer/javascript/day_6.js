
const accountId = 202322;
let accountEmail = "pallu@gmail.accountEmail";
let accountPassword = "3210";
let accountCity = "Raipur";
let accountState = "CG";

console.log accountId;
console.log accountEmail;
console.log accountPassword;
console.log accountCity;
console.log accountState;

let accountEmail = "pallavi@gmail.accountEmail";
let accountPassword = "0123";
let accountCity = "Balod";
let accountState = "CG";


console.log "accountEmail";
console.log "accountPassword";
console.log "accountCity";
console.log "accountState";
 




// add two num enter by user

const num1 = parseInt(prompt('Enter the first number '));
const num2 = parseInt(prompt('Enter the second number '));

//add two numbers
const sum = num1 + num2;

console.log(`The sum of ${num1} and ${num2} is ${sum}`);





// check odd or even num

const num = 100
if(num % 2 == 0)
{console.log(num + "this is even number");}

else
{console.log(num + "this is odd number");}


// calculate the area of a triangle
//  Area When Base and Height is Known

const baseValue = prompt('Enter the base of a triangle: ');
const heightValue = prompt('Enter the height of a triangle: ');

// calculate the area
const areaValue = (baseValue * heightValue) / 2;

console.log(
  `The area of the triangle is ${areaValue}`
);