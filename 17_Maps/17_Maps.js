const my_map = new Map()
{
my_map.set('01', "SATYAJAY")
my_map.set('02', "ABHISHEK")
my_map.set('03', "RAVI")
my_map.set('04', "RALSON")
my_map.set('01', "SATYAJAY") // duplicate value not allowed

}
console.log(my_map);

let j=0;
for (const i of my_map) {
    j++;
    console.log(`my_map ${j}`,i)
    
}
// -----------key and value---------


for (const [key, value] of my_map) { // [key and value] only for support Map function
    
    console.log(key) // only for key
    console.log(value) // onlay for value
}