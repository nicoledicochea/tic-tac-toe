// PSEUDO CODE - PREP

// Parameters 
    // X or O
        // X from player
        // O from bot
    // tic-tac-toe grid array with following indeces: [0, 1, 2, 3, 4, 5, 6, 7, 8] 
        // can be visualized as
        // [ 0, 1, 2,
        //   3, 4, 5,
        //   6, 7, 8 ]

// Return
    // continue game by allowing player to pick another square
    // OR
    // win / end game / restart

// Example
    // combo of array = [0, 4, 8] equals WINNER
    // all combos include the following:
    //  [0, 1, 2]
    //  [3, 4, 5]
    //  [6, 7, 8]
    //  [0, 3, 6]
    //  [1, 4, 7]
    //  [2, 5, 8]
    //  [0, 4, 8]
    //  [2, 4, 6]

// Pseudo Code
    // startGame function
        // simplifed: game starts once player clicks a square
        // OR add a start button
    // event listener for each individual square in tic-tac-toe grid
    // when cell clicked, push that index into variable gridArray
    // X goes first using player input
    // O goes second using Math.random to choose a random index to place O
    // conditional (gridArray !== any of the winning combos): 
        // if - allow another turn
        // else - display winner !!!
            // triggers the endGame function
    // endGame function includes:
        // 'X' won heading
        // 'Play again?' button
        // additional optimization could be adding animation

    // optimizations to make this OOP-centered:
        // tic-tac-toe object
        // properties - winning combos array, grid array
        // methods - startGame, endGame, choice - push squares into grid array