/*class Student {
    readonly studentId:number;
    name:string;
    email?:string;
    schoolName:string;

    constructor(sid:number,sname:string,sschool:string, semail?:string)
    {
        this.studentId = sid;
        this.name = sname;
        this.email = semail;
        this.schoolName = sschool;

    }

    displayData()
    {
        console.log(this.studentId);
        console.log(this.name);
        console.log(this.schoolName)

        if (this.email)
        {
            console.log(this.email)
        }else{
            console.log("email not provided")
        }
        
    }

}

let obj = new Student(121,'shahzad','Osmania');  // by creating obj, constructor will be automatically invoked
obj.displayData()

let obj1 = new Student(121,'shahzad','Osmania','abc@gmail.com');
obj1.displayData()

*/


// static variable and methods
class Student1 {
    readonly studentId:number;
    name:string;
    email?:string;
    static schoolName:string = 'MJ';

    constructor(sid:number,sname:string, semail?:string)
    {
        this.studentId = sid;
        this.name = sname;
        this.email = semail;

    }

    displayData()
    {
        console.log(this.studentId);
        console.log(this.name);
        console.log(Student1.schoolName);

        if (this.email)
        {
            console.log(this.email)
        }else{
            console.log("email not provided")
        }
        
    }

    static changeSchoolName(newName:string)
    {
        Student1.schoolName = newName;
    }

}

let obj2 = new Student1(121,'shahzad');  // by creating obj, constructor will be automatically invoked
let obj3 = new Student1(121,'shahzad','abc@gmail.com');

obj2.displayData()
obj3.displayData()

Student1.changeSchoolName("NewSchool")

// after changing school name
obj2.displayData()
obj3.displayData()




// Method & constructor overloading
class MethodOverload{
    
    //signature
    constructor();      //default constructor
    constructor(a:number, b:number);  // parametrized constructor


    // Implementation
    constructor(a?:number, b?:number)
    {
        if(a!==undefined && b!==undefined)
        {
            console.log(`Parametrized constructor called and sum of a and b is ${a+b}`)
        } else
        {
            console.log("Default constructor called");
        }
    }

}


// constructor gets invoked as soon as objects are created.
let obj4 = new MethodOverload() 
let obj5 = new MethodOverload(5,3);