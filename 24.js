// JavaScript Program to Shuffle Deck of Cards.
 
import cli from "cli-color"

let color1 = cli.xterm(18)
let color2 = cli.xterm(90)
let color3 = cli.xterm(1)
let color4 = cli.xterm(9)
let deck =(Math.random()* 52);
if (deck <= 13){
    console.log(color1(`spade: ${deck}`));
}
else if (deck <= 26 ){
    console.log(color2(`club: ${deck}`));
}
else if (deck <= 39 ){
    console.log(color3(`diamond: ${deck}`))
}
else{
    console.log(color4(`Heart: ${deck}`))
}

console.log(Math.floor(deck));