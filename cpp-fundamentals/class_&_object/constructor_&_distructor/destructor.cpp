/*
Destructor: 
A destructor is a special member function that is called automatically when an object goes out of scope or when we delete the object with the delete expression.

In C++, a destructor has the same name as that of the class, and it does not have a return type. ~ precedes the identifier to indicate destructor.
*/

#include <bits/stdc++.h>
using namespace std;
class MyFirstClass
{
public:
    void display()
    {
        cout << "Inside the display function" << endl;
    }
    
    // constructor
    MyFirstClass()
    { 
        cout << "Constructor is called" << endl;
    }

    // destructor
    ~MyFirstClass(){
        cout << "Destructor is called" << endl;
    }
};
int main()
{   
    MyFirstClass obj;
    obj.display();

    return 0;
}