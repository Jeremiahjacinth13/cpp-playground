#include <iostream>

using namespace std;

void printBoard(char board[3][3])
{

    for (int i = 0; i < 3; i++)
    {
        for (int j = 0; j < 3; j++)
        {
            cout << board[i][j] << '\t';
        }

        cout << endl
             << endl;
    }
}

void displayWelcomeMessage()
{
    cout << "WELCOME TO TICTACTOE" << endl
         << endl;
}

char selectCharacter()
{

    char playingCharacter;
    cout << "Please select your character (X or O)" << endl;

    cin >> playingCharacter;

    if (playingCharacter == 'X' || playingCharacter == 'O')
    {
        cout << "You have selected " << playingCharacter << endl;
        return playingCharacter;
    }
    else
    {
        cout << "ERROR!!!" << endl
             << "Invalid Character Choice!" << endl;
        return selectCharacter();
    }
}

int selectPlayPosition(int max, int min, string message)
{
    int playPosition;

    cout << message;
    cin >> playPosition;

    if (playPosition > max || playPosition < min)
    {
        cout << "Invalid Position! Try again\n\n";
        return selectPlayPosition(max, min, message);
    }
    else
    {
        return playPosition;
    }
}

struct CheckWinReturn
{
    bool hasWinner;
    char winner;
};

bool checkHorizontalWin(char board[3][3])
{

    int xCharacterCount = 0;

    for (int i = 0; i < 3; i++)
    {
        for (int j = 0; j < 3; j++)
        {

            if (board[i][j] == '*')
            {
                return false;
            }

            if (board[i][j] == 'X')
            {
                xCharacterCount++;
            }
        }

        if (xCharacterCount == 3 || xCharacterCount == 0)
        {
            return true;
        }
        else
        {
            xCharacterCount = 0;
        }
    }

    return false;
}

bool checkVerticalWin(char board[3][3])
{

    int xCharacterCount = 0;

    for (int i = 0; i < 3; i++)
    {
        for (int j = 0; j < 3; j++)
        {

            if (board[j][i] == '*')
            {
                return false;
            }

            if (board[j][i] == 'X')
            {
                xCharacterCount++;
            }
        }

        if (xCharacterCount == 3 || xCharacterCount == 0)
        {
            return true;
        }
        else
        {
            xCharacterCount = 0;
        }
    }

    return false;
}

bool checkDiagonalWin(char board[3][3])
{

    bool lToRDiagonal = ((board[0][0] == board[1][1]) && (board[0][0] == board[2][2])) && (board[0][0] != '*');
    bool rToLDiagonal = ((board[0][2] == board[1][1]) && (board[0][2] == board[2][0])) && (board[0][2] != '*');

    return lToRDiagonal || rToLDiagonal;
}

void handlePlay(char board[3][3], char currentPlayingChar)
{

    int row = selectPlayPosition(2, 0, "Enter row position (0 - 2):");
    int col = selectPlayPosition(2, 0, "Enter col position (0 - 2):");

    if (board[row][col] != '*')
    {
        cout << "Please select another position" << endl;
        handlePlay(board, currentPlayingChar);
    }
    else
    {
        cout << "Playing in position (" << row << ", " << col << ")" << endl;

        board[row][col] = currentPlayingChar;
    }
}

char gamePlay(int[3][3] board);

int main()
{

    char board[3][3] = {
        {'*', '*', '*'},
        {'*', '*', '*'},
        {'*', '*', '*'}};

    int xScore, oScore = 0;

    gamePlay(board, *xScore, *oScore)

    char operation;

    cout << "Press R to play again. Press any key to quit game" << endl;

    cin >> operation;

    if (operation == 'R')
    {
        gamePlay(board, )
    }

    return 0;
}

gamePlay(int[3][3] board, int xScore, int oScore)
{

    bool hasWinner = false;

    displayWelcomeMessage();

    cout << "THIS IS THE GAME BOARD\n"
         << endl;

    printBoard(board);

    char playerCharacter = selectCharacter();
    char botCharacter = playerCharacter == 'X' ? 'O' : 'X';
    char currentPlayingChar = playerCharacter;

    int playCount = 0;
    const int MAX_PLAY_COUNT = 9;

    do
    {
        int row, col;

        cout << "Player (" << currentPlayingChar << ") is playing now\n"
             << endl;

        // gets the play positions and updates the board
        handlePlay(board, currentPlayingChar);

        // print the board with the newly played board state
        printBoard(board);

        // increment the playing count;
        playCount++;

        // check win and display message
        if (checkHorizontalWin(board) || checkVerticalWin(board) || checkDiagonalWin(board))
        {
            cout << "A WINNER HAS BEEN FOUND" << endl;
            hasWinner = true;
        }

        if (!hasWinner)
        {

            // switch active player
            if (currentPlayingChar == playerCharacter)
            {
                currentPlayingChar = botCharacter;
            }
            else
            {
                currentPlayingChar = playerCharacter;
            }
        }
    } while (hasWinner ? false : (playCount < MAX_PLAY_COUNT));

    if (hasWinner)
    {
        cout << currentPlayingChar << "wins the game" << endl;

        if (currentPlayingChar == 'O')
        {
            oScore++;
        }
        else if (winner == 'X')
        {
            xScore++;
        }
    }
    else
    {
        cout << "THE GAME IS STALE" << endl;
    }

    cout << "THE CURRENT SCORE IS " << oScore << ":" << xScore << endl;
}