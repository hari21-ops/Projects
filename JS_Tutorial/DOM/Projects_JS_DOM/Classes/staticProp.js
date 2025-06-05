class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username is: ${this.username}`)
    }

    static createID(){
        return (Math.random() * 10);
    }

}

const hitesh = new User("tea");
console.log(tea.createID());

class Teacher extends User{
    constructor(username, email){
        super(username)
        this.email=email
    }
}

const phone = new Teacher("phone", "phone@example.com");
console.log(phone.logMe());
console.log(phone.createID());




