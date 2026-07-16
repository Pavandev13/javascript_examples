var n = 2;
function square(num){
var val = num * num;
return val
}
const square2 =  square(n)
const square4 = sqaure(4)
console.log(square2)


// memory                                      code
// n: undefined-----2                     
// square():  {...fn sqaure} 


// sqaure2:undefined---4                      Here we have function invocation (square2)
// square4:undefined---16                   memory                     code
//                                        num: undefined---2
//                                        val:undefined---4

//                                        Here we have function invocation (square4)
//                                           num: undefined---4
//                                        val:undefined---16

// In the first phase, the javascript skims through the whole program line and line and it allocates memory to all variables and functions.
// for variables spacial value is undefined
// for funtions value is entire function.
// after memory allocation now second phase is code execution where js runs once again js program line by line.
// whenever a new function is invoked. A new Execution context is created.
// here n is argument.num is parameter.
//return keyword states that now return the control of the program to the place where the function was invoked.
//when the whole function is executed is that, the whole execution context for the instance of the function is deleted.
//when the program is finished the whole execution context also deletes


//whenever any js program is run, the callstack is populated with global execution context
//Callstack is a stack
//everytime in the bottom of the stack we have global execution context
//whenever a new execution context is created it is put into the stack. whenever a new execution context is deleted it is moved out of the stack.
//after everything is finished the GEC is moved out of the callstack
//Callstack maintains the order of execution of execution context.



E1
GEC

E2
GEC

GEC

