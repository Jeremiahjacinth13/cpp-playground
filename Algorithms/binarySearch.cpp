#include <iostream>
#include <vector>
#include <cmath>

template <typename T>
void printVector(std::vector<T> vector)
{

    std::cout << "[ ";

    for (int i = 0; i < vector.size() - 1; i++)
    {
        std::cout << vector.at(i) << ", ";
    }

    std::cout << vector.at(vector.size() - 1) << " ]" << std::endl;
}

template <typename T>
T binarySearch(std::vector<T> arr, T searchValue)
{
    int low = 0;
    int high = arr.size() - 1;

    while (low <= high)
    {
        int mid = floor((low + high) / 2);

        if (arr.at(mid) == searchValue)
        {
            return searchValue;
        }
        else if (arr.at(mid) < searchValue)
        {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }

    return -1;
}

int main()
{
    std::vector<int> arr = {0, 1, 2, 3, 4, 5, 6, 7, 8, 9};

    std::cout << binarySearch(arr, 80) << std::endl;
}