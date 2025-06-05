class User{
    constructor(username){
        this.username = username;
    }

    logMe(){
        console.log(`Username is: ${this.username}`);
    }
}

class Teacher extends User {
    constructor(username, email, password){
        super(username);
        this.email = email;
        this.password = password;
    }

    addCourse(){
        console.log(`A new course is added by ${this.username} and assigned to you.`)
    }
}

//object creation 

const chai = new Teacher("chai", "chai@example.com", "2378")
chai.addCourse();
chai.logMe();

const tea = new User('tea');
tea.addCourse(); // this access will not be there.
tea.logMe();

console.log(chai === tea);
console.log(chai === Teacher);
console.log(chai instanceof Teacher);
console.log(chai instanceof User)



