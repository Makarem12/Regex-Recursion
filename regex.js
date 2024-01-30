'use strict';



/* Write a function that take a string and return true if the string only contain uppercase and lowercase
characters (no numbers and symbols) and it should end with capital A else return false */


function capitalA(s){
    const regex = /^[a-zA-Z\s]*A$/; 

    
    return regex.test(s);
    
}
console.log(capitalA("Makarem A"))
console.log(capitalA("Makarem"))

/* Write a function that take a string and return true if the the string is following the emails pattern
which end with io (example@example.io) */

function ioEmail(email){
    const regex1=/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.io)*$/gm
    return regex1.test(email);
    }
    console.log(ioEmail("example@example.io"))
    console.log(ioEmail("example@example.iop"))