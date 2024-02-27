//  for in = key (object)
//  for of = values
//  forEach = key and value

// -------------------------------


const arr =[1,2,3,4,5,6,7,8,9];

for (const i of arr) {
    console.log("Number",i);  
}
// ------------------------
let j=0;
const name = "SATYAJAY";
for (const i of name) 
{    j++;
    console.log(i,`${j}`)    
}

// ----------for in-------------

const myobj ={
    js: 'JavaScript',
    cpp: 'C++',
    rb: 'ruby',
    sw: "Swift"
}

for (const key in myobj) {
    console.log(key) // only for key
    console.log(myobj[key]) // only for value
}

// ---------Array of For_in loop-----------

const programming =["js","c++","python","ruby"];

for (const key in programming) {
    console.log(key)
    console.log(programming[key])
}


// -------------forEach--with--Array---------------
// ------------forEach with normal function-----------

const coding =["Javascript","Python","c++","Ruby"];

coding.forEach( function (all_values){
    console.log("forEach with normal function value: ",all_values);
})
// -------------forEach with arrow function------
coding.forEach((all_values)=>{
    console.log("forEach with arrow function value: ",all_values);
})



 