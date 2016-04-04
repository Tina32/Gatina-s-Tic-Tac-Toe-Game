$(document).ready(function() {

    var $gameCells = $('.cell');
    var moves = ["", "", "", "", "", "", "", "", ""];
    var count = 0;
    var turn = 'X';
    //var champ = null;

    var startGame = function() {
        $($gameCells).one('click', function() {
            $(this).html(turn);
            moves[this.id] = turn;

            count++;

            turn = (turn == 'X') ? 'O' : 'X';

            // if (count % 2 == 0){
            //  turn = 'X';
            // } else {
            //  turn = 'O';
            // }

            // console.log(moves, count, turn);
            console.log(moves, count, turn);


            var getWinner = function() {
                if (winnerIs('X')) {
                    alert('Player X wins!');
                }
                if (winnerIs('O')) {
                    alert('Player O wins!');
                } else {
                    return null;
                }
            }

            var winnerIs = function(turn) {
                return winsRow(turn) || winsCol(turn) || winsDiag(turn);
            }

            var winsRow = function(turn) {
                return allThree(turn, moves[0], moves[1], moves[2]) || allThree(turn, moves[3], moves[4], moves[5]) || allThree(turn, moves[6], moves[7], moves[8]);
            }
            var winsCol = function(turn) {
                return allThree(turn, moves[0], moves[3], moves[6]) || allThree(turn, moves[1], moves[4], moves[7]) || allThree(turn, moves[2], moves[5], moves[8]);
            }
            var winsDiag = function(turn) {
                return allThree(turn, moves[0], moves[4], moves[8]) || allThree(turn, moves[2], moves[4], moves[6]);
            }
            var allThree = function(turn, cell1, cell2, cell3) {
                return (cell1 === turn) && (cell2 === turn) && (cell3 === turn);
            }

            var winner = getWinner();

        });
    }
    startGame();
    var reset = function() {
        $($gameCells).off('click');
        var moves = ["", "", "", "", "", "", "", "", ""];
        var count = 0;
        var turn = 'X';

        $gameCells.html('');
    };

    $('#newgame').click(function() {
        $(this).on();
        reset();
        startGame();
    });



    // if(X or O !== champ){
    //   alert(No Winner);
    // }
    // } else{
    //   alert ('No Winner');
    // }

});
