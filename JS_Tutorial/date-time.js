let myDate = new Date()
/*
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);
*/

let myCreateDate = new Date(2025, 3, 22)
//console.log(myCreateDate);
//console.log(myCreateDate.toLocaleString());
//console.log(myCreateDate.toLocaleDateString());

/*
let myTimeStamp = Date.now();
console.log(myTimeStamp);
console.log(Math.floor(Date.now()/1000));


let newDate = new Date();
console.log(newDate.getMonth());
console.log(newDate.getDate());
console.log(newDate.getUTCDay());
*/

/* 
---------------------------------------------------------------------------------------------------------
                                             ARRAYS 
--------------------------------------------------------------------------------------------------------
*/
/*
const myArray = [1, 2, 3, 4]
 console.log(myArray)
 console.log(myArray[1])

myArray.push(5, 6, 7, 8)
console.log(myArray);
myArray.pop()

myArray.unshift(8)

const myArray = [1, 2, 3, 4]

//myArray.shift()
//const newArray = myArray.join()
//console.log(myArray.includes(3));
//console.log(typeof myArray.includes(3));
//console.log(`newArray is:`, newArray); // converts to string using join & binds also. 


console.log(`OG myArray is:`, myArray);

console.log(`A. myArray is before slice:`, myArray);
const myn1 = myArray.slice(1, 3)
console.log(myn1);
console.log(`After slice myArray:`, myArray);

console.log(`B. myArray is before splice:`, myArray);
const myn2 = myArray.splice(1, 3)
console.log(myn2);
console.log(`After Splice myArray:`, myArray);
*/

const fast_food = ['vadapav', 'dabeli', 'sandwich']
const south_food = ['idli', 'dosa', 'medu wada']

//const push = fast_food.push(south_food)
//console.log(fast_food)

//const concatArray = fast_food.concat(south_food) //spread method is also used 
//console.log(concatArray)
//console.log(concatArray[1])

//const food_items = [...fast_food, ...south_food]
//console.log(food_items)

const anotherArray = [1, 2, 3, [4, 5, 6], 7, [8, 9, [10, 11]]]
//console.log(anotherArray);

//const usable_ana = anotherArray.flat(Infinity)
//console.log(usable_ana);

console.log(Array.isArray("Relic"))
console.log(Array.from("Relic"));









