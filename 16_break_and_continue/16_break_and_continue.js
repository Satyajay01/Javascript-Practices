//------------------break-------------

for (let i = 1; i <= 10; i++) {
   
    if (i==5) {
        console.log(`Number ${i} Detected`);
        break
    }
    console.log(i);   
};
//--------------continue-----------------

for (let i = 1; i <= 10; i++) {
   
    if (i==5) {
        console.log(`Number ${i} Detected`);
        continue;
    }
    if (i==7) {
        console.log(`Number ${i} Detected`);
        continue;
    }
    console.log(i);   
};

