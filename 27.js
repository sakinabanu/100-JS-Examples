// JavaScript Program to Find Factorial of Number Using Recursion :

function factorial(x) {

    if (x == 0) {
        return 1;
    }

    else {
        return x * factorial(x - 1);
    }
}

import readline from "readline-sync" 

let number = readline.question("Enter the number: ");
const result = factorial(number);
    console.log(`The factorial of ${number} is : ${result}`);