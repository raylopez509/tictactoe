let turn = true; //true = x : false = O
let Xsquares = new Array();
let Osquares = new Array();

function clickSquare(button) {
    if (turn) {
        document.getElementById(button).innerHTML = "X";
        document.getElementById(button).disabled = true;
        Xsquares.push(button);
        document.getElementById("winner").innerHTML = "It is O's Turn";
        checkWin(Xsquares);
        turn = false;
    }
    else {
        document.getElementById(button).innerHTML = "O";
        document.getElementById(button).disabled = true;
        Osquares.push(button);
        document.getElementById("winner").innerHTML = "It is X's Turn"
        checkWin(Osquares);
        turn = true;
    }
}

function checkWin(squares) {
    if ((squares.includes("btn1") && squares.includes("btn2") && squares.includes("btn3")) ||
        (squares.includes("btn4") && squares.includes("btn5") && squares.includes("btn6")) ||
        (squares.includes("btn7") && squares.includes("btn8") && squares.includes("btn9")) ||
        (squares.includes("btn1") && squares.includes("btn4") && squares.includes("btn7")) ||
        (squares.includes("btn2") && squares.includes("btn5") && squares.includes("btn8")) ||
        (squares.includes("btn3") && squares.includes("btn6") && squares.includes("btn9")) ||
        (squares.includes("btn1") && squares.includes("btn5") && squares.includes("btn9")) ||
        (squares.includes("btn3") && squares.includes("btn5") && squares.includes("btn7"))) {//win conditions
        document.getElementById("btn1").disabled = true;
        document.getElementById("btn2").disabled = true;
        document.getElementById("btn3").disabled = true;
        document.getElementById("btn4").disabled = true;
        document.getElementById("btn5").disabled = true;
        document.getElementById("btn6").disabled = true;
        document.getElementById("btn7").disabled = true;
        document.getElementById("btn8").disabled = true;
        document.getElementById("btn9").disabled = true;
        highlightSquares(squares);  
        if (turn) {
            document.getElementById("winner").innerHTML = "X Wins!";
        }
        else {
            document.getElementById("winner").innerHTML = "O Wins!";
        }
    }
    else if (document.getElementById("btn1").disabled == true &&
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
    document.getElementById("btn1").innerHTML = "&nbsp";
    document.getElementById("btn2").innerHTML = "&nbsp";
    document.getElementById("btn3").innerHTML = "&nbsp";
    document.getElementById("btn4").innerHTML = "&nbsp";
    document.getElementById("btn5").innerHTML = "&nbsp";
    document.getElementById("btn6").innerHTML = "&nbsp";
    document.getElementById("btn7").innerHTML = "&nbsp";
    document.getElementById("btn8").innerHTML = "&nbsp";
    document.getElementById("btn9").innerHTML = "&nbsp";
    document.getElementById("btn1").disabled = false;
    document.getElementById("btn2").disabled = false;
    document.getElementById("btn3").disabled = false;
    document.getElementById("btn4").disabled = false;
    document.getElementById("btn5").disabled = false;
    document.getElementById("btn6").disabled = false;
    document.getElementById("btn7").disabled = false;
    document.getElementById("btn8").disabled = false;
    document.getElementById("btn9").disabled = false;
    document.getElementById("btn1").style.backgroundColor = "#FFFFFF";
    document.getElementById("btn2").style.backgroundColor = "#FFFFFF";
    document.getElementById("btn3").style.backgroundColor = "#FFFFFF";
    document.getElementById("btn4").style.backgroundColor = "#FFFFFF";
    document.getElementById("btn5").style.backgroundColor = "#FFFFFF";
    document.getElementById("btn6").style.backgroundColor = "#FFFFFF";
    document.getElementById("btn7").style.backgroundColor = "#FFFFFF";
    document.getElementById("btn8").style.backgroundColor = "#FFFFFF";
    document.getElementById("btn9").style.backgroundColor = "#FFFFFF";    
    Xsquares = [];
    Osquares = [];
    turn = true;
    document.getElementById("winner").innerHTML = "It is X's turn";
}

function highlightSquares(squares) {
    if (squares.includes("btn1") && squares.includes("btn2") && squares.includes("btn3")) {
        document.getElementById("btn1").style.backgroundColor = "green";
        document.getElementById("btn2").style.backgroundColor = "green";
        document.getElementById("btn3").style.backgroundColor = "green";
    }
    else if (squares.includes("btn4") && squares.includes("btn5") && squares.includes("btn6")) {
        document.getElementById("btn4").style.backgroundColor = "green";
        document.getElementById("btn5").style.backgroundColor = "green";
        document.getElementById("btn6").style.backgroundColor = "green";
    }
    else if (squares.includes("btn7") && squares.includes("btn8") && squares.includes("btn9")) {
        document.getElementById("btn7").style.backgroundColor = "green";
        document.getElementById("btn8").style.backgroundColor = "green";
        document.getElementById("btn9").style.backgroundColor = "green";
    }
    else if (squares.includes("btn1") && squares.includes("btn4") && squares.includes("btn7")) {
        document.getElementById("btn1").style.backgroundColor = "green";
        document.getElementById("btn4").style.backgroundColor = "green";
        document.getElementById("btn7").style.backgroundColor = "green";
    }
    else if (squares.includes("btn2") && squares.includes("btn5") && squares.includes("btn8")) {
        document.getElementById("btn2").style.backgroundColor = "green";
        document.getElementById("btn5").style.backgroundColor = "green";
        document.getElementById("btn8").style.backgroundColor = "green";
    }
    else if (squares.includes("btn3") && squares.includes("btn6") && squares.includes("btn9")) {
        document.getElementById("btn3").style.backgroundColor = "green";
        document.getElementById("btn6").style.backgroundColor = "green";
        document.getElementById("btn9").style.backgroundColor = "green";
    }
    else if (squares.includes("btn1") && squares.includes("btn5") && squares.includes("btn9")) {
        document.getElementById("btn1").style.backgroundColor = "green";
        document.getElementById("btn5").style.backgroundColor = "green";
        document.getElementById("btn9").style.backgroundColor = "green";
    }
    else if (squares.includes("btn3") && squares.includes("btn5") && squares.includes("btn7")) {
        document.getElementById("btn3").style.backgroundColor = "green";
        document.getElementById("btn5").style.backgroundColor = "green";
        document.getElementById("btn7").style.backgroundColor = "green";
    }
}