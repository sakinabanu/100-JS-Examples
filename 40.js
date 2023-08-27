// JavaScript Program to Clone a JS Object :


const obj = {
    fname : "sakina",
    lname : "banu",
    age : 22
}
let newobj = {
    college: "L.I.E.T",
    specialization: "CSE",
    qualify: "BE"
}
console.log(Object.assign(obj, newobj));

