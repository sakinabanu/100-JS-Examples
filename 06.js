// Javascript Program to Solve Quadratic Equation :

let a = 6;
let b = 8;
let c = 2;

let discriminant = b * b -(4*a*c);
if(discriminant > 0){
    let r1 = (b-Math.sqrt(discriminant))/2*a
    let r2 = (b+Math.sqrt(discriminant))/2*a
    console.log("root 1 is : ", r1);
    console.log("root 2 is : ", r2);

}
else if(discriminant == 0){
    r1 = r2 = -b / (2 * a);
    console.log("roots of 1 and 2 are :", r1,r2);

}
else{
    let realPart = (-b / (2 * a)).toFixed(2);
    let imagPart = (Math.sqrt(-discriminant) / (2 * a)).toFixed(2);
    console.log(`The roots of quadratic equation are ${realPart} + ${imagPart}i and ${realPart} - ${imagPart}i`);
}