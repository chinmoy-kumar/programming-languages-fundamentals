#include <bits/stdc++.h>
#include <iostream>
using namespace std;
int main()
{
    // Different methods of assign value in string by using constructor.
    string s = "Hello";
    cout << s << endl;
    // Method 1
    string s2("Hello");
    cout << s2 << endl;

    // Method 2
    string s3("Hello world", 2); // keep 2 character from first index by resizing
    cout << s3 << endl;

    // Method 3
    string s4 = "Hello world"; 
    string t(s4, 3); // remove 3 character from first index by resizing
    cout << t << endl;

    // Method 4
    string s5(7, 'A'); // repeat a same character a
    cout << s5 << endl;

    return 0;
}