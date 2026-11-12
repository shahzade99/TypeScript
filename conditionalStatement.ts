// IF conditional statement
let age:number = 29;
/*if(age>= 18)
{
    console.log("Eligible to vote");
}


// if else conditional statement
if(age<= 18)
{
    console.log("Eligible to vote");
} else
{
    console.log("Not eligible to vote");
}

// Nested if else conditional statement
if(age= 18)
{
    console.log("Eligible to vote");
} else if(age<= 21)
{
    console.log("Eligible to drink");
}else (age<= 25)
{
    console.log("Eligible to drive");
}

*/

let age:number = 29;
switch(age)
{
    case 18:
        console.log("Eligible to vote");
        break;

    case 21:
        console.log("Eligible to drink");
        break;

    case 25:
    console.log("Eligible to drive");
    break;
    
    default:
    console.log("Not eligible to vote, drink or drive");
}