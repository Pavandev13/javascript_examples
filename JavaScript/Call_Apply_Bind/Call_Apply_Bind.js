//by using call method we can do function borrowing

// we can borrow funtions from other objects and use it in the data of other objects

// call method:

// let name = {
//     firstName:'pavan',
//     lastName:'kumar',
//     printFullName: function(){
//         console.log(this.firstName + " " + this.lastName)
//     }
// }

// name.printFullName() //pavan kumar

// const name2 = {
//     firstName:'rahul',
//     lastName:'dravid'
// }

// name.printFullName.call(name2) //rahul dravid



let name = {
    firstName:'pavan',
    lastName:'kumar',
}

const name2 = {
    firstName:'rahul',
    lastName:'dravid'
}

//  const printFullName =  function(){
//         console.log(this.firstName + " " + this.lastName)
//     }

    // printFullName.call(name); ////pavan kumar
    // printFullName.call(name2); //rahul dravid

    // how you will pass different parameters in this function is
    //the first parameter always will be reference to this variable 
    //and the later argument will be the argument to the function

     const printFullName =  function(city,state){
        console.log(this.firstName + " " + this.lastName + " from " + city + " " + state)
    }
    printFullName.call(name,'kadapa','proddatur') // pavan kumar from kadapa proddatur
        printFullName.call(name2,'hyderabad','telangana') //rahul dravid from hyderabad telangana

        // apply method:

        // The only difference between the call and apply method is the way we pass the arguments
        //Instead of passing the arguments individually in the call method
        //In apply method we pass the arguments in array list

            printFullName.apply(name,['kadapa','proddatur']) // pavan kumar from kadapa proddatur
        printFullName.apply(name2,['hyderabad','telangana']) //rahul dravid from hyderabad telangana

        //bind method

        // bind method exactly the same as call method but the difference instead of calling directly
        // it will create the copy of the method which can invoked later

         let result =    printFullName.bind(name,'kadapa','proddatur') // pavan kumar from kadapa proddatur
            result()