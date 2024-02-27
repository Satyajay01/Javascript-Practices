const boys = ["satyajay","Saty","Jay"]
const girls = ["Diksha","Tannu","Manisha"]


// boys.push(girls);
// console.log(boys)

const boys_girls = boys.concat(girls);
console.log(boys_girls);
console.log(boys_girls.length);

// -------------------------------------

const number_arr = [1,2,3,[4,5,6,[7,8,9]],[9,8,7]];
const new_number_arr = number_arr.flat(Infinity);
console.log(new_number_arr);

// --------------------------------------------

const Arry_name = (Array.from("Satyajay")); // convert to Array
console.log(Arry_name,"length",(Arry_name.length));

// -----------------------------------------

let score1 = 100;
let score2 = 200;
let score3 = 300;

const score4 = Array.of(score1,score2,score3);
console.log(score4);

