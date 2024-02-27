//  javascript types of data

// peimitive
//  7 type : String, Number, Boolean, null, undefined, Symbol, BigInt


const F_name = "satyajay"; // String
const score = 100; // number
const scoreValue = 100.2 // number
const loginid = false; //Boolean
const outsideTemp = null; // null
let userEmail; // undefined

const id = Symbol('123'); //Symbol
const id2 = Symbol ('123'); //Symbol
console.log(id === id2);

const Big_number = 46464643213454n;
console.log(typeof(Big_number));


//  Reference (non perimitive)
     //  Array, Object, Function


     const heros = ["satyajay","Ravi","abhishek"]; // Array

     let myobj = {

        name : "Satyajay",
        age : 22
        } //Object

        const myfunction = function (){
            console.log("satyajay")
            
        }

    

