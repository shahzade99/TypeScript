class Car{
    // properties of Car class
    name:string;
    color:string;
    model:string;
    

    // Constructor to initialize above properties

    constructor(cname:string, ccolor:string,cmodel:string)
    {
        this.name = cname;
        this.color = ccolor;
        this. model = cmodel;
    }

    start()
    {
        console.log("Parent car started")
    }

    stop()
    {
    console.log("Parent car stopped")
    }

    displayInformation()
    {
        console.log(`Parent car name = ${this.name} and color = ${this.color} and model = ${this.model}`);
    }


}

// child1
class Toyota extends Car
{
    // Toyota class aka child1 class specific property
    year:number

    // Since we extended parent class and we also need to initialize child class, we have to cobine the constructor to accomodate both
    constructor(cname:string, ccolor:string,cmodel:string,tyear:number)
    {
        super(cname,ccolor,cmodel);  // invoking parent constructor thourgh super keyword
        this.year = tyear;           // initializing child specific properteis as regular
    }

    start()
    {
        console.log("Toyota/Child1 class car started")
    }

    ManufacturedYear()
    {
        console.log(` Toyota Child class YOM ${this.name} - ${this.color} - ${this.model} - ${this.year}`)
    }
}


// child2
class Honda extends Car
{
    // Honda class aka child2 class specific property
    year:number

    // Since we extended parent class and we also need to initialize child class, we have to cobine the constructor to accomodate both
    constructor(cname:string, ccolor:string,cmodel:string,hyear:number)
    {
        super(cname,ccolor,cmodel);  // invoking parent constructor thourgh super keyword
        this.year = hyear;           // initializing child specific properteis as regular
    }

    start()
    {
        console.log("Honda/Child2 class car started")
    }

    ManufacturedYear()
    {
        console.log(` Honda Child class YOM ${this.name} - ${this.color} - ${this.model} - ${this.year}`)
    }
}


// Create Toyota Object

let toyota = new Toyota("Toyota","Red", "Sienna",2017)
toyota.start()                  // Toyota/Child1 class car started since child class overrided the parent class and it is latest
toyota.displayInformation()    //Parent car name = Toyota and color = Red and model = Sienna
toyota.stop()                  //Parent car stopped since only parent has this method
toyota.ManufacturedYear()     // Toyota Child class YOM Toyota - Red - Sienna - 2017


// Create Honda Object
let honda = new Honda("Honda","Blue", "Odyssey",2022)
honda.start()                  // Honda/Child2 class car started
honda.displayInformation()    //Parent car name = Honda and color = Blue and model = Odyssey
honda.stop()                  //Parent car stopped
honda.ManufacturedYear()     //  Honda Child class YOM Honda - Blue - Odyssey - 2022


// Car class reference with child class object
// this approach is rate but when you want to access parent & child class properties and methods.

let car:Car = new Toyota("Toyota","Red", "Sienna",2017)      // toyota class object is pointing to car Class reference
car.displayInformation()   // only parent have this method hence results from parents as ref is also from parents
car.start()                // latest method is in child although ref is from parents

// car.manufactureyear()    // Error since manufactureYear method is not available in parents and only in child



// super and super()
class Parent{
    num:number = 10;

    constructor()
    {
        console.log("Parent class constructor called");
    }

    display()
    {
        console.log("Display method from Parent Class")
    }
}


class Child extends Parent
{
    num:number=20   // overriding variables of parent class

    constructor()
    {
        super()   // parents class constructor initialization is MUST
        console.log("Child class constructor is called")
    }

    show()
    {
        //console.log(super.num)   // TS doesn't support invoking parents varibles using Super keryword
        console.log(this.num)   // should print child num variable
        console.log("Child Show method called")
    }

    display()
    {
        super.display()  // parents class display is invoked
        console.log("child class display is called")
    }
}

let c1 = new Child()      // both parents and child class constructor will be called
c1.display()    // both display method will be called bcse of super()