let turn = true; //true = x : false = O
let Xsquares = new Array();
let Osquares = new Array();

function clickSquare(button, number) {
    if (turn) {
        document.getElementById(button).innerHTML = "X";
        document.getElementById(button).disabled = true;
        Xsquares.push(number);
        document.getElementById("winner").innerHTML = "It is O's Turn";
        checkWin(Xsquares);
        turn = false;
    }
    else {
        document.getElementById(button).innerHTML = "O";
        document.getElementById(button).disabled = true;
        Osquares.push(number);
        document.getElementById("winner").innerHTML = "It is X's Turn"
        checkWin(Osquares);
        turn = true;
    }
}

function checkWin(squares) {
    if ((squares.includes(1) && squares.includes(2) && squares.includes(3)) ||
        (squares.includes(4) && squares.includes(5) && squares.includes(6)) ||
        (squares.includes(7) && squares.includes(8) && squares.includes(9)) ||
        (squares.includes(1) && squares.includes(4) && squares.includes(7)) ||
        (squares.includes(2) && squares.includes(5) && squares.includes(8)) ||
        (squares.includes(3) && squares.includes(6) && squares.includes(9)) ||
        (squares.includes(1) && squares.includes(5) && squares.includes(9)) ||
        (squares.includes(3) && squares.includes(5) && squares.includes(7))) {//win conditions
        if (turn) {
            document.getElementById("winner").innerHTML = "X Wins!";
            //console.log("X Wins!");
        }
        else {
            document.getElementById("winner").innerHTML = "O Wins!";
        }
    }
    if (document.getElementById("btn1").disabled == true &&
        document.getElementById("btn2").disabled == true && 
        document.getElementById("btn3").disabled == true &&
        document.getElementById("btn4").disabled == true &&
        document.getElementById("btn5").disabled == true &&
        document.getElementById("btn6").disabled == true &&
        document.getElementById("btn7").disabled == true &&
        document.getElementById("btn8").disabled == true &&
        document.getElementById("btn9").disabled == true) {
            document.getElementById("winner").innerHTML = "Cat's Game!";
        }
    else
        return false;
}

function reset() {
    document.getElementById("btn1").innerHTML = ".";
    document.getElementById("btn2").innerHTML = ".";
    document.getElementById("btn3").innerHTML = ".";
    document.getElementById("btn4").innerHTML = ".";
    document.getElementById("btn5").innerHTML = ".";
    document.getElementById("btn6").innerHTML = ".";
    document.getElementById("btn7").innerHTML = ".";
    document.getElementById("btn8").innerHTML = ".";
    document.getElementById("btn9").innerHTML = ".";
    document.getElementById("btn1").disabled = false;
    document.getElementById("btn2").disabled = false;
    document.getElementById("btn3").disabled = false;
    document.getElementById("btn4").disabled = false;
    document.getElementById("btn5").disabled = false;
    document.getElementById("btn6").disabled = false;
    document.getElementById("btn7").disabled = false;
    document.getElementById("btn8").disabled = false;
    document.getElementById("btn9").disabled = false;
    Xsquares = [];
    Osquares = [];
    turn = true;
    document.getElementById("winner").innerHTML = "It is X's turn";
}

