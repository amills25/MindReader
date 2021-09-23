//start on first page
let currentPage = 0;

//create array full of 100 symbols
var symbol1 = ["!", "@", "#", "$", "%", "&", "A", "H", "~", "^", "!", "@", "#", "$", "%", "&", "A", "H", "~", "^", "!", "@", "#", "$", "%", "&", "A", "H", "~", "^", "!", "@", "#", "$", "%", "&", "A", "H", "~", "^", "!", "@", "#", "$", "%", "&", "A", "H", "~", "^"];
var symbol2 = ["!", "@", "#", "$", "%", "&", "A", "H", "~", "^", "!", "@", "#", "$", "%", "&", "A", "H", "~", "^", "!", "@", "#", "$", "%", "&", "A", "H", "~", "^", "!", "@", "#", "$", "%", "&", "A", "H", "~", "^", "!", "@", "#", "$", "%", "&", "A", "H", "~", "^"];
var symbol = symbol1.concat(symbol2);

//empty int variable that will show the random symbol that reads users mind
var yourSym = null;

//create variables and link them to html
var bigText = document.getElementById("bigText");
var helperText = document.getElementById("helperText");
var actionBtn = document.getElementById("actionBtn");
var revBtn = document.getElementById("revBtn");
var resetBtn = document.getElementById("resetBtn");
var startBtn = document.getElementById("startBtn");

//function that sends us to the next page and runs state change
function actionBtnMethod() {
    currentPage++;
    onStateChange();
}
//on click event listeners for each button sending to next page
actionBtn.addEventListener('click', actionBtnMethod);
startBtn.addEventListener('click', actionBtnMethod);
revBtn.addEventListener('click', actionBtnMethod);

//function to send us back to first page
function resetBtnMethod() {
    currentPage = 0;
    onStateChange();
}
//on click event listener for reset button
resetBtn.addEventListener('click', resetBtnMethod);

//function to hide elements
function hide(element) {
    element.style.visibility = "hidden";
}

//function to show elements
function show(element) {
    element.style.visibility = "visible";
}

//function that creates a random symbol and returns it as a string
//also sets our symbol for everything divisible by 9
function randomSym() {
    var symString = "";
    var randomNine = symbol[Math.floor(Math.random() * symbol.length)];

    for (var i = 0; i < symbol.length; i++) {
        
        if (i % 9 === 0) {
            symString = symString + i + " - " + randomNine + "<br/>";
        } else {
            var random = symbol[Math.floor(Math.random() * symbol.length)];
            symString = symString + i + " - " + random + "<br/>";
            yourSym = randomNine;
        }
    }
    return symString;
}

//state management function
//switch case for each page and the elements seen on each
function onStateChange() {
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
            bigText.innerHTML="Pick a number from 01 - 99";
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
            helperText.innerHTML="Ex: 14 is 1 + 4 = 5 <br/> click next to proceed";
            show(resetBtn);
            hide(startBtn);
            break;
        case 3:
            bigText.innerHTML="Subtract your new number from the original number";
            show(actionBtn);
            hide(revBtn);
            show(helperText);
            helperText.innerHTML="Ex: 14 - 5 = 9 <br/> click next to proceed";
            show(resetBtn);
            hide(startBtn);
            break;
        case 4:
            bigText.innerHTML=randomSym();
            hide(actionBtn);
            show(revBtn);
            show(helperText);
            helperText.innerHTML="Find your new number. <br/> Note the symbol beside the number";
            show(resetBtn);
            hide(startBtn);
            break;
        default:
            bigText.innerHTML = yourSym;
            hide(actionBtn);
            hide(revBtn);
            show(helperText);
            helperText.innerHTML="Your symbol is: <br/>" + yourSym;
            show(resetBtn);
            hide(startBtn);
            break;
    }
}

//function that runs and pulls up when the page is loaded
function init(){
    resetBtnMethod();
    onStateChange();
}
