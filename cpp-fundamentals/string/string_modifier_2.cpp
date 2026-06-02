#include <bits/stdc++.h>
#include <iostream>
using namespace std;
int main(){
    string s = "Hello";
    string s2 = "Gello";
    s.assign(s2); // assign string.
    s.assign("Gello"); // also can be assign like this
    s = s2; // assign string same as s.assign() function.
    cout << s << endl;

    string s3 = "Hello world";
    //string_variable.erase(starting index, number of chararcter want to erase);
    s.erase(3, 2); // erase character from the string.
    cout << s << endl;

    string s4 = "Hello world";
    // string_variable.replace(starting index, number of character to erase, "string to be replaced");
    s4.replace(6, 5, "Bangladesh"); // replace a portion of the string.
    cout << s4 << endl;

    string s5 = "Hello world";
    s5.replace(6, 0, "Bangladesh"); // replace without erase character.
    cout << s5 << endl;

    string s6 = "Hello world";
    // string_variable.insert(starting index, "string to insert");
    s6.insert(5,"Bangladesh"); // insert a portion to a specific position.
    cout << s6 << endl;

    return 0;
}