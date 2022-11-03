/*
rolling rocks
Rules:
    Rocks roll left to right.
    Walls do not roll.
    Walls stop rocks from rolling.
    Stopped rocks stop their neighboring rocks from rolling.
    
    O is a rock
    X is a wall
    . is empty space

    The world is a series of symbols that change over time.
    Time loops through a series of cycles until they stop changing (become stable). (at most 8)

    here are some initial inputs and final output (we are omitting the states in between)
    "O......X" becomes "......OX"
    ".O.X.O.X" becomes "..OX..OX"
    "OOO..XO." becomes "..OOOX.."
*/
function roll(initial){
    final = initial
    //...
    return final
}