// JavaScript Program to Find LCM :

import readline from "readline-sync" 
let m = readline.question("Enter 1st number : ");
let n = readline.question("Enter 2nd number : ");
let hcf = 0
for (let i = 1; i <= m && i <= n; i++) {
        if( m % i == 0 && n % i == 0) {
            hcf = i;
        }
    }
let lcm = (m * n) / hcf;
console.log(`LCM of ${m} and ${n} is ${lcm}.`);
