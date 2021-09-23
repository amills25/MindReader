let currentPage = 0;

var symbol = ["!", "@", "#", "$", "%", "&", "A", "H", "~", "^"]

var bigText = document.getElementById("bigText");
var helperText = document.getElementById("helperText");
var actionBtn = document.getElementById("actionBtn");
var revBtn = document.getElementById("revBtn");
var resetBtn = document.getElementById("resetBtn");
var startBtn = document.getElementById("startBtn");

function actionBtnMethod() {
    currentPage++;
    onStateChange();
}
actionBtn.addEventListener('click', actionBtnMethod);
startBtn.addEventListener('click', actionBtnMethod);
revBtn.addEventListener('click', actionBtnMethod);

function resetBtnMethod() {
    currentPage = 0;
    onStateChange();
}
resetBtn.addEventListener('click', resetBtnMethod);

function hide(element) {
    element.style.visibility = "hidden";
}

function show(element) {
    element.style.visibility = "visible";
}

function randomSym() {
    for (var i = 0; i < 100; i++) {
        if (i % 9) {
            const random = Math.floor(Math.random() * symbol.length);
            return random;
        }
        return
    }
}

function onStateChange() {
    console.log(currentPage);
    switch (currentPage) {
        case 0:
            bigText.innerHTML="I can read your mind";
            hide(actionBtn);
            hide(revBtn);
            hide(helperText);
            hide(resetBtn);
            show(startBtn);
            break;
        case 1:
            bigText.innerHTML="Pick a number from 01-99";
            show(actionBtn);
            hide(revBtn);
            show(helperText);
            helperText.innerHTML="when you have your number click next";
            show(resetBtn);
            hide(startBtn);
            break;
        case 2:
            bigText.innerHTML="Add both digits together to get a new number";
            show(actionBtn);
            hide(revBtn);
            show(helperText);
            helperText.innerHTML="Ex: 14 is 1 + 4 = 5 \n click next to proceed";
            show(resetBtn);
            hide(startBtn);
            break;
        case 3:
            bigText.innerHTML="Subtract your new number from the original number";
            show(actionBtn);
            hide(revBtn);
            show(helperText);
            helperText.innerHTML="Ex: 14 - 5 = 9 \n click next to proceed";
            show(resetBtn);
            hide(startBtn);
            break;
        case 4:
            bigText.innerHTML=randomSym();
            hide(actionBtn);
            show(revBtn);
            show(helperText);
            helperText.innerHTML="Find your new number. \n Note the symbol beside the number";
            show(resetBtn);
            hide(startBtn);
            break;
        default:
            bigText.innerHTML=randomSym(symbol);
            hide(actionBtn);
            hide(revBtn);
            show(helperText);
            helperText.innerHTML="Your symbol is: \n" + randomSym(symbol);
            show(resetBtn);
            hide(startBtn);
            break;
    }
}

function init(){
    resetBtnMethod();
    //initialized any other variables here
    onStateChange();
}
