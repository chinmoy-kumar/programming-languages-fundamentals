#include <bits/stdc++.h>
#include <iostream>
using namespace std;
int main(){
    string s;
    getline(cin, s);
    // syntax: stringstream object_name(string_name); 
    // Here stringstream is a class

    stringstream ss(s);
    string word; // declare a new string variable to store the word taken from s named string.
    while (ss >> word) // this loop will iterate until it gets words from s named string.
    {
        cout << word << endl;
    }
    


    return 0;
}