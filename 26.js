// JavaScript Program to Display Fibonacci Sequence Using Recursion :

import readline from "readline-sync" 
import cli from "cli-color"

let number = readline.question("Enter a number: ");
let color1 = cli.xterm(91)
let color2 = cli.xterm(182)
let n1 = 0;
let n2 = 1;
console.log(color1('Fibonacci Series:'));
console.log(color2(n1));
console.log(color2(n2));
let nextTerm =  n1 + n2;

while (nextTerm <= number) {

    // print the next term
    console.log(color2(nextTerm));

    n1 = n2;
    n2 = nextTerm;
    nextTerm = n1 + n2;
}