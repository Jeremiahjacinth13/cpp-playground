#include <iostream>

using namespace std;

int main () {

    string food = "Pizza";
    string* foodAddress = &food;

    cout << food << endl;
    cout << foodAddress << endl;
    
    cout << *foodAddress << endl;

    cout << foodAddress << endl;
    
    return 0;
}
