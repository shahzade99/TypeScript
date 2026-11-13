let names:string[] = ['abc', 'def', 'pqr', 'zab', 'pad'];

console.log (names[0]);


// iterating one by one using for loop
for (let i =0; i<names.length; i++)
{
    console.log(`normal loop interation at index ${i}is ${names[i]}`)
}


// for...in loop   // index based

for (let x in names)
{
    console.log(`for..in..loop ${names[x]}`)
}


// for...each loop

names.forEach(z => {
    console.log("for....each loop", z)
    
});

// for...of loop         // value based

for(let p of names)
{
    console.log("for....of loop", p)
    
};