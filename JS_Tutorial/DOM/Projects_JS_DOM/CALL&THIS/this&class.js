function setUserName(username){
    // complex db calls
    this.username = this.username
}

function createUser(username, email, pwd){
//    setUserName(username) // setusername is getting called by this but for temporary purpose. as referenc is not getting hold. 
    //this.username = username
    setUserName.call(this, username) // using this will allow to hold value and return username here. so giving this 
    this.email = email
    this.pwd = pwd
}

const chai = new createUser("chai", "chai@example.com", "1234")
console.log(chai)


