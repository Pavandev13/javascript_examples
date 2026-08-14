// we can use 2 ways to currying a function.
// 1.bind function
// 2. closures

// By using Bind:

// let multiply = function (x,y) {
//     console.log(x * y);
// }

// let multiplyByTwo = multiply.bind(this,2)
// multiplyByTwo(2) //4

// let multiplyByThree = multiply.bind(this,2,3)
// multiplyByThree(4)  //6

// let multiplyByFour = multiply.bind(this)
// multiplyByFour(2,4)  //8

//By Using Closures:

let multiply = function (x) {
    return function (y) {
        console.log(x * y)
    }
}

let multiplyByTwo = multiply(2)
multiplyByTwo(2)   //4

//  Function Currying transforms a function with multiple arguments into a series of functions, each taking a single argument.



