function scopecheck(){

    if(true)
    {
        var num1= 10;
        let num2 = 20;
        const num3 = 30;
        console.log("Inside if block var", num1);
        console.log("Inside if block let", num2);
        console.log("Inside if block const", num3);
    }

    console.log("Outside if block var", num1);  // accessible because var is function scoped
    //console.log("Outside if block let", num2);    // non accessible because let is block scoped
    //console.log("Outside if block const", num3);  // non accessible because const is block scoped
}

scopecheck();