/*
Public access modifier: Public members can be accessed and modified from outside the class.
*/
#include <iostream>
using namespace std;

class MyClass
{
public:    // Public access specifier
    int x; // Public attribute
};

int main()
{
    MyClass myObj;
    myObj.x = 25; // Allowed (x is public)
    cout << myObj.x << endl;
    return 0;
}
