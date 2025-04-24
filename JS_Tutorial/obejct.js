const mySym = Symbol("key1")

const jsUSer = {
    name: "Fredricks",
    "full name": "Fredricks Penisow",
    age: 28,
    location: "Udaipur",
    [mySym]: "myKey1"
}

jsUSer.location = "Navi Mumbai"

//console.log(jsUSer);
//console.log(jsUSer["full name"]);
//console.log(jsUSer[mySym])
//console.log(typeof jsUSer[mySym])
//console.log(jsUSer.location);

/*
Object Destructure & JSON 
*/
const course = {
    instructor: "JD",
    age: "29",
    courseName: "Starting with C++"
}

const {instructor} = course
console.log(instructor)
const {courseName: name} = course
console.log(name)






