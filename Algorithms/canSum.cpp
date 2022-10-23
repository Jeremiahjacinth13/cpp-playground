#include <iostream>
#include <vector>

bool canSum(int num, std::vector<int> list);

int main () {
    std::vector<int> list = {1, 2, 3, 4, 5};
    std::cout << canSum(10, list);
}

bool canSum(int num, std::vector<int> list )
{
    std::cout << num << std::endl;
    return std::boolalpha(false);
}