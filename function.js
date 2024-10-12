// A function is a group of code that perform a particular type.
// funtions key words
// {} => is the function execution scope. This is wher all the codes are written
// to execute your function, type the function name 
// to see the result of our function, we console.log()


function myFunction(){
    const a = 10;
    const b = 5;

    const sum = a + b;
    console.log(sum)
}

myFunction()

// the above function without a return keyword is a void function.

// functions that return a value that could be used later is 

function sum2() {
    // const a = 10;
    // const b = 20;

    const sum = a + b;

    return sum;
}

sum1();
const result = sum2()
con




// How to make dynamic funtions:

function sum3(a, b) {
    const sum = a + b;

}





// Difference Between Method and Function
/*

methods: These are functions declared inside an object.

*/
////////////////////////////////////////////////////////////////////////
// Types of Funciton in Javascript:
/*
1. Arrow funtions
2. Ananymous Functions
3. function declaration and
4. Function Expression:
*/ 


/////////////////
// FUNCTION EXPRESSION: instead of giving a function a name, we now assign
//                      to a variable.

const multiply = function(a, b) {
    return a * b;
}

multiply(5, 6);

///////////////////////////////////////////////////////////
//  ARROW FUNCTIONS: is found more in newer code basis
// Arrow function has two syntaxes:
// 1. that returns the result immediately

const sub = (a, b) => a - b

// 2. that returns the result/value later:

const sub2 = (a, b) => {
    return a - b;
}

console.log(sub(50, 10));


//////////////////////////////////////////////////