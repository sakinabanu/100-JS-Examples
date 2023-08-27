// JavaScript Program to Find ASCII Value of Character :

let alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let result = alpha.charCodeAt(25);
console.log(result); // 65


import readline from "readline-sync" 
import cli from "cli-color"
let a = readline.question("Enter Charactrer :");
let b = cli.xterm(90);
function value(a){
    console.log(b(a.charCodeAt()));
}
value(a)