// JavaScript program to generate Fibonacci Series Up to n Terms | Fibonacci Sequence Up to a Certain Number.

function Fibonacci(n){
    if(n==0){
        return 0;
    }
    if(n==1){
        return 1;
    }
    
    return Fibonacci(n-2)+Fibonacci(n-1)
}    

console.log(Fibonacci(5));