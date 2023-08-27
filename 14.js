// JavaScript Program to Find the Sum of Natural Numbers :

function naturalnumbers(n){
    let sum = 0;
    for (let i=1;i<=n; i++){
        sum = sum + i;
    }
    console.log(sum);
}
naturalnumbers(25);