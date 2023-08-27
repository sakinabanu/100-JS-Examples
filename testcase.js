import readline from "readline-sync" 
import cli from "cli-color"


let m = readline.question("Enter the number: ");
let random = Math.floor(Math.random()*255)
let colors = cli.xterm(random)  
function randomvariable(n){ 
    for (let i=1;i<=10;i++){ 
        console.log(colors(`${m}  X  ${i}  =  ${n * i}`));
    }
}

randomvariable(n)

