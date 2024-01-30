/* Write a function to do the division operation without using the built-in division*/

function division(number, dividedBy, counter=0 ) {
    if (dividedBy === 0) {
        console.log("Can not divide by zero");
    }
    if (number < dividedBy) {
        return counter;
    }
    return division(number - dividedBy, dividedBy, counter + 1);
    
}
console.log(division(10,2))

/* Write a function that implement Math.pow(x,n) but using recursion
Example:
pow(2,4) = 16
*/


function pow(x, n) {
    if (n === 0) {
        return 1;
    } else if (n < 0) {
        return 1 / pow(x, -n);
    } else {
        return x * pow(x, n - 1);
    }
} console.log(pow(2, 4))

/* The Fibonacci Series is a numeric series starting with the integers 0 and 1. In this series,
the next integer is determined by summing the previous two. This gives us:

0, 1, 1, 2, 3, 5, 8, 13, ...

Write a function that take n as parameter and return the nth element in the Fibonacci Series

Example: n = 4 ==> 3, n= 0 ==> 0, n = 3 ==> 2 */

function fibonacci(n) {
    if (n <= 1) {
        return n;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
    
}
console.log(fibonacci(13))