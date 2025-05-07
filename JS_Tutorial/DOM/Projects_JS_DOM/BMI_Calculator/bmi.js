const form = document.querySelector('form');

form.addEventListener('submit', function(e){
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const result = document.querySelector('.result');

    if(height === '' || height < 0 || isNaN(height)){
        result.innerHTML = "Please give a valid height !"
    }

});

/*
const wtEl = document.querySelector('.weight');
//console.log(wtEl);
const htEl = document.querySelector(".height");
const btnEl = document.querySelector(".calculate");

let weight = 0;
let height = 0;

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




