const promiseOne = new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task is complete !");
        resolve()
    }, 1000)
})

promiseOne.then(function(){
    console.log("Promise exeuted.")
})

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2 !");
        resolve()
    }, 1000)
}).then(function(){
    console.log("Async task 2 resolved.");  
})

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "Baby", email: "baby@example.com"})
    }, 1000)
})

promiseThree.then(function(user){
    console.log(user)
})

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true                                //Change this value to understand difference
        if(!error){
            resolve({username: "jon", password: "123"})
        }
        else{
            reject("Error, Something went wrong!! ")
        }
    }, 1000)
})

//promiseFour.then().catch()

promiseFour.then((user) => {
    console.log(user)
    return user.username
}).then((username) => {
    console.log(username)
}).catch(function(error){
    console.log(error)
}).finally(() => { console.log("Finally, promise is resolved")})

/* incorrect way
const username = promiseFour.then((user) => {
    console.log(user)
    return user.username
})

console.log(username)
*/

const promiseFive = new Promise(function(resolve, reject) {
    setTimeout(function(){
        let error = true                                //Change this value to understand difference
        if(!error){
            resolve({username: "js", password: "23123"})
        }
        else{
            reject("Error, JS went wrong!! ")
        }
    }, 1000)
})

//async - await

async function consumePromiseFive(){
    try{
        const response = await promiseFive
        console.log(response)
    }
    catch(error){
        console.log(error)
    }
}

consumePromiseFive()

async function getAllUSers() {
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json()
        console.log(data)
    }
    catch(error){
        console.log("E: ", error)
    }
}

getAllUSers()


fetch('https://jsonplaceholder.typicode.com/users').then((response) => {
    return response.json()
})
.then((data) => { console.log(data); })
.catch((error) => { console.log(error); })


fetch('https://api.github.com/users/KRISHNASAFE')
.then((response) => { console.log(response) })
.then((data) => { console.log(data) })
.catch((error) => { console.log(error) })







