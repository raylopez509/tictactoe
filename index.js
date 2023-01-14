let turn = true; //true = x : false = O
let Xsquares = new Array();
let Osquares = null;
let test = 0;

function click1(button, num) {
    if (turn) {
        document.getElementById(button).innerHTML = "X";
        addtoXSquares(num);
        checkWin(Xsquares);
    }
    else {
        document.getElementById(button).innerHTML = "O";
    }
    test = num;
}

function clickX() {
    turn = true
}

function clickO() {
    turn = false
}

function addtoXSquares(number) {
    Xsquares.push(number);
}

function checkWin(squares) {
    if (squares.includes(1),squares.includes(2),squares.includes(3)) {
        console.log("X Wins!")
    }
}

