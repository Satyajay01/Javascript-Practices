// const tinderuser = new Object();

const tinderuser = {};

tinderuser.id = "abc123";
tinderuser.name = "sammy"
tinderuser.isloggedin = false;

console.log(tinderuser);
// ------------------------------
console.log(Object.keys(tinderuser));
console.log(Object.values(tinderuser));
console.log(Object.entries(tinderuser));

console.log(tinderuser.hasOwnProperty('name'))
console.log(tinderuser.hasOwnProperty('age'))

// ----------------------------------------


const regularuser = {

    Email : "same@gmail.com",
    fullname: {
        userfullname: {
            firstname: "satyajay",
            lastname: "dibya" 
        }
    }
}

console.log(regularuser); 
console.log(regularuser.fullname.userfullname.firstname);

// ----------------------------------------

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}

const obj3={obj1, obj2}; // method 1
console.log("method 1",obj3);

const obj4 = Object.assign(obj1,obj2); // method 2
console.log("method 2",obj4);

const obj5 = {...obj1, ...obj2}; // method 3 is a best method
console.log("method 2",obj5);

// ------------------------------



