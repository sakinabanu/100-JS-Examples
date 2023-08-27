// JavaScript Program to Remove a Property from an Object | also adding a new property :

let data={
    ID: "SB101",
    FName: "Sakina",
    MName:"----",
    LName: "Banu",
    Age: "22",
    College: "LIET"
}
console.log(data);

delete data.College;
delete data.MName;

data.Area="Malakpet"
data.City="Hyderabad";

console.log(data);
