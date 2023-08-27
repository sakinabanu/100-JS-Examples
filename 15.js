// JavaScript Program to Check Whether a String is Palindrome or Not :

import readline from "readline-sync" 
import cli from "cli-color"
let string = readline.question("Enter the number: ");
let color = cli.xterm(13).bgXterm(137)
function isPalindrome(string){
    let len = string.length;
    for(let i = 0; i < len / 2; i++){
        if(string[i] === string[len -1 -i]){
           return `${string} is a palindrome`;
        }
        else{
            return `${string} is not a palindrome`;
        }   
    }
}
console.log(color(isPalindrome(string)));



function Palindrome(string) {
    let len = string.length;
    for (let i = 0; i < len / 2; i++) {
        if (string[i] !== string[len -1 -i]) {
            return 'It is not a palindrome';
        }
    }
    return 'It is a palindrome';
}
console.log(Palindrome("madam"))