// JavaScript Program to Find HCF | using for Loop, using while Loop and if...else :

import readline from "readline-sync" 
let m = readline.question("Enter 1st number : ");
let n = readline.question("Enter 2nd number : ");
// let min = console.log(Math.min(m,n));
function hcf(m,n){ 
    while (m!=n){
        if (m>n){
            m = m-n ;
        }
        else{
            n = n-m;
        }
    return (m,n);
    }
}

console.log(`HCF of ${m} & ${n} is :`, hcf(m,n));
