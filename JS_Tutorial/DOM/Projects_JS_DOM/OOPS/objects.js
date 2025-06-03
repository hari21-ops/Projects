const user = {
    username: "hari",
    age: 29,
    logInCount: 10,
    signedIn: 5,

    getUserDetails: function name(params) {
//        console.log("Got user details from DB. ")
        console.log(`Username: ${this.username}`)
        console.log(this)
    }
}


console.log(user.getUserDetails());
console.log(this)
//console.log(user.username)

//const promiseOne = new Promise()
//const date = new Date()
// new key word help in creating new Context to which we called constructor functions.

function user(username, logInCount, isLoggedIn){
    this.username = username;     //left is var : right is value 
    this.logInCount = logInCount;
    this.isLoggedIn = isLoggedIn;


    this.greeting = function(){
        console.log(`Welcome, ${this.username} !`)
    }

//    return this
}

//const userOne = user("hari", 12, true) 
//console.log(userOne)

//const userTwo = user("welcome", 11, false)
//console.log(userOne)

//************************** now let's try with new keyword *********************************//
const userOne = new user("hari", 12, true) 
console.log(userOne)
const userTwo = new user("welcome", 11, false)












