/*
Control Flow in JS 


const temperature = 72
if (temperature === 41){
    console.log(`Temperature is ${temperature}`);
}
else if (temperature > 60){
    console.log(`Temperature is ${temperature} so hottt!!`);
}
else{
    console.log("Temperature is less than 40");
    
}


if (200 == "200"){
    console.log("Numbers are Equal"); //not strict checking 
}

if (200 === "200"){
    console.log("Numbers are Equal"); //strict checking, check whether both are numbers.
}

const test = 70

if (test > 80) console.log("Distinction") , console.log("Passed");


const isUserLoggedIn = false
const debitCard = true

if(isUserLoggedIn && debitCard){
    console.log("Allow to buy");
}
else if(!isUserLoggedIn && debitCard){
    console.log("Please log in first to continue");
}

*/
const month = "Jan" 

switch(month){
    case "Jan":
        console.log("Jan");
        break;
    case "Feb":
        console.log("Feb");
        break;
    default:
        console.log("Default case matched");
        break;
}


/*
Falsy Values: 
False 
0 , -0
bigint 0n 
""
null , undefined, NaN
Except this are all truthy values
*/








