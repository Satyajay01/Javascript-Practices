function saymyname() {
    console.log("S");
    console.log("A");
    console.log("T");
    console.log("Y");
    console.log("A");
    console.log("J");
    console.log("A");
    console.log("Y");

}
saymyname();

// ----------------------------

function adtwonumbers(number1, number2){

   console.log(number1+number2);
}

adtwonumbers("sum of ",4,6)

// ------------------------------

function add_two_numbers(number1, number2){

    const my_result = number1+number2;
   return my_result;
};

const result = add_two_numbers(4,6);
console.log("Result : ",result);

// -----------------------------------

function loginuserMessage(username){
    return `${username} just logged in `
}

console.log(loginuserMessage("satyajay"));

// -----------------------------------


function Login_Usersms(username){
    // if(username===undefined)
    if(!username)
    {
        console.log("please Enter user name")
        return;
    }
    
    else{
        return `${username} just logged in `
    }
}

console.log(Login_Usersms());

// -------------------------------------
// ----------------------------------------

function addnumber(num) { // method 1
    return  num +1;
}
console.log(addnumber(5))
// --------------------------
const addnumber2 =function (num) { // method 2
    return  num +1;
}
console.log(addnumber2(5))

// -----------------------------------



