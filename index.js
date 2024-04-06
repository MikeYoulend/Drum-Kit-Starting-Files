//detecting button press
//prende tutto ciò che ha come classe .drum
let numberOfDrumButtons = document.querySelectorAll(".drum").length;

//ciclo for per dare a tutti i .drum un eventlistener
//cliccando accade che viene controllato che il giusto tasto sia stato cliccato
//makeSound fa si che in base al tasto schiacciato venga emesso il suono giusto
for (let i = 0; i < numberOfDrumButtons; i++)

document.querySelectorAll(".drum")[i].addEventListener("click", function () {
   
   let buttonInnerHtml = this.innerHTML;

   makeSound(buttonInnerHtml);

   buttonAnimation(buttonInnerHtml);

});

//detecting keyboard press

document.addEventListener("keydown", function(event) {
    makeSound(event.key)

    buttonAnimation(event.key)
})

function makeSound(key){

    switch (key) {
        case "w":
            let tom1 = new Audio("sounds/tom-1.mp3")
            tom1.play();
            break;
       
        case "a":
            let tom2 = new Audio("sounds/tom-2.mp3")
            tom2.play();
            break;
        case "s":
            let tom3 = new Audio("sounds/tom-3.mp3")
            tom3.play();
            break;
        case "d":
            let tom4 = new Audio("sounds/tom-4.mp3")
            tom4.play();
            break;
        case "j":
            let kickBass = new Audio("sounds/kick-bass.mp3")
            kickBass.play();
            break;
        case "k":
            let snare = new Audio("sounds/crash.mp3")
            snare.play();
            break;
        case "l":
            let crash = new Audio("sounds/snare.mp3")
            crash.play();
            break;
        default: console.log(buttonInnerHtml);
       }
}

function buttonAnimation(currentKey){

    let activeButton = document.querySelector("." + currentKey);
  
    activeButton.classList.add("pressed")

    setTimeout(function(){
        activeButton.classList.remove("pressed");
    }, 100 )
}
