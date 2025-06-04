let myName = "vadapav"
//console.log(myName.length())

let myNewName = "vadapav     "
//console.log(myName.length())

let myHeroes = ['thor', 'ironMan']

let heroPower = {
    'thor': 'hammer',
    'ironMan': 'arc reactor',

    getThorPower:function(){
//        console.log(`Power is: ${this.thor}`)
    }
}

Object.prototype.hitesh = function(){
//    console.log(`Hitesh is present in all objects`);
}

//heroPower.hitesh()
//myHeroes.hitesh()

Array.prototype.heyHitesh = function(){
//    console.log("Hey, Hello !")
}

//myHeroes.heyHitesh()
//heroPower.heyHitesh()

// Inheritance 

const user = {
    name: 'chai',
}

const teacher = {
    makeVideo: true,
}

const teachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'js',
    fullTime: true,
    __proto__: teachingSupport
}

teacher.__proto__ = user

//Modern approach 
Object.setPrototypeOf(teacher, user);
Object.setPrototypeOf(teachingSupport, teacher);

let anotherUserName = "GulabJam  "
String.prototype.truelength = function(){
//    console.log(`${this}`)
//    console.log(`True length is: ${this.trim().length}`)
}

anotherUserName.truelength()
"vadapav".truelength()

// Trying a new array & functionality
// using objects, inheritance.....

const fruit = ['banana', 'watermelon', 'mango', 'apple']

const fruitColor = {
    'banana': 'yellow',
    'watermelon': 'green',
    'mango': 'yellow-green',
    'apple': 'red',

    getFruitColor:function(){
        console.log(`Water Melon colour is: ${this.watermelon}`)
    }
}

Array.prototype.fruitSeeds = function(){
    console.log(`Water Melon has lot of seeds.`);
}

fruit.fruitSeeds()
//fruitColor.fruitSeeds() // This will not have access to fruitSeeds function as it is array's prototype function.
                          // Though fruitColor is an object. 
fruitColor.getFruitColor()






