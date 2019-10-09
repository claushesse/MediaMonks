const loading = document.querySelector('.loading');
const leftButton = document.querySelector('#left-button-container');
const rightButton = document.querySelector('#right-button-container');
const background = document.querySelector('#background');
const buttonLeftContainer = document.querySelector('#left-button-container');
const buttonLeft = document.querySelector('#left-button');
const buttonRightContainer = document.querySelector('#right-button-container');
const buttonRight = document.querySelector('#right-button');
const message1 = document.querySelector('#message1');
const message2 = document.querySelector('#message2');
const message3 = document.querySelector('#message3');
const message4 = document.querySelector('#message4');
const message5 = document.querySelector('#message5');
const message6 = document.querySelector('#message6');
const message7 = document.querySelector('#message7');
const message8 = document.querySelector('#message8');
const message9 = document.querySelector('#message9');
const message10 = document.querySelector('#message10');
const initialText = document.querySelector('#initialText');
const stepCounter = document.querySelector('#stepCounter');
const final = document.querySelector('#final');
const step = document.querySelector('#step');
const linkCareers = document.querySelector('#linkCareers');
const logo = document.querySelector('#logo');
const selectors = document.querySelectorAll('.pageSelector');
const mail = document.querySelector('#mail');
const facebook = document.querySelector('#facebook');
const twitter = document.querySelector('#twitter');
const positions = ["0%", "13%", "26%", "39%", "52%", "65%", "78%", "100%", "100%", "112%"];
let t0, t1, t2, t3, t4, t5, t6, t7, t8, t9;
let currentPosition = 0;

window.addEventListener('load', function () {
    setTimeout(function () {
        loading.classList.add("loadingHidden");
    }, 2500);
});

window.addEventListener('resize', () => {
    let vh = window.innerHeight * 0.01;
    let vhString = vh.toString();
    document.documentElement.style.setProperty('--vh', vhString+"px");
});

