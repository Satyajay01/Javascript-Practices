const name = "satyajay ";
const num = 22;

console.log(name + num); // type 1
console.log(`hello my name is ${name} and my age is ${num}`); // type 2

// -------------------------

// String

const strname = new String ('satyajay');

console.log(strname[0],strname[2],strname[4],strname[5])
console.log(strname.length);
console.log(strname.toUpperCase());
console.log(strname.charAt(4));
console.log(strname.indexOf("y")); //search

const newstrname = strname.substring(0,5);
console.log(newstrname);

const and_stringname = strname.slice(-8, 4)
console.log(and_stringname);

// ----------------text-----------------------

const newStringone = "    satyajay ";
console.log(newStringone);
console.log(newStringone.trim());

// ----------------Url replace---------------------

const url = "https://www.google.com%20satyajay";

newUrl = url.replace('%20','_')
console.log(newUrl);

console.log(url.replace('%20','_'))


console.log(url.includes('satyajay')); //search
console.log(url.includes('sibya'));  //search

// --------------------------
