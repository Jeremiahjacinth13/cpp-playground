#include <iostream>

int linearSearch(int[], int);

int main () 
{
    int array[] = {1, 2, 3, 4, 5, 6, 7, 8, 9};

    int index = linearSearch(array, 5);

    if (index != -1) {
        cout << "Couldn't find element in array" << std::endl;
    } else {
        cout << "Found element at index " << index << std::endl;
    }
}

int linearSearch(int array[], int target) {
    
    for (let i = 0; i < len(array); i++) {
        if (array[i] == target) {
            return i;
        }
    }

    return -1;
}