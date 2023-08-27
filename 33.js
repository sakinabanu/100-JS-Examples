//  JavaScript Program to Create Objects in Different Ways | using object literal, using new keyword, constructor
	

// Method 1 :
let bio={
    fName: "Sakina",
    lName: "Banu",
    age:22
}

console.log(bio);

//Method 2 :

let qualification = Object.create({
    college: "L.I.E.T",
    specialization: "CSE"
})


console.log(qualification.college);
console.log(qualification.specialization);

// Method 3 
let result = new Object({
    marks:7.8,
    yearpassed:2023,
    grade:"B"
})

console.log(result);