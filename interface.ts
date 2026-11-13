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