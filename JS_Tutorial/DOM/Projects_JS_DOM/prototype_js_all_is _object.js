function multiByFive(num) {
    return num * 5;
}

//multiByFive(6);
/*
Prototype of object is NULL at the end 
multiByFive.power = 2
console.log(multiByFive(6));
console.log(multiByFive.power)
console.log(multiByFive.prototype)
*/

function createUser(userName, score){
    this.userName = userName
}

// So you can have your own prototypes declared 
// function can be object 
// arrays prototype have different properties like slice property and it is having function so...

createUser.prototype.increment = function() {
    this.score++;
}

createUser.prototype.printMe = function() {
    console.log(`Score is: ${this.score}`);
}

const chai = new createUser("chai", 45)
const tea = createUser("tea", 80)

chai.printMe()

/*
so fine below what happens in backend when new keyword is used: 

A new object is created: new keyword initiates creation of new JS object. 

A prototype is linked: The newly created object gets linked to the prototype property of construcotr function.
This means that it has access to properties and methods defined on constructor's prototype. 

The constructor is called: The constructor function is called with specified arguments and this is bound to newly created
object. If no explicit return value is specified from constructor. JS assumes this, the newly created object, to be
the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value 
(object, array, function, etc.) the newly created object is returned.

*/















