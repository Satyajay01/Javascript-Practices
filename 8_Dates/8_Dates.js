let myDate = new Date();

console.log(myDate);
console.log(myDate.toString()); // Date conver to String form 
console.log(myDate.toLocaleTimeString()); // time conver to String form 
console.log(myDate.toUTCString()); // time and date conver to String form 
console.log(typeof (myDate));

// ------------------------------------


let my_Date = new Date();
console.log(my_Date.getDay());
console.log(my_Date.getMonth()+1); 
console.log(my_Date.getFullYear()); 

// ---------------------------------------------


let myDate2 = new Date(2023, 0, 23)
console.log(myDate2.toDateString()) // single disit in javascript month starts from 0

let myDate3 = new Date("2024-01-27") //yy-mm-dd
console.log(myDate3.toLocaleString()) // duble disit in javascript month starts from 01



