// JavaScript Program to Check the Number of Occurrences of a Character in the String :

const sentence = "I am learning Java from Hyderabad , I am a mediate at Javascript & I know that Java & Javascript are totally opposite."
const a = "a"
const c = 0
const result=sentence.matchAll(a);
const arr = Array.from(result);
console.log(arr);
console.log(arr.toString());
const str = arr.toString();

