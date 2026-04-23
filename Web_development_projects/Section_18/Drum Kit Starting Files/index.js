// First we need to select the button inside the HTML code and then add Event listener.

// document.querySelector("button").addEventListener("click", handleCLick);
//     // The addEventListener() method of the EventTarget interface sets up a function that will be called whenever 
//     // the specified event is delivered to the target.

//     function handleCLick(){
//         alert("I got clicked!");
//     }


// document.querySelector("button").addEventListener("click", handleClick);

// function handleClick(){
//     alert("I got clicked!");
// }

// adding EventListener to every buttons in the .drum class.
var numberOfDrumButtons = document.querySelectorAll(".drum").length;

//Detecting Button Press
for(var i = 0; i < numberOfDrumButtons; i++){
    
    document.querySelectorAll(".drum")[i].addEventListener("click", handleClick);

    function handleClick(){
        var buttonInnerHTML = this.innerHTML;


        makeSound(buttonInnerHTML);

        buttonAnimation(buttonInnerHTML);
        // switch(buttonInnerHTML){
        //     case "w":
        //         var tom1 = new Audio("sounds/tom-1.mp3");
        //         tom1.play();
        //         break;
        //     case "a":
        //         var tom2 = new Audio("sounds/tom-2.mp3");
        //         tom2.play();
        //         break;
        //     case "s":
        //         var tom3 = new Audio("sounds/tom-3.mp3");
        //         tom3.play();
        //         break;
        //     case "d":
        //         var tom4 = new Audio("sounds/tom-4.mp3");
        //         tom4.play();
        //         break;
        //     case "j":
        //         var snare = new Audio("sounds/snare.mp3");
        //         snare.play();
        //         break;
        //     case "k":
        //         var crash = new Audio("sounds/crash.mp3");
        //         crash.play();
        //         break;
        //     case "l":
        //         var kick = new Audio("sounds/kick-bass.mp3");
        //         kick.play();
        //         break;

        //     default : console.log(buttonInnerHTML);
        // }
    }
}

//detecting keyboard Press
document.addEventListener("keypress", function(event){
    
    makeSound(event.key);

    buttonAnimation(event.key);
});

// document.addEventListener("keypress", function(event){
//     console.log(event);
//    // alert("This is a log");

// });

function makeSound(key){


     switch(key){
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
                var snare = new Audio("sounds/snare.mp3");
                snare.play();
                break;
            case "k":
                var crash = new Audio("sounds/crash.mp3");
                crash.play();
                break;
            case "l":
                var kick = new Audio("sounds/kick-bass.mp3");
                kick.play();
                break;

            default : console.log(buttonInnerHTML);
        }
}

function buttonAnimation(currentKey){
   var activeButton = document.querySelector("." + currentKey);
   activeButton.classList.add("pressed");

    setTimeout(function(){
        activeButton.classList.remove("pressed");
    }, 100);

}




// Now we are going to use switch instead of If/Else statments.


// var numberOfDrumButtons = document.querySelectorAll(".drum").length;

// for(var i = 0; i < numberOfDrumButtons; i++){

//     document.querySelectorAll(".drum")[i].addEventListener("click", handleClick);
//     function handleClick(){
//         var buttonInnerHTML = this.innerHTML;

//         switch(buttonInnerHTML){
//             case "w":
//                 var audio = new Audio('audio_file.mp3');
//                 audio.play();
//                 break;
//             case "a":
                
//         }
            
//     }

// }



























