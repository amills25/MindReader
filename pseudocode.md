#### Deconstruct and Identify
* what page are we on?
* do the buttons do different things on different pages?
* what pages go on to the next?
* what pages reset back to page 1?
* big text changes on each page
* placement of things stays the same on each page
* some things are hidden from page to page

##### Functionality
As the user, I want to be able to click through the game and see the screen change on the button clicks, with text changing on each page. I want to see that my mind has been read when going through the math. It should update without refreshing.

#### Objects and Data Structures
##### UI
* screen with text and button
* container-row-column
* text object stays the same
* button same location but different icon
* add button and text below main text after index page
* you can hide text and buttons if you don't want it visible

##### STATE
* var game = {} every object has properties and methods
* currentPage = 1 (an int)
* pages = []
* pages[1]?
* pages[view]? -- JSON
* view.bigText
* view.actionBtn = } label: hide?
* view.resetBtn
* view.helperText

### START

#### PROGRAM MindReader

INIT
    Create the state object -- game
        bigText, helperText, actionBtn, resetBtn
    Establish click handlers for the buttons
    game.init()
    pages=[];

Class currentPage(){
    //constructor
    
    //properties
    page[0]?

    //methods
    actionBtn(){
        go to next page
        hide?
    }
    bigText();{
       changes based on page 
       hide?
    }
    resetBtn(); {
        goes back to first page
        IF on first page, GO to page 2
        IF on pages 2-6, reset
    } 
    helperText(); {
        changes based on page
        hide?
    }

    Page 0:
    bigText: "I can read your mind"
    actionBtn: hide -- no action
    helperText: hide
    resetBtn: "GO" -- run actionBtn()

    Page 1:
    bigText: "Pick a number from 01-99"
    actionBtn: "NEXT" -- run actionBtn()
    helperText: "when you have your number click next"
    resetBtn "arrow symbol" -- run resetBtn()

    Page 2:
    bigText: "Add both digits together to get a new number"
    actionBtn: "NEXT" -- run actionBtn()
    helperText: "Ex: 14 is 1 + 4 = 5 \n click next to proceed"
    resetBtn: "arrow symbol" -- run resetBtn()

    Page 3:
    bigText: "Subtract your new number from the original number"
    actionBtn: "NEXT" -- run actionBtn()
    helperText: "Ex: 14 - 5 = 9 \n click next to proceed"
    resetBtn "arrow symbol" -- run resetBtn()

    Page 4:
    bigText: "0-& \n 1-@ \n 2-$ \n 3-B \n ... to 99" -- run randomSym()
    actionBtn: "REVEAL" -- run actionBtn()
    helperText: "Find your new number. \n Note the symbol beside the number"
    resetBtn "arrow symbol" -- run resetBtn()

    Page 5:
    bigText: "&" -- returning the string from randomSym(symbol)
    actionBtn: hide -- no action
    helperText: "Your symbol is: \n symbol"
    resetBtn "arrow symbol" -- run resetBtn()
}

#### End Program

#### Define Objects, Functions, Arrays
* game{}
  * currentPage, actionBtn, resetBtn, bigText, helperText, hide

* INIT()
  * pages=[]

* currentPage()
  * display the UI
  * start on page 0
  * change based on page

* actionBtn()
  * adds 1 to the current page location and goes to next
  * display shows next, or reveal
  * currentPage()

* resetBtn()
  * IF on pages 1-5, send back to page 0
  * IF on page 0, send to page 1
  * display go or reset

* bigText()
  * string
  * hide or display

* helperText()
  * string
  * hide or display

* hide()
  * make text or button disappear on a given page

* randomSym()
  * create symbol string
  * gives us a random symbol for every n%9=0
  * returns a string

### END

