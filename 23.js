// JavaScript Program to Guess a Random Number :

import readline from "readline-sync"

function random(n){
    let Number=readline.question("Enter guessed number:")
   
        if(n > Number){
        console.log(`${n} != ${Number} : You have guessed lower number!`);
        }
        else if(n < Number){
        console.log(`${n} != ${Number} : You have guessed higher number!`);
        }
        else {
        console.log(`${n} == ${Number} : You have guessed a correct number!`);
        }
    }
random(15);