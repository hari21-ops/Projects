/*
class User{
    constructor(email, password){
        this.email = email
        this.password = password
    }
    //To have fine grained ctrl over some var/objects like above pwd we use getters and setters
    //they help to control password from being accessing
    get password(){
        return this.password.toUpperCase();
    }
    //we can not just use get, we have to use set also.
    set password(value){
        this.password = value
    }
    //run after this may get error like max call stack size exceeded as constructor & setter are setting value.. 
}

const chai = new User("chai@example.com", '1223')
console.log(chai.password)

*/

class User{
    constructor(email, password){
        this.email = email
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()
    }

    set email(value){
        return this._email
    }
    //To have fine grained ctrl over some var/objects like above pwd we use getters and setters
    //they help to control password from being accessing
    get password(){
        return `${this._password}hitesh`
        //return this._password.toUpperCase();
    }
    //we can not just use get, we have to use set also.
    set password(value){
        this._password = value
    }
}

const chai = new User("chai@example.com", '1223')
console.log(chai.password)
console.log(chai.email)

// we can do this using function & object.

// Using Function

function User(email, password){
    this._email = email
    this._password = password

    Object.defineProperty(this, 'email',{
        get : function(){
            this._email.toUpperCase();
        },
        set: function(value){
            this._email = value
        }
    })
}

const tea = new User("chai@tea.com", '1234')

//Using Object

const user = {
    _email : "chai@chai.com",
    _password : "123",
    
    get email(){
        return this._email.toUpperCase();
    },
    
    set email(value){
        return this._email = value
    }
}

const tea1 = Object.create(user);
console.log(tea1.email);


