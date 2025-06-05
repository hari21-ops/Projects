// Classes in JS : available after ES6

class User{
    constructor(username, email, password){
        this.username = username
        this.email = email
        this.password = password
    }

    encryptPassword(){
        return `${this.password} ABC`
    }

    changeUserName(){
        return `${this.username.toUpperCase()}`
    }
}

const chai = new User("chai", "chai@example.com", "1234") 
console.log(chai)
console.log(chai.encryptPassword());
console.log(chai.changeUserName());

// Behind the scene: -
function User(username, email, password){
    this.username = username
    this.email = email
    this.password = password
}

User.prototype.encryptPassword = function(){
    console.log(`${this.password}abc`);
}

const tea = new User("tea", "tea@example.com", "4567")

console.log(tea.encryptPassword());
console.log(tea);










