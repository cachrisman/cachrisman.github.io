// "use strict";
/*
 * Tic-tac-toe game - waits for page to load then sets up game
 */
window.addEventListener("load", function() {
    /*
     * Initial variable declaration and setting.  
     * XsMove, turnCount and board will be set with resetBoard, so just declare
     * winningCombinations, playermove and notification don't change, so declare and set
     */
    var XsMove, turnCount, winner, board = [],
        winningCombinations = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ],
        playermove = document.querySelector("#playermove"),
        notification = document.querySelector("#notification");

    /*
     * Checks current board against winning conditions array, and returns winner if found
     * Otherwise returns false
     */
    var checkWinner = function() {
        var isWinner = function(symbol) {
            for (var i = 0; i < winningCombinations.length; i++) {
                if (board[winningCombinations[i][0]] === symbol &&
                    board[winningCombinations[i][1]] === symbol &&
                    board[winningCombinations[i][2]] === symbol)
                    return true;
            }
        };

        if (isWinner("X")) return "X";
        if (isWinner("O")) return "O";
        return false;
    };

    /*
     * Clears the board tracker, resets XsMove, turnCount, board to inital conditions, calls 
     * updateContent to reset playermove and notification divs to initial conditions and adds a
     * click event listener on #board to call makeMove
     */
    var resetBoard = function() {
        XsMove = true;
        turnCount = 0;
        board = [null, null, null, null, null, null, null, null, null];
        var temp = document.querySelectorAll(".box");
        for (var i = 0; i < temp.length; i++) temp[i].innerHTML = "&nbsp;";
        updateContent("&nbsp;", "", "X's move");
        document.querySelector("#board").addEventListener("click", makeMove);
    };

    /*
     * Updates notification div with notification_text and notification_color, updates playermove div
     * with playermove_text, and if passed, alerts user with alert_text
     */
    var updateContent = function(notification_text, notification_color, playermove_text, alert_text) {
        notification.innerHTML = notification_text;
        notification.style.backgroundColor = notification_color;
        playermove.innerHTML = playermove_text;
        if (alert_text) alert(alert_text);
    };

    /*
     * When user clicks a square, this function checks whether the square has already been clicked,
     * if the square has been clicked, it calls updateContent with appropriate messages.
     *
     * If not it calls updateContent with appropriate messages, sets the square to the current player,
     * updates the board tracker, swaps current player, increments turnCount and checks for a
     * winner.
     *
     * If there is a winner, it calls updateContent with appropriate messages, and removes 
     * the click event listener (to stop users from entering moves).
     *
     * If turnCount equals 9, then it calls updateContent with appropriate messages, and removes 
     * click event listener.
     */
    var makeMove = function(event) {
        if (event.target.innerHTML === "X" || event.target.innerHTML === "O") {
            updateContent("Already selected", "red", "Still " + (XsMove ? "X" : "O") + "'s move", "Already selected. Still " + (XsMove ? "X" : "O") + "'s move");
        } else {
            updateContent("&nbsp;", "", (XsMove ? "O" : "X") + "'s move");
            event.target.innerHTML = XsMove ? "X" : "O";
            board[event.target.id] = XsMove ? "X" : "O";
            XsMove = !XsMove;
            turnCount++;
            winner = checkWinner();
            if (winner) {
                document.querySelector("#board").removeEventListener("click", makeMove);
                updateContent(winner + " Wins!", "lime", "&nbsp;", winner + " Wins!");
            } else if (turnCount == 9) {
                document.querySelector("#board").removeEventListener("click", makeMove);
                updateContent("Its a Tie!!", "lime", "&nbsp;", "Its a Tie!!");
            }
        }
    };
    /*
     * Upon page load, resets board and sets up reset button click event listener
     */
    resetBoard();
    document.querySelector("button").addEventListener("click", resetBoard);
});
