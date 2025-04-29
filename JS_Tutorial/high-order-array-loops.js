const myArray = [1, 2, 3, 4, 5]

for(const num of myArray){
//    console.log(num)
}

const greetings = "Hello World !"
for(const greet of greetings){
//    console.log(greet)
}

// Maps : Used for uniqye values 

const map = new Map()

map.set("IN", "INDIA")
map.set("Fr", "France")
map.set("USA", "United States of America")

//console.log(map)

for(const [key, values] of map){
//    console.log(key, ":-", values)
}

// Maps can iterated above way not objects.

const games = {
    game1: "NFS",
    game2: "COC",
    game3: "CS"
}

for(const key in games){
//    console.log(games[key])
}

oneArray = [1, 2, 3, 4, 5]

for(const key in oneArray){
//   console.log(oneArray[key]);
}

const programming = ["JS", "CPP", "RUBY", "PYTHON"]

programming.forEach( function (item) {
//    console.log(item)
} )

function printMe(item){
    console.log(item);
}

//programming.forEach(printMe)

programming.forEach( (item, index, arr) => {
//    console.log(item, index, arr)
})








