
/*// named function
function addfun(a: number, b: number): number {   // if fn is returning something, then we must define the type of retun data.
    return a + b;
}

const result = addfun(5, 10);
console.log(`The result of adding 5 and 10 is: ${result}`);
*/


// named fn with rest parameters i.e multiple parameters of same type

function addMultiple(...nums: number[]) {
    let sum:number =0;
    let i;
    for (i=0; i<nums.length;i++)
    {
        sum = sum + nums[i];
        
    }
    console.log("sum of numbers -", sum)     
}

addMultiple(1, 2, 3, 4, 5); // returns 15
addMultiple(10, 20, 30); // returns 60
addMultiple(100, 200); // returns 300

// named function with mulitple parameter and different data types
function multiData(...elements: (number | string)[]):number
{
return elements.length
}

console.log(multiData(3, 'john', 'sham', 5, 6));


// named function with optional parameter
function optionalData(id:number, name:string, email?:string):void
{
    console.log(`${id} and ${name}`);
    if(email!==undefined)
    {
        console.log("email is", email);
    }
}

optionalData(1,'shahzad','abc@gmail.com')
optionalData(2,'moh');


// named function with default parameter
function defaultData(price:number, rate:number = 0.5):void
{
   let discount = price*rate;
   console.log("disocunted price", discount)
}

defaultData(500);