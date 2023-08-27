//  JavaScript Program to Calculate the Area of a Triangle :
// A = 1/2bh

let h = 23;
let b = 34;
let A = (b*h)/2
console.log(`Area of the triangle is : ${A}`)




let s1 = 12;
let s2 = 15;
let s3 = 13;
let s = (s1+s2+s3)/2
let area = (Math.sqrt(s*(s-s1)*(s-s2)*(s-s3)));
console.log(area);