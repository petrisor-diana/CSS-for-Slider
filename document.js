function log(x) {
    console.log(x);
}
var myBtn = document.getElementById('btnSlide');
var mySlider = document.getElementById('slider');

myBtn.addEventListener('click', change);

function change(){
    mySlider.classList.toggle('move');
    if(mySlider.classList.contains('move')){
    myBtn.innerHTML='Move right';
    } else 
    myBtn.innerHTML="Move left";
}