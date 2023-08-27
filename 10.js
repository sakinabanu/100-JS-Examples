// JavaScript Program to Check Prime Number :

// 1. Method :

function isPrime(n){
    if (n == 1) {
        return `${n} is niether prime & nor composite number.`;
    }
    if (n % 2 == 0 || n % 3 == 0 || n % 5 == 0 || n % 7 == 0 ){
        if(n / 2 == 1 || n / 3 == 1 || n / 5 == 1 || n / 7 == 1 ){
            return `${n} is not a prime number.`;
        }
        return`${n} is not a prime number.`;
    }
    else {
        return `${n} is a prime number.`;

    }
}
console.log(isPrime(101));

// 2. Method :

function isPrime(n) {
    if (n <= 1) {
        return false;
    }
    if (n <= 3) {
        return true;
    }
    if (n % 2 === 0 || n % 3 === 0) {
        return false;
    }
    for (let i = 5; i * i <= n; i = i + 6) {
        if (n % i === 0 || n % (i + 2) === 0) {
            return false;
        }
    }
    return true;
}
console.log(isPrime(59));

// 3. Method :

function prime(n){
if(n===1){
    return `Neither prime nor composite`
}
else if(n>1){
    for(i=2;i<n;i++){
        if(n%i==0){
            prime = false; break;     
        }
    }
    if(prime){return `prime number`}
    else {return `not a prime number`}
}
else {return 'not a prime'}
}
console.log(prime(19));