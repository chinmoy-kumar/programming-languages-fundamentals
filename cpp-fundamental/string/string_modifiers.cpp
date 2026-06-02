#include <bits/stdc++.h>
#include <iostream>
using namespace std;
int main(){
    string s = "Hello";
    string s2 = "Hey";

    // Concatenation str1 and str2
    s.append(s2); // add another string with a string.
    s += s2; // same output as s.append function.
    cout << s << endl;

    s.push_back('A'); // add character at the last of the string.
    s += 'A'; // same output as s.push_back() function.
    cout << s << endl;

    s2.pop_back(); // remove the last character of the string.
    cout << s2 << endl;

    return 0;
}