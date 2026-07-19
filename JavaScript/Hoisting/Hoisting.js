//Hoisting is a phenomenon in JS by which we can access the variables and functions even before we intialized it.
getName();

console.log(x)



function getName(){
    console.log('Namaste Javascript')
}

let x = 5;

//Namaste Javascript
//undefined


getName();

console.log(x)



function getName(){
    console.log('Namaste Javascript')
}

//Namaste Javascript
//x is not defined

console.log(getName)
var getName = () => {
    console.log('JS')
}

//undefined

// but here getName is taken as another variable. so the memory for the placeholder of variable is undefined


var getName2 =  function (){

}

//here getName2 is treated as another variable

