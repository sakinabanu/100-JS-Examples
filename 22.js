// 22. JavaScript Program to Find the Factors of a Number.

import readline from "readline-sync" 

let n = readline.question("Enter a number: ");
function factors(n){
    for(let i=1;i<=n;i++){
        if(n%i==0){
            console.log(i);
            
        }
    }
}
factors(n)