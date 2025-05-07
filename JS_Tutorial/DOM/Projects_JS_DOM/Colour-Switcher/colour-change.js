const buttonEl = document.querySelectorAll('.button');

const body = document.querySelector('body');

buttonEl.forEach( function(button) {
    //console.log(button);
    button.addEventListener('click', function(e) {
//       console.log(e);
//        console.log(e.target)
        const value = e.target.id;
            switch (value){
            case "yellow":
                body.style.backgroundColor = e.target.id;
            break;
            case "grey":
                body.style.backgroundColor = e.target.id;
            break;
            case "orange":
                body.style.backgroundColor = e.target.id;
            break;
            case "black":
                body.style.backgroundColor = e.target.id;
            break;
        }
    })
});


/*if(e.target.id == "yellow"){
            body.style.backgroundColor = e.target.id;
        }*/

//document.addEventListener("click", btnClick() );

//console.log(buttonEl)
