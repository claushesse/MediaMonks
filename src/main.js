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
    /*if (currentPosition = 0){
        buttonLeftContainer.classList.remove("visible");
        buttonLeft.classList.add("hidden");
        message2.classList.remove("visible");
        message2.classList.add("hidden");
        stepCounter.classList.remove("visible");
        stepCounter.classList.add("hidden");
        buttonLeft.classList.add("hidden");            
        buttonLeftContainer.classList.add("hidden");
        setTimeout(() => { initialText.classList.remove("hidden"); initialText.classList.add("visible"); }, 1000);
        setTimeout(() => { message1.classList.remove("hidden"); message1.classList.add("visible"); step.innerHTML = "1";}, 1000);
    }*/
    if(currentPosition != 0){
        initialText.classList.add("hidden");
        initialText.classList.remove("visible");
        //console.log(buttonLeftContainer.classList);
        for(var i = 0; i < buttonLeftContainer.classList.length; i++){
            var leftButtonClass = buttonLeftContainer.classList[i];
            if(leftButtonClass == "hidden"){
                console.log(leftButtonClass);
                setTimeout(() => { buttonLeftContainer.classList.remove("hidden"); buttonLeftContainer.classList.add("visible");}, 1000);
            }
        }
    }

    if(currentPosition != 9){
        buttonRightContainer.classList.remove("hidden");
        buttonRight.classList.remove("hidden");
        buttonRightContainer.classList.add("visible");
        buttonRight.classList.add("visible");
    }
    
    switch(currentPosition){
        case 0:
            buttonLeftContainer.classList.remove("visible");
            buttonLeft.classList.add("hidden");
            message2.classList.remove("visible");
            message2.classList.add("hidden");
            stepCounter.classList.remove("visible");
            stepCounter.classList.add("hidden");
            buttonLeft.classList.remove("visible"); 
            buttonLeftContainer.classList.remove("visible"); 
            buttonLeft.classList.add("hidden");            
            buttonLeftContainer.classList.add("hidden");
            setTimeout(() => { initialText.classList.remove("hidden"); initialText.classList.add("visible"); }, 1000);
            setTimeout(() => { message1.classList.remove("hidden"); message1.classList.add("visible"); step.innerHTML = "1";}, 1000);
            break;
        case 1:
            message1.classList.remove("visible");
            message1.classList.add("hidden");
            stepCounter.classList.remove("visible");
            stepCounter.classList.add("hidden");
            setTimeout(() => { message2.classList.remove("hidden"); message2.classList.add("visible"); }, 1000);
            setTimeout(() => { stepCounter.classList.remove("hidden"); stepCounter.classList.add("visible"); step.innerHTML = "1";}, 1000);
            break;
        case 2:
            message2.classList.remove("visible");
            message2.classList.add("hidden");
            message1.classList.remove("visible");
            message1.classList.add("hidden");
            stepCounter.classList.remove("visible");
            stepCounter.classList.add("hidden");
            setTimeout(() => { stepCounter.classList.remove("hidden"); stepCounter.classList.add("visible"); step.innerHTML = "2";}, 1000);
            break;
        case 3:
            stepCounter.classList.remove("visible");
            stepCounter.classList.add("hidden");
            setTimeout(() => { stepCounter.classList.remove("hidden"); stepCounter.classList.add("visible"); step.innerHTML = "3"; }, 1000);
            break;
        case 4:
            stepCounter.classList.remove("visible");
            stepCounter.classList.add("hidden");
            setTimeout(() => { stepCounter.classList.remove("hidden"); stepCounter.classList.add("visible"); step.innerHTML = "4"; }, 1000);
            break;
        case 5:
            stepCounter.classList.remove("visible");
            stepCounter.classList.add("hidden");
            setTimeout(() => { stepCounter.classList.remove("hidden"); stepCounter.classList.add("visible"); step.innerHTML = "5"; }, 1000);
            break;
        case 6:
            stepCounter.classList.remove("visible");
            stepCounter.classList.add("hidden");
            setTimeout(() => { stepCounter.classList.remove("hidden"); stepCounter.classList.add("visible"); step.innerHTML = "6"; }, 1000);
            break;
        case 7:
            stepCounter.classList.remove("visible");
            stepCounter.classList.add("hidden");
            setTimeout(() => { stepCounter.classList.remove("hidden"); stepCounter.classList.add("visible"); step.innerHTML = "7"; }, 1000);
            break;
        case 8:
            stepCounter.classList.remove("visible");
            stepCounter.classList.add("hidden");
            setTimeout(() => { stepCounter.classList.remove("hidden"); stepCounter.classList.add("visible"); step.innerHTML = "8"; }, 1000);
            break;                 
        case 9:
            buttonRightContainer.classList.add("hidden");
            buttonRight.classList.add("hidden");
            stepCounter.classList.remove("visible");
            stepCounter.classList.add("hidden");
            break;               
        default: 
            console.log("NO SOY EL 1");
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

