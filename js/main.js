var pages = [0, 1, 2, 3, 4, 5];

var symbol = ["!", "@", "#", "$", "%", "&", "A", "H", "~", "^"]

var bigText = "";
var actionBtn = "";
var helperText = "";
var resetBtn = "";

bigText() {
    switch (pages[]){
        case 0:
            bigText = "I can read your mind";
        case 1:
            bigText = "Pick a number from 01-99";
        case 2:
            bigText = "Add both digits together to get a new number";
        case 3:
            bigText = "Subtract you rnew number from the original number";
        case 4:
            bigText = randomSym();
        case 5:
            bigText = randomSym(symbol);
    }
}

helperText() {
    switch (pages[]){
        case 0:
            actionBtn = "";
        case 1:
            actionBtn = "when you have your number click next";
        case 2:
            actionBtn = "Ex: 14 is 1+4=5 \n click next to proceed";
        case 3:
            actionBtn = "Ex: 14-5=9 \n click next to proceed";
        case 4:
            actionBtn = "Find your new number. \n Note the symbol beside the number";
        case 5:
            actionBtn = "Your symbol is: \n";
            randomSym(symbol);
    }
}

actionBtn() {
    switch (pages[]){
        case 0:
            helperText = "";
        case 1:
            helperText = "NEXT";
            actionBtn();
        case 2:
            helperText = "NEXT";
            actionBtn();
        case 3:
            helperText = "NEXT";
            actionBtn();
        case 4:
            helperText = "REVEAL";
            actionBtn();
        case 5:
            helperText = "";
    }
}

resetBtn() {
    switch (pages[]){
        case 0:
            resetBtn = "GO";
            actionBtn();
        case 1:
            resetBtn = "";
            resetBtn();
        case 2:
            resetBtn = "";
            resetBtn();
        case 3:
            resetBtn = "";
            resetBtn();
        case 4:
            resetBtn = "";
            resetBtn();
        case 5:
            resetBtn = "";
            resetBtn();
    }
}

let game = {
    bigText:"",
    actionBtn:"",
    helperText:"",
    resetBtn:"",
}

currentPage() {

}

hide() {

}

randomSym() {

}