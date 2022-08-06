#include <iostream>

using namespace std;

int incrementValuesWithoutPointer(int a, int b)
{
    a = a + 10;
    b = b + 10;

    return a + b;
}

int incrementValuesWithPointer(int *a, int *b)
{

    *a = *a + 10;
    *b = *b + 10;

    return *a + *b;
}

int main()
{
    int number1 = 10;
    int number2 = 20;

    cout << incrementValuesWithPointer(&number1, &number2) << endl;
    cout << "Number 1 is " << number1 << endl;
    cout << "Number 2 is " << number2 << endl;

    cout << incrementValuesWithoutPointer(number1, number2) << endl;
    cout << "Number 1 is " << number1 << endl;
    cout << "Number 2 is " << number2 << endl;

    return 0;
}
