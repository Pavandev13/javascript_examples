// var x = 1;
// a();
// b();
// console.log(x);

// function a(){
//     var x = 10;
//     console.log(x)
// }

// function b(){
//     var x = 100;
//     console.log(x)
// }


//10
//100
//1

//shortest Program in JS is an empty file.
//If we debug the empty file, browsers make execution context and global space along with window object
//global space: anything is not in a function.


var a = 10;
function b(){
    var x = 20;
}

console.log(window.a)

//variables present in a global space can be accessed by using a window object(window.a)
//in global space, this === window 
