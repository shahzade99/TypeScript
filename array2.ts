let arrays:string[] = ['a','b','c', 'd', 'e', 'f'];

// 1. forEach 
    // takes fn as parameter; executes a fn once for each array element
    // syntax: array.ForEach(function(currentValue, index, array) {} )  //index and array are optionals

arrays.forEach(function(x,index){
    console.log(`value at ${index} is ${x}`)
})


/*2. Arrow funciton
    - Similar to forEach, except removing function keyword
*/

arrays.forEach((z,i)=>{
    console.log(`value at ${i} is ${z}`)

})


/*3. map() funciton
    - creates a NEW ARRAY with the result of calling teh function on every element of array
    - It takes function as parameter
    - Returns the same number of elements that we have in original array
    syntax: array.map(function(currentValue, index, array){})   // index and array optional
*/

// get square of each number 1,2,3
let numbers:number[] = [1,2,3,4,5]
let newArray = numbers.map(function(element){
    return element*element;

})

console.log("squared numbers", newArray)

/* 4.  filter()
    - creates a NEW ARRAY that passes/satify the function
    - takes function as parameter
    - returns either same or reduced length
*/

let numbers1:number[] = [1,2,3,4,5,6]

let evenValue = numbers1.filter(function(value)
{
    if (value%2==0)
    {
        return value
    }
})

console.log("even number ", evenValue)