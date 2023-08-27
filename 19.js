//JavaScript Program to Make a Simple Calculator :

import readline from "readline-sync"
let operator=readline.question(" Enter Operator: ");

switch (operator) {
    case "+":
        let a=readline.questionInt(" Enter 1st Number : ")
        let b=readline.questionInt(" Enter 2nd Number : ")
        console.log(`Addition of ${a} and ${b} is ${a+b}`);
        break;

    case "-":
        let c=readline.questionInt(" Enter 1st Number : ")
        let d=readline.questionInt(" Enter 2nd Number : ")
        
        console.log(`Subraction of ${c} and ${d} is ${c-d}`);
        break;


    case "*":
        let e=readline.questionInt(" Enter 1st Number : ")
        let f=readline.questionInt(" Enter 2nd Number : ")
        
        console.log(`Multiplication of ${e} and ${f} is ${e*f}`);
        break;

    case "/":
        let g=readline.questionInt(" Enter 1st Number : ")
        let h=readline.questionInt(" Enter 2nd Number : ")
        
        console.log(`Division of ${g} and ${h} is ${g/h}`);
        break;

    case "**":
        let i=readline.questionInt(" Enter 1st Number : ")
        let j=readline.questionInt(" Enter 2nd Number : ")
        
        console.log(`Exponential value of ${i} power ${j} is ${i**j}`);
        break;

    case "%":
        let k=readline.questionInt(" Enter 1st Number : ")
        let l=readline.questionInt(" Enter 2nd Number : ")
        
        console.log(`Remainder of ${k} and ${l} is ${k%l}`);
        break;

    default:console.log("Invalid Data");
    
        break;
}