// simple interface
interface Person
{
    name:string;
    age:number;
}

let student: Person ={      // student is an object; Must need to initialize properties of interface if implemented.
    name:'Shahzad',
    age: 20
}


// accessing the elemetns

console.log(student.name)
console.log(student.age)


// Interface with peroprtis and methods
interface Book
{
    title:string;
    readonly isbn:string;


    display():void;
}


let myBook:Book = {
    title:"Wings on Fire",
    isbn:"12345-ABC",

    display()
    {
        console.log(`Title of the book ${myBook.title} and isbn is ${myBook.isbn}`)
    }
}



//access the method
myBook.display()

// chaning the values of variables dynamically
myBook.title = "The plane Story"
myBook.display()


// Interface Inheritance
interface Animal
{
    name:string;
}

interface Dog extends Animal
{
    color:string
}

// implementation

let myDog:Dog = {
    name:'Buddy',
    color:'Black'
}

console.log(`Dog name ${myDog.name} and color ${myDog.color}`)