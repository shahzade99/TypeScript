function student(id:number,name:string,degree:string,university:any)    //university of type any is being used as call back fn
{
    console.log("student id is", id)
    console.log("student name is", name)
    console.log("Degree is", degree)

    university("OU");                         // invoking university fn as call back and passing value to x
}


function university(x:any)
{
    console.log("University is",x);
}



student(1, 'shahzad','BE',university)

/*
    1. student fn will get invoked and first 3 parameters will get executed as normal
    2. university argument will get passed to student parameters whihc is of university:any
    3. university:any will be mapped to invoke university(OU) as defined in the student fn bocy
    4. OU param will be fed to university fn and will execute the code within university fn
*/




// simple example call 

function sum(a:number, b:number, callback:any)
{
    let res = a+b;

    callback(res);

}

function displayTotal(x:any)
{
    console.log("total is", x)
}


sum(3,5,displayTotal)

//displayTotal invoked => callback:any => callback(res) => dsiplayTotal(x:any)



// function overloading

// 1. fuction signature
function overloadedSum(nums:number):any
function overloadedSum(nums:string): any

// 2. Implementation
function overloadedSum(nums:(number | string)):any
{
    if (typeof nums ==="number")
    {
        console.log("Passed value  is number ", nums)
    }else if (typeof nums === "string")
    {
        console.log("Passed value is string ", nums)
    }else{
        console.log ("something else")
    }
}


// 3. Invoking
overloadedSum(3);
overloadedSum('sam')
overloadedSum('abc123')
