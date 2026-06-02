/*
Pass by reference can be useful when you need to change the value of the arguments
*/

#include <iostream>
using namespace std;

void swapNums(int &x, int &y)
{
    int z = x;
    x = y;
    y = z;
}

void modifyStr(string &str)
{
    str += " World!";
}

int main()
{
    // Pass a integer by reference
    int firstNum = 10;
    int secondNum = 20;

    cout << "Before swap: " << "\n";
    cout << firstNum << " " << secondNum << "\n";

    // Call the function, which will change the values of firstNum and secondNum
    swapNums(firstNum, secondNum);

    cout << "After swap: " << "\n";
    cout << firstNum << " " << secondNum << "\n";

    // Pass a string by reference
    string greeting = "Hello";
    modifyStr(greeting);
    cout << greeting;

    return 0;
}