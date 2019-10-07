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
const stepCounter = document.querySelector('#stepCounter');
const step = document.querySelector('#step');
const positions = ["0%", "13%", "26%", "39%", "52%", "65%", "78%", "100%", "100%", "112%"];
let currentPosition = 0;

function checkPosition(){
    //console.log("current position", currentPosition);
    if (currentPosition <= 0){
        buttonLeftContainer.style.display = "none";
        buttonLeft.style.display = "none";
        message2.classList.remove("visible");
        message2.classList.add("hidden");
        message1.classList.remove("hidden");
        message1.classList.add("visible");
        initialText.classList.remove("hidden");
        initialText.classList.add("visible");
        stepCounter.classList.remove("visible");
        stepCounter.classList.add("hidden");
    }

    if (currentPosition != 0){
        buttonLeftContainer.style.display = "block";
        buttonLeft.style.display = "inline-block";
        initialText.classList.add("hidden");
        initialText.classList.remove("visible");

        if(currentPosition != 9){
            buttonRightContainer.style.display = "block";
            buttonRight.style.display = "inline-block";
        }

        if(currentPosition >= 9){
            buttonRightContainer.style.display = "none";
            buttonRight.style.display = "none";
        }
        
        switch(currentPosition){
            case 1:
                message1.classList.remove("visible");
                message1.classList.add("hidden");
                stepCounter.classList.remove("visible");
                stepCounter.classList.add("hidden");
                setTimeout(() => { message2.classList.remove("hidden"); message2.classList.add("visible"); }, 1000);
                setTimeout(() => { stepCounter.classList.remove("hidden"); stepCounter.classList.add("visible"); }, 1000);
                step.innerHTML = "1";
                break;
            case 2:
                message2.classList.remove("visible");
                message2.classList.add("hidden");
                message1.classList.remove("visible");
                message1.classList.add("hidden");
                stepCounter.classList.remove("visible");
                stepCounter.classList.add("hidden");
                setTimeout(() => { stepCounter.classList.remove("hidden"); stepCounter.classList.add("visible"); }, 1000);
                step.innerHTML = "2";
                break;
            case 3:
                step.innerHTML = "3";
                stepCounter.classList.remove("visible");
                stepCounter.classList.add("hidden");
                setTimeout(() => { stepCounter.classList.remove("hidden"); stepCounter.classList.add("visible"); }, 1000);
                break;
            case 4:
                step.innerHTML = "4";
                break;
            case 5:
                step.innerHTML = "5";
                break;
            case 6:
                step.innerHTML = "6";
                break;    
            case 7:
                step.innerHTML = "7";
                stepCounter.classList.remove("visible");
                stepCounter.classList.add("hidden");
                stepCounter.classList.add("visible");
                break;
            case 8:
                step.innerHTML = "8";
                stepCounter.classList.remove("hidden");
                stepCounter.classList.add("visible");
                break;                   
            case 9:
                buttonRightContainer.style.display = "none";
                buttonRight.style.display = "none";
                stepCounter.classList.remove("visible");
                stepCounter.classList.add("hidden");
                break;               
            default: 
                console.log("NO SOY EL 1");
        }
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

