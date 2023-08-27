// JavaScript Program to Count the Number of Vowels in a String:

const a = "my favourite language is javascript.";

const b = a.matchAll("a");
const arr1 = Array.from(b);
const str1 = arr1.toString();
const array1= str1.split(",")
const count1= array1.length
console.log(array1);

const c = a.matchAll("e");
const arr2 = Array.from(c);
const str2 = arr2.toString();
const array2= str2.split(",")
const count2= array2.length
console.log(array2);

const d = a.matchAll("i");
const arr3 = Array.from(d);
const str3 = arr3.toString();
const array3= str3.split(",");
const count3= array3.length
console.log(array3);

const e = a.matchAll("o");
const arr4 = Array.from(e);
const str4 = arr4.toString();
const array4= str4.split(",");
const count4= array4.length
console.log(array4);

const f = a.matchAll("u");
const arr5 = Array.from(f);
const str5 = arr5.toString();
const array5= str5.split(",");
const count5= array5.length
console.log(array5);

console.log(count1+count2+count3+count4+count5);



let str="JavaScript Program to Count the Number of Vowels in a String";

let arr=str.split("");
let count=0;

for(let i=0;i<=arr.length;i++){
    if(arr[i]=="a" || arr[i]=="e" ||arr[i]=="i"|| arr[i]=="o" || arr[i]=="u"){
        count++;
    }

}
console.log(count);