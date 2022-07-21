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
};

bool checkHorizontalWin(char board[3][3]) {

    int xCharacterCount = 0;

    for (int i = 0; i < 3; i++) {
        for (int j = 0; j < 3; j++) {

            if (board[i][j] == '*') {
                return false;
            }

            if (board[i][j] == 'X') {
                xCharacterCount++;
            }
        }

        if (xCharacterCount == 3 || xCharacterCount == 0) {
            return true;
        } else {
            xCharacterCount = 0;
        }
    }

    return false;
}
//fjkl

bool checkVerticalWin(char board[3][3]) {

    int xCharacterCount = 0;

    for (int i = 0; i < 3; i++) {
        for (int j = 0; j < 3; j++) {
            
            if(board[j][i] == '*') {
                return false;
            }

            if (board[j][i] == 'X') {
                xCharacterCount++;
            }
        }

        if (xCharacterCount == 3 || xCharacterCount == 0) {
            return true;
        } else {
            xCharacterCount = 0;
        }
    }

    return false;
}

bool checkDiagonalWin (char board[3][3]) {

    bool lToRDiagonal = ((board[0][0] == board[1][1]) && (board[0][0] == board[2][2])) && (board[0][0] != '*');
    bool rToLDiagonal = ((board[0][2] == board[1][1]) && (board[0][2] == board[2][0])) && (board[0][2] != '*');

    return lToRDiagonal || rToLDiagonal;
}


void handlePlay (char board[3][3], char currentPlayingChar) {

    int row = selectPlayPosition(2, 0, "Enter row position (0 - 2):");
    int col = selectPlayPosition(2, 0, "Enter col position (0 - 2):");

    if (board[row][col] != '*') {
        cout << "Please select another position" << endl;
        handlePlay(board, currentPlayingChar);
    } else {
        cout << "Playing in position (" << row << ", " << col << ")" << endl;
        
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

        handlePlay(board, currentPlayingChar);

        printBoard(board);

        // switch active player
        if (currentPlayingChar == playerCharacter) {
            currentPlayingChar = botCharacter;
        } else {
            currentPlayingChar = playerCharacter;
        }


        // increment the playing count;
        playCount++;

        cout << "diagonal" << checkDiagonalWin(board);
        cout << "Horizontal" << checkHorizontalWin(board);
        cout << "vertical" << checkVerticalWin(board);


        // check win and display message
        if (checkHorizontalWin(board) || checkVerticalWin(board) || checkDiagonalWin(board)) {
            cout << "A WINNER HAS BEEN FOUND" << endl;
            hasWinner = true;
        }

    }
    while ((playCount < maxPlayCount) || !hasWinner);

    if (hasWinner) {
        cout << "WE HAVE OUR WINNER" << endl;
    } else {
        cout << "THE GAME IS STALE" << endl;
    }
    
    
    return 0;
}