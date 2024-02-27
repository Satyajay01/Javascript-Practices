// Immediately Invoked Function Expression (IIFE)
// it is use to Immediately connections

(function chai() { //name IIFE
    console.log(`DataBase Connected `)
})
(); // Semicolon is important for writing 2 characters together

// --------------------------------------

( (name) =>{  //without name IIFE
    console.log(`DataBase Connected Tow ${name}`);
} )
('Satyajay')