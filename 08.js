// Javascript Program to Check if a Number is Odd or Even :

// 1. Method :

let b = 234321;
if(b % 2 == 0){
    console.log(`It's even number : ${b}`);
}
else{
    console.log(`It's odd number : ${b}`);
}

// 2. Method :

function isoddoreven(s){
    if(s % 2 == 0){
       return `It's even number : ${s}`;
    }
    else{
        return`It's odd number : ${s}`;
    }
}
console.log(isoddoreven(43));