function checkPosition(){

    if(currentPosition != 0){
        initialText.classList.add("hidden");
        initialText.classList.remove("visible");
        message1.classList.remove("visible");
        message1.classList.add("hidden");
        buttonLeftContainer.classList.add("visible"); 
        buttonLeftContainer.classList.remove("hidden");
        document.querySelector('#pageSelector0').style.backgroundColor = "transparent";
        clearTimeout(t0);
    }

    if(currentPosition != 1){
        message2.classList.remove("visible"); 
        message2.classList.add("hidden");
        document.querySelector('#pageSelector1').style.backgroundColor = "transparent";
        document.querySelector('#pageSelector1').style.color = "white";
        clearTimeout(t1);
    }

    if(currentPosition != 2){
        message3.classList.remove("visible"); 
        message3.classList.add("hidden");
        document.querySelector('#pageSelector2').style.backgroundColor = "transparent";
        document.querySelector('#pageSelector2').style.color = "white";
        clearTimeout(t2);
    }

    if(currentPosition != 3){
        message4.classList.remove("visible"); 
        message4.classList.add("hidden");
        document.querySelector('#pageSelector3').style.backgroundColor = "transparent";
        document.querySelector('#pageSelector3').style.color = "white";
        clearTimeout(t3);
    }

    if(currentPosition != 4){
        message5.classList.remove("visible"); 
        message5.classList.add("hidden");
        document.querySelector('#pageSelector4').style.backgroundColor = "transparent";
        document.querySelector('#pageSelector4').style.color = "white";
        clearTimeout(t4);
    }

    if(currentPosition != 5){
        message6.classList.remove("visible"); 
        message6.classList.add("hidden");
        document.querySelector('#pageSelector5').style.backgroundColor = "transparent";
        document.querySelector('#pageSelector5').style.color = "white";
        clearTimeout(t5);
    }

    if(currentPosition != 6){
        message7.classList.remove("visible"); 
        message7.classList.add("hidden");
        document.querySelector('#pageSelector6').style.backgroundColor = "transparent";
        document.querySelector('#pageSelector6').style.color = "white";
        clearTimeout(t6);
    }

    if(currentPosition != 7){
        message8.classList.remove("visible"); 
        message8.classList.add("hidden");
        document.querySelector('#pageSelector7').style.backgroundColor = "transparent";
        document.querySelector('#pageSelector7').style.color = "white";
        clearTimeout(t7);
    }

    if(currentPosition != 8){
        message9.classList.remove("visible"); 
        message9.classList.add("hidden");
        document.querySelector('#pageSelector8').style.backgroundColor = "transparent";
        document.querySelector('#pageSelector8').style.color = "white";
        clearTimeout(t8);
    }

    if(currentPosition != 9){
        message10.classList.remove("visible"); 
        message10.classList.add("hidden");
        buttonRightContainer.classList.remove("hidden");
        buttonRightContainer.classList.add("visible");
        message10.style.transition = "right 1s";
        message10.style.right = "-100%";
        final.style.transition = "right 1s";
        final.style.right = "-100%";
        document.querySelector('#pageSelector9').style.backgroundColor = "transparent";
        clearTimeout(t9);
    }

    switch(currentPosition){
        case 0:
            stepCounter.classList.remove("visible");
            stepCounter.classList.add("hidden");
            buttonLeftContainer.classList.remove("visible"); 
            buttonLeftContainer.classList.add("hidden");
            document.querySelector('#pageSelector0').style.backgroundColor = "white";
            t0 = setTimeout(() => { 
                initialText.classList.remove("hidden");
                initialText.classList.add("visible");
                message1.classList.remove("hidden"); 
                message1.classList.add("visible"); 
            }, 1000);
            break;

        case 1:
            document.querySelector('#pageSelector1').style.backgroundColor = "white";
            document.querySelector('#pageSelector1').style.color = "black";
            t1 = setTimeout(() => { 
                stepCounter.classList.remove("hidden"); 
                stepCounter.classList.add("visible"); 
                message2.classList.remove("hidden"); 
                message2.classList.add("visible");
                step.innerHTML = "1";
            }, 1000);
            break;

        case 2:
            stepCounter.classList.remove("visible");
            stepCounter.classList.add("hidden");
            document.querySelector('#pageSelector2').style.backgroundColor = "white";
            document.querySelector('#pageSelector2').style.color = "black";
            t2 = setTimeout(() => {
                message3.classList.remove("hidden"); 
                message3.classList.add("visible");
                stepCounter.classList.remove("hidden"); 
                stepCounter.classList.add("visible"); 
                step.innerHTML = "2";}, 1000);
            break;

        case 3:
            stepCounter.classList.remove("visible");
            stepCounter.classList.add("hidden");
            document.querySelector('#pageSelector3').style.backgroundColor = "white";
            document.querySelector('#pageSelector3').style.color = "black";
            t3 = setTimeout(() => {
                message4.classList.remove("hidden"); 
                message4.classList.add("visible");
                stepCounter.classList.remove("hidden"); 
                stepCounter.classList.add("visible"); 
                step.innerHTML = "2";}, 1000);
            break;

        case 4:
            stepCounter.classList.remove("visible");
            stepCounter.classList.add("hidden");
            document.querySelector('#pageSelector4').style.backgroundColor = "white";
            document.querySelector('#pageSelector4').style.color = "black";
            t4 = setTimeout(() => { 
                message5.classList.remove("hidden"); 
                message5.classList.add("visible");
                stepCounter.classList.remove("hidden"); 
                stepCounter.classList.add("visible"); 
                step.innerHTML = "4"; 
            }, 1000);
            break;

        case 5:
            stepCounter.classList.remove("visible");
            stepCounter.classList.add("hidden");
            document.querySelector('#pageSelector5').style.backgroundColor = "white";
            document.querySelector('#pageSelector5').style.color = "black";
            t5 = setTimeout(() => { 
                message6.classList.remove("hidden"); 
                message6.classList.add("visible");
                stepCounter.classList.remove("hidden"); 
                stepCounter.classList.add("visible"); 
                step.innerHTML = "5"; 
            }, 1000);
            break;

        case 6:
            stepCounter.classList.remove("visible");
            stepCounter.classList.add("hidden");
            document.querySelector('#pageSelector6').style.backgroundColor = "white";
            document.querySelector('#pageSelector6').style.color = "black";
            t6 = setTimeout(() => { 
                message7.classList.remove("hidden"); 
                message7.classList.add("visible");
                stepCounter.classList.remove("hidden"); 
                stepCounter.classList.add("visible"); 
                step.innerHTML = "6"; 
            }, 1000);
            break;

        case 7:
            stepCounter.classList.remove("visible");
            stepCounter.classList.add("hidden");
            document.querySelector('#pageSelector7').style.backgroundColor = "white";
            document.querySelector('#pageSelector7').style.color = "black";
            t7 = setTimeout(() => { 
                message8.classList.remove("hidden"); 
                message8.classList.add("visible");
                stepCounter.classList.remove("hidden"); 
                stepCounter.classList.add("visible"); 
                step.innerHTML = "7"; 
            }, 1000);
            break;

        case 8:
            stepCounter.classList.remove("visible");
            stepCounter.classList.add("hidden");
            document.querySelector('#pageSelector8').style.backgroundColor = "white";
            document.querySelector('#pageSelector8').style.color = "black";
            t8 = setTimeout(() => { 
                message9.classList.remove("hidden"); 
                message9.classList.add("visible");
                stepCounter.classList.remove("hidden"); 
                stepCounter.classList.add("visible"); 
                step.innerHTML = "8"; 
            }, 1000);
            break;  

        case 9:
            buttonRightContainer.classList.remove("visible");
            buttonRightContainer.classList.add("hidden");
            stepCounter.classList.remove("visible");
            stepCounter.classList.add("hidden");
            document.querySelector('#pageSelector9').style.backgroundColor = "white";
            t9 = setTimeout(() => { 
                message10.classList.remove("hidden"); 
                message10.classList.add("visible");
                message10.style.transition = "right 0.6s ease-out";
                message10.style.right = "0%";
                final.style.transition = "right 0.6s ease-out";
                final.style.right = "0%";
            }, 1000);
            message10.style.display = 'inline-block'
            final.style.display = 'inline-block'
            break;

        default: 
            console.log("default", currentPosition);
            break;
    }
    background.style.backgroundPosition = positions[currentPosition];
}

