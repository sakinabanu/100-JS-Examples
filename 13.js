// JavaScript program to print the multiplication table :

import readline from "readline-sync" 
import cli from "cli-color"

let n =readline.question("Enter the number: ");
let color=cli.xterm(196).bgXterm(247)
function multiplicationTable(n){ 
    for (let i=1;i<=10;i++){ 
        console.log(color(`${n} X ${i} = ${n * i}`));
    }
}
multiplicationTable(n)


let m = readline.question("Enter the number: ");
let random = Math.floor(Math.random()*255)
let colors = cli.xterm(random)  
function randomvariable(n){ 
    for (let i=1;i<=10;i++){ 
        console.log(colors(`${m}  X  ${i}  =  ${n * i}`));
    }
}

randomvariable(n)