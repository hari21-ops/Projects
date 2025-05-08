const form = document.querySelector('form');

form.addEventListener('submit', function(e){
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const result = document.querySelector('.result');

    if(height === '' || height < 0 || isNaN(height)){
        result.innerHTML = "Please give a valid height !"
    }
    else if(weight === '' || weight < 0 || isNaN(weight)){
        result.innerHTML = "Please give a valid weight !"
    }
    else {
        const BMI = (weight/((height*height)/10000)).toFixed(2);
        // show result 
        result.innerHTML = `<span>${BMI}</span>`;
        if(BMI < 18.6){
            echo("You are under weight");
        }
        else if(BMI >= 18.6 && BMI <=24.9){
            alert("Congrats!  You are in normal range.");
        }
        else if(BMI > 24.9){
            alert("You are over weight");
        }
    
    }

});

/*
const wtEl = document.querySelector('.weight');
//console.log(wtEl);
const htEl = document.querySelector(".height");
const btnEl = document.querySelector(".calculate");


wtEl.addEventListener('click', function(e) {
//    console.log(e);
//    console.log("Clicked !");
    e.target.value = " ";
});

htEl.addEventListener('click', function(e) {
//    console.log(e);
//    console.log("Clicked !");
    e.target.value = " ";
//    console.log
});


btnEl.addEventListener("click", function(event) { 
        console.log(weight);
        console.log(height);
        const BMI = weight / (height * height);
        console.log(BMI);
//        alert ("Your BMI is: ", BMI);
});
*/