linkCareers.addEventListener('click',() => {
    window.open('https://www.mediamonks.com/careers', '_blank');
})

linkCareers.addEventListener('touchend',(e) => {
    e.preventDefault();
    e.stopPropagation();
    window.open('https://www.mediamonks.com/careers', '_blank');
})

logo.addEventListener('click',() => {
    window.open('https://www.mediamonks.com', '_blank');
})

logo.addEventListener('touchend',(e) => {
    e.preventDefault();
    e.stopPropagation();
    window.open('https://www.mediamonks.com', '_blank');
})

mail.addEventListener('click', () => {
    window.open('https://www.mediamonks.com/contact','_blank');
})

mail.addEventListener('touchend', (e) => {
    e.preventDefault();
    e.stopPropagation();
    window.open('https://www.mediamonks.com/contact','_blank');
})

facebook.addEventListener('click', () => {
    window.open('https://www.facebook.com/mediamonks/','_blank');
})

facebook.addEventListener('touchend', (e) => {
    e.preventDefault();
    e.stopPropagation();
    window.open('https://www.facebook.com/mediamonks/','_blank');
})

twitter.addEventListener('click', () => {
    window.open('https://twitter.com/mediamonks','_blank');
})

twitter.addEventListener('touchend', (e) => {
    e.preventDefault();
    e.stopPropagation();
    window.open('https://twitter.com/mediamonks','_blank');
})

rightButton.addEventListener('click', () => {
    currentPosition = currentPosition + 1; 
    if (currentPosition > 9){
        currentPosition = 9;
    }
    checkPosition();
})

rightButton.addEventListener('touchend', (e) => {
    e.preventDefault();
    e.stopPropagation();
    currentPosition = currentPosition + 1; 
    if (currentPosition > 9){
        currentPosition = 9;
    }
    checkPosition();
})

leftButton.addEventListener('click', () => {
    currentPosition = currentPosition - 1; 
    if (currentPosition < 0){
        currentPosition = 0;
    }
    checkPosition();
})

leftButton.addEventListener('touchend', (e) => {
    e.preventDefault();
    e.stopPropagation();
    currentPosition = currentPosition - 1; 
    if (currentPosition < 0){
        currentPosition = 0;
    }
    checkPosition();
})

for (const selector of selectors) {
    selector.addEventListener('click', (e) => {
        currentPosition = Number(e.target.innerHTML);
        checkPosition();
    })
}

for (const selector of selectors) {
    selector.addEventListener('touchend', (e) => {
        e.preventDefault();
        e.stopPropagation();
        currentPosition = Number(e.target.innerHTML);
        checkPosition();
    })
}

var firstTouch;
var lastTouch;
var difference;

background.addEventListener('touchstart', (e) => {
    e.preventDefault();
    e.stopPropagation();
    firstTouch = e.touches[0].clientX;
    if(window.innerWidth < 700){
        toggleFullScreen();
        console.log("entre");
    }
})
/*
background.addEventListener('touchmove', (e) => {
    e.preventDefault();
    e.stopPropagation();
    //console.log(e.touches[0].clientX);
    difference = firstTouch - e.touches[0].clientX;
    var backgroundSplitted = Number(background.style.backgroundPosition.split("px")[0]);
    var backgroundCalc = backgroundSplitted - difference;
    var backgroundPx = backgroundCalc + "px";
    background.style.backgroundPosition = backgroundPx;
    console.log(backgroundCalc, backgroundPx);
    //background.style.backgroundPosition = "calc("+difference - (backgroundCalc)+"px)"
    //console.log(background.style.backgroundPosition, difference);
})*/

background.addEventListener('touchend', (e) => {
    e.preventDefault();
    e.stopPropagation();
    //console.log(e.changedTouches[0].clientX);
    lastTouch = e.changedTouches[0].clientX; 
    function tactil(){
        if(lastTouch < firstTouch){
            currentPosition = currentPosition + 1;
            if (currentPosition > 9){
                currentPosition = 9;
            }
        }else{
            currentPosition = currentPosition - 1;
            if (currentPosition < 0){
                currentPosition = 0;
            }
        }
        checkPosition();
    }
    tactil();
})

function toggleFullScreen() {
    if (!document.fullscreenElement) {
        document.body.requestFullscreen();
    } 
}

checkPosition();
