const btnEl = document.querySelector('.click')
const d = new Date();

setInterval(function(){
    let date = new Date();
    click.innerHTML = date.toLocaleTimeString();
}, 1000);


btnEl.addEventListener('click', function(e){
//    console.log("clicked !")
//    btnEl.innerHTML = d;
    btnEl.innerHTML = d.toLocaleTimeString();
})
