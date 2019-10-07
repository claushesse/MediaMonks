const leftButton = document.querySelector('#left-button-container');
const rightButton = document.querySelector('#right-button-container');
const background = document.querySelector('#background');
const buttonLeftContainer = document.querySelector('#left-button-container');
const buttonLeft = document.querySelector('#left-button');
const buttonRightContainer = document.querySelector('#right-button-container');
const buttonRight = document.querySelector('#right-button');
const message1 = document.querySelector('#message1');
const message2 = document.querySelector('#message2');
const initialText = document.querySelector('#initialText');
const positions = ["0%", "13%", "26%", "39%", "52%", "65%", "78%", "100%", "100%", "112%"];
let currentPosition = 0;

function checkPosition(){
    console.log(currentPosition);
    if (currentPosition <= 0){
        buttonLeftContainer.style.display = "none";
        buttonLeft.style.display = "none";
        message2.classList.add("hidden");
        message2.classList.remove("visible");
        message1.classList.remove("hidden");
        message1.classList.add("visible");
        initialText.classList.remove("hidden");
    }
    if (currentPosition != 0){
        buttonLeftContainer.style.display = "block";
        buttonLeft.style.display = "inline-block";
        initialText.classList.add("hidden");
    }
    if(currentPosition != 9){
        buttonRightContainer.style.display = "block";
        buttonRight.style.display = "inline-block";
    }
    if(currentPosition >= 9){
        buttonRightContainer.style.display = "none";
        buttonRight.style.display = "none";
    }
    if(currentPosition == 1){
        message2.classList.remove("hidden");
        message2.classList.add("visible");
        message1.classList.add("hidden");
        message1.classList.remove("visible");
    }
}

checkPosition();

rightButton.addEventListener('click', () => {
    currentPosition = currentPosition + 1; 
    if (currentPosition > 9){
        currentPosition = 9;
    }
    background.style.backgroundPosition = positions[currentPosition];
    checkPosition();
})

leftButton.addEventListener('click', () => {
    currentPosition = currentPosition - 1; 
    if (currentPosition < 0){
        currentPosition = 0;
    }
    background.style.backgroundPosition = positions[currentPosition];
    checkPosition();
})

