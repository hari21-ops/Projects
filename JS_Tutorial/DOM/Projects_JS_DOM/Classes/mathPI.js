const descriptor = Object.getOwnPropertyDescriptor(Math, "PI");
console.log(descriptor)

const chai = {
    name: "chai",
    price: 350,
    isAvailable: true
}

console.log(chai);
console.log(Object.getOwnPropertyDescriptor(chai, 'name'));

Object.defineProperty(chai, 'name', {
    writable: false,
    enumerable: false     
});

console.log(Object.getOwnPropertyDescriptor(chai, 'name'));

for (let [key, value] of Object.entries(chai)){
    if(typeof value !== 'function'){
        console.log(`${key} : ${value}`)
    }
}





