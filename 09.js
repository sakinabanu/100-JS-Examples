// JavaScript Program to Find the Largest Among Three Numbers :

// 1. Method :

let s = 2;
let t = 4;
let u = 6;

if(s>t>u){
    console.log(`s = ${s} is greater`);
}
else if (t>u){
    console.log(`t = ${t} is greater`);
}
else {
    console.log(`u = ${u} is greater`);
}


let a = 337373;
let b = 348234;
let c = 394833;

if(a>b>c){
    console.log(`a = ${a} is greater`);
}
else if (b>c){
    console.log(`b = ${b} is greater`);
}
else {
    console.log(`c = ${c} is greater`);
}

// 2. Method :

function greatervalue(l,m,n){
    if(l>m>n){
        return`l = ${l} is greater`;
    }
    else if (m>n){
        return`m = ${m} is greater`;
    }
    else {
        return `n = ${n} is greater`;
    }
}
console.log(greatervalue(65,19,80));