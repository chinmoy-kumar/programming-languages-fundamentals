#include <bits/stdc++.h>
#include <iostream>
using namespace std;
int main()
{
    string s = "Hello world";
    cout << *s.begin() << endl;     // pointer to the first element.
    cout << *(s.end() - 1) << endl; // pointer to the first element.

    /* Syntax:
    ------------
    for (string:: iterator variable_name = string_name.begin(); variable_name < string_name.end(); variable_name++)
    {
        cout << *variable_name << endl;
    }

    ###for updated  version: ### (after c++ 11 version)
    ----------------------------------------------------
    NOTE: we can use 'auto' instead of 'string:: iterator'.

    for (auto variable_name = string_name.begin(); variable_name < string_name.end(); variable_name++)
    {
        cout << *variable_name << endl;
    }
    */

    // for (string::iterator a = s.begin(); a < s.end(); a++) // prints character by character
    // {
    //     cout << *a << endl;
    // }

    for (auto a = s.begin(); a < s.end(); a++) // prints character by character
    {
        cout << *a << endl;
    }

    return 0;
}