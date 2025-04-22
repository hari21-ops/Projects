/* 
String can be denoted using single or double quotes.

*/

const name = "john"
const repoNum = 20
//console.log(`Hello my name is: ${name} and my repo count is ${repoNum}`)

const gameName = String ("Clash Of Cans")
//console.log(gameName)
//console.log(typeof gameName)
//console.log(gameName.__proto__)

//console.log(gameName)
//console.log(`Removing extra spaces from string using trim():`, gameName.trim());
newString = gameName.slice(-8,21);
//console.log(newString);
// negative values can be provided in slice. 

const url = "https://www.google.com/uid%20/edit"
const replaceUrl = url.replace("%20", "")
console.log(replaceUrl);
includeValue = url.includes("google", 5)
console.log(includeValue);

// Split is another useful method of string
console.log(gameName.split(" "))
