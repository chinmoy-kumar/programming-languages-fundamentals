/*
Private Access Modifier: private members cannot be accessed (or viewed) from outside the class.
*/
#include <iostream>
using namespace std;

class MyClass
{
public:    // Public access specifier
    int x; // Public attribute
private:   // Private access specifier
    int y; // Private attribute
};

int main()
{
    MyClass myObj;
    myObj.x = 25; // Allowed (x is public)
    myObj.y = 50; // Not allowed (y is private)
    cout << myObj.y << endl;
    return 0;
}

// OUTPUT: error: y is private  (If you try to access a private member, an error occurs)

/* NOTE:
It is possible to access private members of a class using a public method inside the same class. See the file encapsulation.cpp on how to do this.
*/




