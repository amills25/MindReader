let pages = [0, 1, 2, 3, 4, 5];

var symbol = ["!", "@", "#", "$", "%", "&", "A", "H", "~", "^"]

var bigText = "";
var helperText = "";
//var actionBtn = "";
//var resetBtn = "";

function bigText() {
    switch (pages){
        case 0:
            bigText = "I can read your mind";
            break;
        case 1:
            bigText = "Pick a number from 01-99";
            break;
        case 2:
            bigText = "Add both digits together to get a new number";
            break;
        case 3:
            bigText = "Subtract your new number from the original number";
            break;
        case 4:
            bigText = randomSym();
            break;
        case 5:
            bigText = randomSym(symbol);
            break;
    }
}

function helperText() {
    switch (pages){
        case 0:
            hide(helperText);
            break;
        case 1:
            helperText = "when you have your number click next";
            break;
        case 2:
            helperText = "Ex: 14 is 1+4=5 \n click next to proceed";
            break;
        case 3:
            helperText = "Ex: 14-5=9 \n click next to proceed";
            break;
        case 4:
            helperText = "Find your new number. \n Note the symbol beside the number";
            break;
        case 5:
            helperText = "Your symbol is: \n";
            randomSym(symbol);
            break;
    }
}

function actionBtn() {
    switch (pages){
        case 0:
            hide(actionBtn);
            break;
        case 1:
            actionBtn = "NEXT";
            onStateChange();
            break;
        case 2:
            actionBtn = "NEXT";
            actionBtn();
            break;
        case 3:
            actionBtn = "NEXT";
            actionBtn();
            break;
        case 4:
            actionBtn = "REVEAL";
            actionBtn();
            break;
        case 5:
            hide(actionBtn);
            break;
    }
}

function resetBtn() {
    switch (pages){
        case 0:
            resetBtn = "GO";
            actionBtn();
            break;
        case 1:
            resetBtn = "";
            resetBtn();
            break;
        case 2:
            resetBtn = "";
            resetBtn();
            break;
        case 3:
            resetBtn = "";
            resetBtn();
            break;
        case 4:
            resetBtn = "";
            resetBtn();
            break;
        case 5:
            resetBtn = "";
            resetBtn();
            break;
    }
}

pageObj.currentPage = function() {

}

pageObj.actionBtn = function() {

}

pageObj.resetBtn = function() {

}

pageObj.bigText = function() {

}

pageObj.helperText = function() {

}

//my init()
function currentPage() {
    var actionBtn = document.getElementById("");
    var resetBtn = document.getElementById("");
    onStateChange();
}

function hide(element) {
    element.style.visibility = "hidden";
}

function randomSym() {

}

function onStateChange() {

}

function modifyBtn(btn, isVisible, text) {
    //change visibility
    //change text
}

class pageObj {
    constructor(actionBtn, resetBtn, bigText, helperText) {
        this.actionBtn = actionBtn;
        this.resetBtn = resetBtn;
        this.bigText = bigText;
        this.helperText = helperText;
    }
}