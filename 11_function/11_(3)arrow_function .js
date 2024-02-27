function addtow(num1, num2) {
    return num1 + num2;
}
console.log(addtow(4, 5))
// --------------------------------

// () => {} Arrow function syntax
const chai = (num1, num2) => {
    return num1 + num2;
}
console.log(chai(4, 5))
// --------------------------------

const chai2 = (num1, num2) => (num1 + num2); // implicit return Arrow function
console.log(chai2(10, 50))

const chai3 = (num1, num2) => ({username: "satyajay"}); 
console.log(chai3())


