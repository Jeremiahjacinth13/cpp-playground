#include <iostream>

void len (int array[]) {
    std::cout << array << std::endl;
    std::cout << sizeof(array) << std::endl;
    std::cout << sizeof(array[0]) << std::endl;
    std::cout << array[0] << std::endl;
}

int main ()
{
    int array[] = {1, 2, 3, 4, 5, 6, 7};

    std::cout << sizeof(array) << std::endl;

    len(array);

    return 0;
}
