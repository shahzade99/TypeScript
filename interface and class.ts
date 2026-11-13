interface Animals
{
    name:string

    sound(): void
    
}


class Dogs implements Animals
{
    name:string;         // abstract prop from interface

    constructor(dname:string) // initialize the prop
    {
        this.name = dname;
    }

    sound(): void {                 // abstract method from interface
        console.log("dog barks")
    }
}


let dg = new Dogs("Fluffy");  // by default constructor will be invoked
dg.sound()