// JavaScript Program to Convert Decimal to Binary :

let binary = [1,0,0,1,1,0]
let power = [2**5,2**4,2**3,2**2,2**1,2**0]
console.log(binary.reduce(function (r,a,i){return r+a*power[i]},0));



       

    