#include <iostream>
#include <vector>

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
int linearSearch(std::vector<T> vec, T n)
{
    for (int i = 0; i < vec.size(); i++)
    {
        std::cout << "Currently searching at index " << i << std::endl;
        std::cout << "\n";

        if (vec.at(i) == n)
        {
            std::cout << "Found element at index " << i << std::endl;
            return i;
        }
    }

    std::cout << "Could not find element in list" << std::endl;
    return -1;
}

int main()
{
    std::vector<int> numbers = {1, 2, 3, 4, 5, 6, 7, 8};

    int index = linearSearch<int>(numbers, 5);

    std::cout << index << std::endl;

    return 0;
}
