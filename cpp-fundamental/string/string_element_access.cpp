#include <bits/stdc++.h>
#include <iostream>
using namespace std;
int main(){
    string s = "Hello";
    cout << s[4] << endl; // acces the nth index of a string.
    cout << s.at(0) << endl; // this is also a way to access the nth index of a string.

    string s2 = "Hello World";
    cout << s.back() << endl; //access the last element of the string.
    cout << s[s.size()-1] << endl; // same output like s.back() function.

    cout << s.front() << endl; // access the first  element of the string.
    cout << s[0] << endl; // same output like s.front() function.

    return 0;
}