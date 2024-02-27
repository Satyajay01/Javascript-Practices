
// stack & heap memory allocation 
// (lifo) last in first out

// function great(name) {
//     let mesg = "hello" + " " + name
//     console.log(mesg);
// }

// function sayhello() {
//     let myName = "johan"
//     great(myName)
// }

// sayhello();


// (2)heap memory.......

// -----------
// const myobj={
//     name: "satyajay",
//     class: 12,
//     age: 22
// }

// myobj.name="jay";

// console.log(myobj.name)

// -----------


// in function calling

// const myobj={
//     name: "satyajay",
//     class: 12,
//     age: 22,

//     mybio(){
//         console.log(`my name is ${this.name} and age is ${this.age}`)
//     }
// }

// myobj.mybio();

// ---------------------

// (1)Map sabhi elemat me jake update karta hai
// ----------with number---------

// const arry=[2,3,4,5,6]
// const updated= arry.map((ele) =>
// {
//  return ele=ele*2

// })

// console.log(updated);



// ----------with string----------

// const name_arry=["jay", "abhi", "ravi"]
// const updated_name= name_arry.map((name) =>
// {
//  return name=name+=(" hello")

// })

// console.log(updated_name);


// (2) filter--------------
// it is use to the Array filter

// const filter_arry=[2,3,4,5,6,7,8,9,"2","3","4","5","6","7"]


// const updated_filter=filter_arry.filter((ele)=>
// {
//     // return ele>7
//     return ele<=3
//     // return ele>=6
//     // return ele===2
// })

// console.log(updated_filter)



// (3)Reduce-----------


// const reduce_arry =[2,3,4,5,6];

// const totalsum=reduce_arry.reduce((total,current_value)=>
// {

//     return total+current_value
    
// })
// console.log(totalsum);


// ------------------------
// ------------------------
// next topic is rest and spread



// (1) rest 
// multipale value lekar Array me stor kar deta hai

// function bio(first_name, last_name, ...other_info) {
//     return other_info
    
// }

// console.log(bio("jay","dibya",22, "raipur","hello"))



// --------------

// function ages(...value) {
//     return value
    
// }
// console.log(ages(2,3,4,5,6,"55"))


// --------------------

// function ages(name, age) {
//     return name
    
// }
// const [name,age]=["jay",22]
// console.log(name)

// ----------------


// merge of 2 Arrays----


// const arry1=[1,2,3]
// const arry2=[4,5,6]

// const all_arry=[...arry1,...arry2]
// console.log(all_arry)



// ------------------------











