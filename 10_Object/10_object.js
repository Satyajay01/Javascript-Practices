// --------------------Symbol---------------------

const mysymbol = Symbol("key1");
const mysymbolobj = {
    [mysymbol]: "mykey"  // imp make object and print Symbol 

}

console.log(mysymbolobj[mysymbol]);

// -------------------Objet----------------

const user = {

    name : "Satyajay",
    age: 22,
    location: "Raipur",
    Email: "Satyajay@gmail.com",
    login: false,
    last_login: ["monday","saturday"],

    "full name": "satyajay dibya"
};

console.log(user);
console.log(user.Email);
console.log(user["name"]);
console.log(user["full name"]);


// Object.freeze(user)  // freeze and no change value in the object
user.Email = "satyajay@google.com" // change value in object 
console.log(user);

// ------------------------------------------


user.greeting = function(){
    console.log("hello satyajay")    
}

console.log(user.greeting())

