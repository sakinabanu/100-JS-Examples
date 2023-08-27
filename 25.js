// JavaScript Program to Find Sum of Natural Numbers Using Recursion :

import readline from "readline-sync" 
import cli from "cli-color"

let n = readline.question("Enter a number: ");
let color = cli.xterm(182)
let sum = 0
for(let i=1;i<=n;i++){
    sum = sum+i;
}
console.log(color("Sum of natural numbers is : " ,sum));
