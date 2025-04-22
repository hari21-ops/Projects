
const score = 100
//console.log(typeof score)

const scoreValue = 100.456
//console.log(typeof scoreValue)

const login = true
//console.log(typeof login)

const isLoggedIn = false
//console.log(typeof isLoggedIn)

const outsideTemp = null
//console.log(outsideTemp)
//console.log("Type of var outside temp declared as null:" , typeof outsideTemp)

const id = Symbol('123')
const anotherSymbol = Symbol('123')
//console.log(id === anotherSymbol)

/*--------------------------------------------------------------------------------------------------------------*/
/* MEMORY: - 
Stack (Primitive): one over another (stores numbers, booleans, ......)
Heap (Non-Primitive): reference variables, updating this will update original var too....
*/

let myName = "amay"
console.log(myName)
let anotherName = myName
console.log(anotherName)
anotherName = "ajay"
console.log(anotherName)

let userOne = {
    name: "ajay",
    email: "user@google.com"
}
console.log(userOne)

let userTwo = userOne
userTwo.name = "amay"
console.log(userOne)
console.log(userTwo)


