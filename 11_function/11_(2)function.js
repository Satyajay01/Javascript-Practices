function CalculateCardPrice1(num1) {
    return num1;
}

console.log(CalculateCardPrice1(100, 200));
// -----------------------

function CalculateCardPrice2(...num1) { //( ... Rest operator)  return to array form
    return num1;
}

console.log(CalculateCardPrice2(100, 200, 300, 400, 500));

// -------------------------------


const user ={
    username: "satyajay",
    price: 199
}

function handleobject(anyobject){
    console.log(`haii sir Username is ${anyobject.username} and price is ${anyobject.price}`)

}

// handleobject(user); // method 1

handleobject({ // method 2
    username: "Satyajay dibya",
    price: 500
})

// ---------------------------------------

function arrayfun(arraynumber){
    return arraynumber[2];
}

const myarray = [100, 200, 300, 400]; // method 1
console.log(arrayfun(myarray));


console.log(arrayfun([222, 333, 444, 555])); // method 2

// ---------------------------------------


