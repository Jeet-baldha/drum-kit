var numberOfButton = document.querySelectorAll('.drum').length;

var ad = new Audio('sounds/tom-1.mp3');


for(var i = 0;i<numberOfButton;i++){

    document.addEventListener("keydown",function (e){
        
        var key = e.key;
        makeSound(key);
        buttonAnimation(key);
    });
    
    document.querySelectorAll('.drum')[i].addEventListener('click',function(){
        
        var button = this.innerHTML;
        makeSound(button);
        buttonAnimation(button);

    });

    
}


function makeSound(key){

    switch (key) {
        case "w": 
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();   
            break;
        
        case "a": 
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();   
            break;

        case "s": 
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();   
            break;
    
        case "d": 
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();   
            break;

        case "j": 
            var crash = new Audio("sounds/crash.mp3");
            crash.play();   
            break;
        
        case "k": 
            var kickBas = new Audio("sounds/kick-bass.mp3");
            kickBas.play();   
            break;
        
        case "l": 
            var snare = new Audio("sounds/snare.mp3");
            snare.play();   
            break;

        default:
            console.log(key);
            break;
    }

}


function buttonAnimation(key){

    var activeButton = document.querySelector('.'+key);
    activeButton.classList.add('pressed')

    setTimeout(function(){

        activeButton.classList.remove('pressed');

    }, 100)

}