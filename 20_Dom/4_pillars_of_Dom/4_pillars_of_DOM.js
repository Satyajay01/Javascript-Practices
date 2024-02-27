// 4 pillars of DOM

// 1. Selection of an Element
// 2. Changing HTML
// 3. Changing CSS 
// 4. Event Listener 


// 1. Selection of an Element--------------
// ------------------------------------------

// const a = document.querySelector("h1");
// console.log(a);

// 2. Changing HTML------------------
// ----------------------------------

const b =document.querySelector("h1")
b.innerHTML=("my name is jay");
// --------
document.querySelector("h1").innerHTML= "hello jay"


// 3. Changing CSS ----------------
// ---------------------------------------


// const c =document.querySelector("h1");
// c.style.color="blue";

// document.querySelector("h1").style.color="yellow";
// document.querySelector("h1").style.backgroundColor="red"
// ------------------

// const c=document.querySelector("h1")
// c.innerHTML="kaise ho aap log";
// c.style.color="green";
// c.style.backgroundColor="#FFC0CB"


// 4. Event Listener -----------

const d=document.querySelector("h1");

d.addEventListener("click",function name(){

        d.innerHTML="badal gaya hun mai";
        d.style.color="blue";
    console.log("event listener is work");
    
})




