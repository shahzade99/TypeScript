// while loop; keep looping until the condition is false
/*let count = 5;
while (count > 0) {
    console.log(`count: ${count}`);
    count--;
}


// do-while loop; execute the block at least once, then keep looping until the condition is false
let Count = 5;
do {
    console.log(`Count: ${Count}`);
    Count--;
} while (Count > 0);   // the condition is checked after the block is executed, so the block will always run at least once
                       // first do block then check while condition, if true then do block again, if false then exit loop
{
    console.log("Count is now 0, exiting loop");
}
*/


// for loop; iterate a specific number of times
let x = 5;
for (let i = 0; i < x; i++) {
    console.log(`i: ${i}`);
}



// Break and continue statements; break exits the loop, continue skips the current iteration and moves to the next one
for (let i = 0; i < 10; i++) {
    if (i == 5) {
        console.log("Breaking the loop at i = 5");
        break; // exit the loop o/p will be 0,1,2,3,4,5 
    }
};


for (let i = 0; i < 10; i++) {
    if (i == 5) {
        continue; // skip the rest of the loop body when i is 5
    }
    console.log(`i: ${i}`); // op will be 0,1,2,3,4,6,7,8,9
};