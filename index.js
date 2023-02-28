
// rememeber to add a class to the q slector must put dot
// also when u use the below class it only selects the first drum i.e it works in a hierachy

// detecting button press-click
var numberOfdrumButtons= document.querySelectorAll(".drum").length;
    

for(var i =0; i<numberOfdrumButtons; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        

        var buttonInnerHTML = this.innerHTML;
        
        makeSound(buttonInnerHTML);
        animation(buttonInnerHTML);
        
  });
}
// detecting keyboard press

document.addEventListener("keydown", function(KeyboardEvent) {
    makeSound(KeyboardEvent.key);  
    // the output produced in KeyboardEvent.key is the one you'll press on your keyboard.
    // so the event.key sometimes can be same as innerHTML
    // remember the parameter you enter into the *creation of function is 
    // your wish. but later on in order to call certain function of js must use 
    // things like *.key
    animation(KeyboardEvent.key);
    
});


// the belew function is for both click and keyboard.
// remember you dont have to use the parameter as key1 insude  the function.can use any
    function makeSound(key1){
    
    switch (key1) {
        case "w":
            var crash = new Audio('sounds/crash.mp3');
            crash.play();
        break;

        case "a":
            var tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();
        break;

        case "s":

            var tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play();
        break;

        case "d":

            var tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();
        break;

        case "j":

            var tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play();
        break;

        case "k":

            var snare = new Audio('sounds/snare.mp3');
            snare.play();
        break;

        case "l":

            var kickBass = new Audio('sounds/kick-bass.mp3');
            kickBass.play();
        break;
            


    
        default:
            break;
    }
    }




function animation(currentKey){
    var change = document.querySelector("." + currentKey);
    change.classList.add("pressed");
    setTimeout(function(){ change.classList.remove("pressed"); 

    }, 100)
    

}

 


// var audio = new Audio('sounds/tom-1.mp3');
//         audio.play();