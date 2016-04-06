$(document).ready(function() {

    var $gameCells = $('.cell');
    var moves = ["", "", "", "", "", "", "", "", ""];
    var count = 0;
    var turn = 'X';
    var Xscore = 0;
    var Oscore = 0;
    var Ties = 0;
    var champ = null;
    $('#score_x').text(Xscore);
    $('#score_tie').text(Ties);
    $('#score_o').text(Oscore);

    var startGame = function() {
        console.log(moves);
        console.log(count);
        console.log(turn);
        $($gameCells).one('click', function() {
            $(this).html(turn);
            // if (turn == 'X') {
            //   $(this).addClass('xImgClass')
            // }
            // else {
            //   $(this).addClass('yImgClass')
            // }
            moves[this.id] = turn;
            //this.atrr(img src)

            count++;

            turn = (turn == 'X') ? 'O' : 'X';


            // if (count % 2 == 0){
            //  turn = 'X';
            // } else {
            //  turn = 'O';
            // }
            console.log(moves, count, turn);

            var getWinner = function() {
                if (winnerIs('X', 'addscore')) {
                    alert('Player X wins! Start a new game!');
                    Xscore++;
                    $('div').off('click');
                    // $('#Xscore').html('<div id='score_x'></div>');
                    // console.log(Xscore);
                }
                if (winnerIs('O', 'addscore')) {
                    alert('Player O wins Start a new game!');
                    Oscore++;
                    $('div').off('click');
                    console.log(Oscore);
                    // if (true) {}

                } else {
                    return null;
                }
            }

            var winnerIs = function(turn, score) {
                return winsRow(turn) || winsCol(turn) || winsDiag(turn);
                //update score of games
                //updatescore(score)
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
            $('#score_x').text(Xscore);
            $('#score_tie').text(Ties);
            $('#score_o').text(Oscore);

            // var updateScore = function(){
            //   //calulate the score
            //   //update the score div
            //   //call this function from winnerIs
            //   //keep track of how many wins
            // }
        });
    }
    startGame();
    var reset = function() {
        $($gameCells).off('click');
        moves = ["", "", "", "", "", "", "", "", ""];
        count = 0;
        turn = 'X';
        console.log(moves);
        console.log(count);
        console.log(turn);
        console.log(Xscore);
        console.log(Oscore);
        console.log(Ties);
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
