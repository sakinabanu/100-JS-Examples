// Javascript Program to Generate a Random Number :
 
let a = Math.random()

console.log(a);
console.log(Math.floor(a));
console.log(Math.ceil(a));

function random (a){
    return Math.floor(Math.random()*a)
}
console.log(random(5));

function random (a){
    return Math.ceil(Math.random()*a)
}
console.log(random(5));

let k = 4.5;
console.log(Math.ceil(k));
console.log(Math.round(5));