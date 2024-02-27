const score = 500;

const balance = new Number(1000); // fix define datatype pf Number.
console.log(balance);


const name = String(123456); // fix define datatype of String.
console.log(name);
console.log(typeof name);

// ------------number Precision------------

const num1 = 124.1234;
console.log(num1.toPrecision(3)); // method 1

num2 = num1.toPrecision(3); // method 2
console.log(num2);


// --------------- Math ------------

console.log(Math)
console.log(Math.abs(-4)) //Negative value to positive convert
console.log(Math.round(4.2)) // number  Round off

console.log(Math.ceil(4.3)) //is a point .2 (+1);


console.log(Math.min(4,6,2,8,3),"minimum"); //minimum value
console.log(Math.max(4,6,2,8,3),"maximum"); //maximum value

console.log("Random with 10 multiply and  +1 = ",Math.random()*(10)+1); // random number
console.log("Random with 10 multiply and  +1 = ",(Math.floor(Math.random()*10)+1)); // random number


const min = 10; // fix minimum value
const max = 20; // fix maximum value
console.log(Math.floor(Math.random()*(max - min +1 )) +10);








