//this in global space
// global space: anything outside the function

// this keyword in global space represent the Global Object

// In Case of browsers, the Global Object is Window.
// In Case of Nodejs, the Global Object is global

"use strict";

console.log(this) // window


// this keyword works differently in strict mode and non strict mode
// by using "use strict" in top of the file, we can go for strict mode

function x(){
    console.log(this)  
    //the value of this inside the function depends on strict / non strict mode 
    //In non strict mode, the value will be window
    //In strict mode, the valuw will be undefined 
}
x()

//this in non-strict mode - (this substitution):

//If the value of this is undefined or null
//then this will be replaced with globalObject only in non strict mode.


// the value of this keyword depends on how the function is called :

// if the value is called without any reference then it is undefined

// x() ----undefined
// window.x() -----window



//this inside a Object:

//method:if you make a function as part of an object then it is known as method

let obj = {
    a: 10,
    x: function () {
        console.log(this)
    }
}

obj.x() //{a: 10, x: ƒ}

//here x is known as method
//here this refers to current object

//Call, apply, bind (sharing methods)

// const student = {
//     name:'pavan',
//     printName: function (){
//         console.log(this.name)
//     }
// }

// student.printName() //pavan
 


// const student2 = {
//     name:'kumar'
// }

// student.printName.call(student2) //kumar

//this can be modified using call,bind,apply methods


//this inside arrow function:

// arrow function doesnt have their own this binding
// they take the value of lexical context where they are enclosed
// lexical context: where the object lexically present in the code

const student = {
    name:'pavan',
    printName:  () => {
        console.log(this)
    }
}

student.printName() // window

//here the student object lexical context is global space
let obj2 = {
    a: 10,
    x: function () {
        const y = () => {
        console.log(this)
        }
        y()
    }
}

obj2.x()  //{a: 10, x: ƒ}

// {
//         const y = () => {
//         console.log(this)
//         }
//         y()
//     }

// this is the enclosing lexical context



//this inside DOM element: The value is reference to HTML element









