#include <iostream>

using namespace std;

void printBoard(char board[3][3]) {

    for (int i = 0; i < 3; i++) {
        for (int j = 0; j < 3; j++) {
            cout << board[i][j] << '\t';
        }

        cout << endl << endl;
    }
}

void displayWelcomeMessage() {
    cout << "WELCOME TO TICTACTOE" << endl << endl;
}

char selectCharacter () {

    char playingCharacter;
    cout << "Please select your character (X or O)" << endl;

    cin >> playingCharacter;

    if (playingCharacter == 'X' || playingCharacter == 'O') {
        cout << "You have selected " << playingCharacter << endl;
        return playingCharacter;
    } else {
        cout << "ERROR!!!" << endl << "Invalid Character Choice!" << endl; 
        return selectCharacter();
    }
}

int selectPlayPosition (int max, int min, string message) {
    int playPosition;

    cout << message;
    cin >> playPosition;

    if (playPosition > max || playPosition < min) {
        cout << "Invalid Position! Try again\n\n";
        return selectPlayPosition(max, min, message);
    } else {
        return playPosition;
    }
}

struct CheckWinReturn {
    bool hasWinner;
    char winner;
}

CheckWinReturn checkWin (char board[3][3]) {

    // horizontal win
    for (int i = 0; i < 3; i++) {
        
    }
}

void handlePlay (char board[3][3]) {

    row = selectPlayPosition(2, 0, "Enter row position (0 - 2):");
    col = selectPlayPosition(2, 0, "Enter col position (0 - 2):");

    if (board[row][col] != '*') {
        cout << "Please select another position" << endl;
        handlePlay(board);
    } else {
        cout << "Playing in position (" << row << ", " << ")" << endl;
        
    board[row][col] = currentPlayingChar;
    }
}

int main () {

    char board[3][3] = {
        { '*', '*', '*' },
        { '*', '*', '*' },
        { '*', '*', '*' }
    };

    bool hasWinner = false;

    displayWelcomeMessage();

    cout << "THIS IS THE GAME BOARD\n" << endl;

    printBoard(board);

    char playerCharacter = selectCharacter();
    char botCharacter = playerCharacter == 'X' ? 'O' : 'X';
    char currentPlayingChar = playerCharacter;
    
    int playCount = 0;
    const int maxPlayCount = 9;

    do {
        int row, col;

        cout << "Player (" << currentPlayingChar << ") is playing now\n" << endl;

        handlePlay(board);

        printBoard(board);

        // switch active player
        if (currentPlayingChar == playerCharacter) {
            currentPlayingChar = botCharacter;
        } else {
            currentPlayingChar = playerCharacter;
        }


        // increment the playing count;
        playCount++;

        // check win and display message
        if (checkWin(board)) {
            hasWinner = true;
        }

    }
    while ((playCount < maxPlayCount) || !hasWinner);


    
    
    return 0;
}