const myarr = [0,1,2,3,4,5];
const myarr2 = ["satyajay","Ravi"];
console.log(myarr)


// console.log(myarr[3])
// console.log(myarr2[0])


// -----------Array Methods--------------

myarr.push(6);
console.log(myarr)

myarr.pop()
console.log(myarr)

console.log(myarr.includes(8))
console.log(myarr.includes(4))

myarr.sort();
console.log(myarr)

myarr.toString();
console.log(myarr)

myarr.reverse();
console.log(myarr)

delete myarr[2];
console.log(myarr)





// -----------slice and splice--------------


const myarr3 = [0,4,8,1,6,2];


const myarr4 = myarr3.slice(1, 4); // IMP No change in origin Array
console.log(("A"),myarr4);

const myarr5 = myarr3.splice(1, 4); // IMP change in origin Array
console.log(("B"),myarr5);
console.log(myarr3)






