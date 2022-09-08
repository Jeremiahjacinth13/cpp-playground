#include <iostream>
#include <string>
#include <vector>

int main()
{

    const std::string FINALWORD = "JAMES";
    std::string GUESSEDWORD = "";

    // print welcome message
    std::cout << "WELCOME TO WORDLE\nTell the user how to play" << std::endl;

    return 0;
}

int getPlayIndex(std::string word)
{
    int playIndex;
    std::cout << "Select a number (1-5) to indicate where to play";
    cin >> playIndex;

    if (playIndex < 1 || playIndex > 5)
    {
        std::cout << "Invalid index, try again" << std::endl;
        return getPlayIndex(word)
    } else if (word.at(playIndex)) {
        std::cout << "Already played at this index" << std::endl;
        return getPlayIndex(word)
    }

    return playIndex;
}

char getPlayLetter(std::string word)
{
    char playLetter;
    std::cout << "Input a letter to play"
}